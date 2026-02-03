import { useState, useEffect } from "react";
import Sidebar from "../Admin_Panel/components/Sidebar";
import Navbar from "../Admin_Panel/components/Navbar";
import Dashboard from "../Admin_Panel/components/Dashboard";
import Projects from "../Admin_Panel/components/Projects";
import ProjectForm from "../Admin_Panel/components/ProjectForm";
import Settings from "../Admin_Panel/components/Settings";
import axios from "axios";
import { toast } from "react-toastify";

function Admin() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchProjects = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/backend/project/view",
      );
      if (response.data.status) {
        setProjects(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      // toast.error("Failed to fetch projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSaveProject = (projectData) => {
    fetchProjects(); // Refresh list after save
    setEditingProject(null);
    setCurrentPage("projects");
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setCurrentPage("add-project");
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/backend/project/delete/${projectId}`,
      );
      if (response.data.status) {
        toast.success("Project deleted successfully");
        fetchProjects();
      } else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      toast.error("Error deleting project");
    }
  };

  const handleCancelForm = () => {
    setEditingProject(null);
    setCurrentPage("projects");
  };

  const handleNavigate = (page) => {
    if (page === "add-project") {
      setEditingProject(null);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard projects={projects} />;
      case "projects":
        return (
          <Projects
            projects={projects}
            onEdit={handleEditProject}
            onDelete={handleDeleteProject}
          />
        );
      case "add-project":
        return (
          <ProjectForm
            project={editingProject}
            onSave={handleSaveProject}
            onCancel={handleCancelForm}
          />
        );
      case "settings":
        return <Settings />;
      default:
        return <Dashboard projects={projects} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto">{renderPage()}</main>
      </div>
    </div>
  );
}

export default Admin;

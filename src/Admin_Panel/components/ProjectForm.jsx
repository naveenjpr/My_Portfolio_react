import { useState, useEffect } from "react";
import { Save, X, Upload, Plus } from "lucide-react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProjectForm({ project, onSave, onCancel }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    technologies: [],
    githubFrontend: "",
    githubBackend: "",
    link: "",
    status: true,
  });

  const [techInput, setTechInput] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        description: project.description || "",
        image: project.image || "",
        technologies: project.technologies || [],
        githubFrontend: project.github?.frontend || "",
        githubBackend: project.github?.backend || "",
        link: project.link || "",
        status: project.status ?? true,
      });

      let imgPreview = project.image || "";
      if (
        imgPreview &&
        !imgPreview.startsWith("http") &&
        !imgPreview.startsWith("data:")
      ) {
        imgPreview = `https://node-j-my-portfolio-mail-send.onrender.com/uploads/Project/${imgPreview}`;
      }
      setImagePreview(imgPreview);
    }
  }, [project]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImagePreview(result);
        setFormData((prev) => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setImagePreview(url);
    setSelectedFile(null); // Clear file if user types URL
  };

  const handleAddTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()],
      }));
      setTechInput("");
    }
  };

  const handleRemoveTechnology = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }));
  };
  const [formsubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a project title");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);

    // Prepare technologies: include existing + pending input if valid
    let finalTechnologies = [...formData.technologies];
    const currentTechInput = techInput.trim();
    if (currentTechInput && !finalTechnologies.includes(currentTechInput)) {
      finalTechnologies.push(currentTechInput);
    }

    // Append technologies array
    finalTechnologies.forEach((tech) => {
      data.append("technologies", tech);
    });

    data.append("github[frontend]", formData.githubFrontend);
    data.append("github[backend]", formData.githubBackend);
    data.append("link", formData.link);
    data.append("status", formData.status); // Use the state value

    if (selectedFile) {
      data.append("image", selectedFile);
    }

    const url = project
      ? `https://node-j-my-portfolio-mail-send.onrender.com/api/backend/project/update/${project._id}`
      : "https://node-j-my-portfolio-mail-send.onrender.com/api/backend/project/add";

    const method = project ? "put" : "post";

    axios({
      method: method,
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((result) => {
        if (result.data.status === true) {
          if (!project) {
            setFormData({
              title: "",
              description: "",
              image: "",
              technologies: [],
              githubFrontend: "",
              githubBackend: "",
              link: "",
            });
            setImagePreview("");
            setSelectedFile(null);
          }

          toast.success(
            result.data.message ||
              (project
                ? "Project updated successfully!"
                : "Project created successfully!")
          );

          if (onSave) {
            onSave(result.data.data); // Notify parent component
          } else {
            setFormSubmit(true);
          }
        } else {
          toast.error(result.data.message || "Something went wrong/Failed");
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMsg =
          error.response?.data?.message || "Internal Server Error";
        toast.error(errorMsg);
      });
  };

  useEffect(() => {
    if (formsubmit == true) {
      // Delay navigation slightly to allow toast to be seen logic if needed,
      // but typically immediate is fine if toast persists or different view.
      // Assuming /view-Javascript is the list page
      navigate("/view-Javascript");
    }
  }, [formsubmit, navigate]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {project ? "Edit Project" : "Add New Project"}
        </h1>
        <p className="text-gray-600 mt-1">
          {project
            ? "Update project information"
            : "Fill in the details to add a new project"}
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Image
              </label>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Or paste image URL"
                      name="image"
                      value={formData.image}
                      onChange={handleImageUrlChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <label className="cursor-pointer">
                    <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2 font-medium">
                      <Upload size={20} />
                      Upload
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {imagePreview && (
                  <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter project title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                placeholder="Enter project description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Technologies
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  name="technologies"
                  placeholder="Add technology (e.g., React.js)"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(), handleAddTechnology())
                  }
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={handleAddTechnology}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTechnology(tech)}
                      className="hover:text-blue-800"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                GitHub Frontend URL
              </label>
              <input
                type="url"
                name="githubFrontend"
                placeholder="https://github.com/username/repo"
                value={formData.githubFrontend}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    githubFrontend: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                GitHub Backend URL
              </label>
              <input
                type="url"
                name="githubBackend"
                placeholder="https://github.com/username/repo"
                value={formData.githubBackend}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    githubBackend: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Live Website URL
              </label>
              <input
                type="url"
                name="link"
                placeholder="https://yourproject.com"
                value={formData.link}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, link: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="flex items-center cursor-pointer gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={formData.status}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        status: e.target.checked,
                      }))
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Active Status ({formData.status ? "Active" : "Inactive"})
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all font-medium flex items-center gap-2"
            >
              <Save size={20} />
              {project ? "Update Project" : "Save Project"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

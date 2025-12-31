import { useState } from "react";
import { Edit2, Trash2, ExternalLink, Github, FolderOpen } from "lucide-react";
import Card from "./Card";
import DeleteModal from "./DeleteModal";

export default function Projects({ projects, onEdit, onDelete }) {
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    project: null,
  });

  const handleDeleteClick = (project) => {
    setDeleteModal({ isOpen: true, project });
  };

  const handleConfirmDelete = () => {
    if (deleteModal.project) {
      onDelete(deleteModal.project._id);
      setDeleteModal({ isOpen: false, project: null });
    }
  };

  if (projects.length === 0) {
    return (
      <div className="p-6">
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FolderOpen size={48} className="text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No Projects Yet
          </h3>
          <p className="text-gray-600 mb-6">
            Get started by adding your first project
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          <p className="text-gray-600 mt-1">Manage all your projects</p>
        </div>
      </div>

      <div className="hidden lg:block">
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Technologies
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Links
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr
                    key={project._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            project.image?.startsWith("http") ||
                            project.image?.startsWith("data:")
                              ? project.image
                              : `https://node-j-my-portfolio-mail-send.onrender.com/uploads/Project/${project.image}`
                          }
                          alt={project.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="font-semibold text-gray-800">
                          {project.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">
                        {project.description}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            project.status ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        <span className="text-sm text-gray-600">
                          {project.status ? "Active" : "Inactive"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        {project.github?.frontend && (
                          <a
                            href={project.github?.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline truncate max-w-[150px] inline-block"
                            title={project.github?.frontend}
                          >
                            FE: {project.github?.frontend}
                          </a>
                        )}
                        {project.github?.backend && (
                          <a
                            href={project.github?.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline truncate max-w-[150px] inline-block"
                            title={project.github?.backend}
                          >
                            BE: {project.github?.backend}
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline truncate max-w-[150px] inline-block"
                            title={project.link}
                          >
                            Live: {project.link}
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => onEdit(project)}
                          className="p-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(project)}
                          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="lg:hidden grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <Card key={project._id} className="p-4">
            <div className="flex gap-4 mb-4">
              <img
                src={
                  project.image?.startsWith("http") ||
                  project.image?.startsWith("data:")
                    ? project.image
                    : `https://node-j-my-portfolio-mail-send.onrender.com/uploads/Project/${project.image}`
                }
                alt={project.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <span
                    className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                      project.status ? "bg-green-500" : "bg-red-500"
                    }`}
                    title={project.status ? "Active" : "Inactive"}
                  ></span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-200">
              {project.github?.frontend && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500">
                    FE:
                  </span>
                  <a
                    href={project.github?.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline truncate"
                  >
                    {project.github?.frontend}
                  </a>
                </div>
              )}
              {project.github?.backend && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500">
                    BE:
                  </span>
                  <a
                    href={project.github?.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline truncate"
                  >
                    {project.github?.backend}
                  </a>
                </div>
              )}
              {project.link && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500">
                    Live:
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline truncate"
                  >
                    {project.link}
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end pt-4 gap-2">
              <button
                onClick={() => onEdit(project)}
                className="p-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg transition-colors"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDeleteClick(project)}
                className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, project: null })}
        onConfirm={handleConfirmDelete}
        projectTitle={deleteModal.project?.title || ""}
      />
    </div>
  );
}

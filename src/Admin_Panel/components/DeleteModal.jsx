import { X, AlertTriangle } from 'lucide-react';

export default function DeleteModal({ isOpen, onClose, onConfirm, projectTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
          <AlertTriangle className="text-red-600" size={24} />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Delete Project</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <span className="font-semibold">"{projectTitle}"</span>? This action cannot be undone.
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

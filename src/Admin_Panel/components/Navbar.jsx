import { useState, useEffect, useRef } from 'react';
import { Menu, User, LogOut, Settings, ChevronDown } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    alert('Logout functionality would be implemented here');
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} className="text-gray-600" />
          </button>
          <h2 className="text-xl font-bold text-gray-800">Welcome Back!</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
              <ChevronDown
                size={20}
                className={`text-gray-600 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>

                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <User size={16} />
                  Profile
                </button>

                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Settings size={16} />
                  Settings
                </button>

                <div className="border-t border-gray-200 my-2"></div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

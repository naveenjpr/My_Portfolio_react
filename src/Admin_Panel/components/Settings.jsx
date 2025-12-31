import { User, Bell, Lock, Palette } from 'lucide-react';
import Card from './Card';

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <User className="text-blue-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Profile Settings</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Bell className="text-green-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
          </label>

          <label className="flex items-center justify-between">
            <span className="text-gray-700">Project Updates</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
          </label>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Lock className="text-red-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Security</h2>
        </div>

        <div className="space-y-4">
          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            Change Password
          </button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Palette className="text-purple-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Appearance</h2>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Theme</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
            <option>Light</option>
            <option>Dark</option>
            <option>Auto</option>
          </select>
        </div>
      </Card>
    </div>
  );
}

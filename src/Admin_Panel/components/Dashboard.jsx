import { FolderKanban, Code2, TrendingUp, Activity } from 'lucide-react';
import Card from './Card';

export default function Dashboard({ projects }) {
  const totalProjects = projects.length;

  const allTechnologies = projects.flatMap(p => p.technologies || []);
  const uniqueTechnologies = [...new Set(allTechnologies)];
  const totalTechnologies = uniqueTechnologies.length;

  const projectsWithFrontend = projects.filter(p => p.github?.frontend).length;
  const projectsWithBackend = projects.filter(p => p.github?.backend).length;

  const stats = [
    {
      title: 'Total Projects',
      value: totalProjects,
      icon: FolderKanban,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Technologies Used',
      value: totalTechnologies,
      icon: Code2,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      title: 'Frontend Repos',
      value: projectsWithFrontend,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Backend Repos',
      value: projectsWithBackend,
      icon: Activity,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your projects and statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                </div>
                <div className={`w-14 h-14 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={stat.textColor} size={28} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Technology Distribution</h2>
        <div className="flex flex-wrap gap-2">
          {uniqueTechnologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Projects</h2>
        <div className="space-y-4">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project._id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={project.image?.startsWith('http') || project.image?.startsWith('data:')
                  ? project.image
                  : `http://localhost:5000/uploads/Project/${project.image}`}
                alt={project.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{project.description}</p>
              </div>
              <div className="flex gap-2">
                {project.technologies?.slice(0, 2).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

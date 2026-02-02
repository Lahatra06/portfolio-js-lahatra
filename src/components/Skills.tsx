import { Code2, Palette, Server, Zap, Database, GitBranch } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
    },
    {
      icon: <Server size={32} />,
      title: 'Backend & APIs',
      skills: ['Node.js', 'Nest.js', 'REST APIs', 'PHP', 'Spring Boot', 'Java'],
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'GitLab', 'Webpack', 'Vite', 'npm'],
    },
    {
      icon: <Palette size={32} />,
      title: 'Design & UX',
      skills: ['Responsive Design', 'User Experience', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{category.icon}</div>
              <h3 className="text-xl mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

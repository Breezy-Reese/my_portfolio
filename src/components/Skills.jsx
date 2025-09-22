import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "PHP", "C#", "Java"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PHP (Laravel)", "FastAPI", ".NET"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Database Design", "Query Optimization"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "XAMPP", "Ngrok"]
    },
    {
      category: "Specialized",
      skills: ["M-Pesa Daraja API", "RESTful APIs", "Responsive Design", "Deployment"]
    }
  ];

  // Replace portfolio images with placeholder URLs
  const portfolioItems = [
    { src: "https://via.placeholder.com/300", title: "Modern Workspace" },
    { src: "https://via.placeholder.com/300", title: "React Development" },
    { src: "https://via.placeholder.com/300", title: "Backend & Database" },
    { src: "https://via.placeholder.com/300", title: "Responsive Design" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-6">
            Skills & Expertise
          </h1>
        </div>

        {/* Skills Categories */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
              As a versatile software engineer, I have hands-on experience in both frontend and backend development. 
              My core skills include modern web technologies and frameworks that enable me to build scalable, 
              efficient, and user-friendly applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Showcase */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Portfolio Showcase</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index}
                  className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-3 text-sm">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

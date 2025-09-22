
import React from 'react';
import { Network, Code, PenTool, Database, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Networking",
      description: "Kijana Wamalwa Teaching and Referral Hospital At Trans-Nzoia County Kitale",
      skills: ["Network Fundamentals", "Internet and Web Technologies", "Local Area Network", "Wide Area Network", "Network Security", "Virtual Private Networks (VPNs)"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Carliz's E-commerce Website: A platform for buying and selling products.",
      skills: ["Frontend Development", "Backend Development", "Full-Stack Development", "Database Development"]
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "I have written articles for various blogs and websites, including Melbite.com.",
      skills: ["Technical Writing", "Blog Posts", "Documentation", "SEO Content"]
    },
    {
      icon: Database,
      title: "MySQL",
      description: "Database management and optimization services",
      skills: ["Data Management", "Security", "Data Maintenance", "Performance Tuning", "Backup and Recovery", "Data Modelling"]
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development",
      skills: ["React Development", "Node.js Backend", "API Integration", "Database Design"]
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Ensuring secure and optimized applications",
      skills: ["Web Security", "Performance Optimization", "Code Review", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
            Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            All your digital needs... covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 relative group hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-600 p-4 rounded-full">
                    <IconComponent className="text-white" size={24} />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block mx-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

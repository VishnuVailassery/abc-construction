import React from 'react';

const projects = [
  {
    title: 'Project One',
    image: '/project1.jpg',
  },
  {
    title: 'Project Two',
    image: '/project2.jpg',
  },
  {
    title: 'Project Three',
    image: '/project3.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 text-white text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

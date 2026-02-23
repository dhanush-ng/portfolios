import { motion } from 'motion/react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-serif italic mb-20">Selected Works</h2>

          <div className="space-y-32">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-1 text-[10px] font-mono opacity-30 mt-2">
                  0{idx + 1}
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-4xl font-serif italic mb-6 leading-tight">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 border border-line rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <ul className="space-y-4">
                    {project.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed opacity-70 flex gap-4">
                        <span className="opacity-30">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

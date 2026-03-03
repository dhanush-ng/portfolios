import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Selected <span className="gradient-text">Works</span></h2>
            <p className="text-slate-400 max-w-2xl">A collection of projects spanning AI automation, web systems, and mobile applications, showcasing my problem-solving approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden flex flex-col group"
              >
                <div className="h-48 gradient-bg opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center">
                  <h3 className="text-4xl font-black text-white/10 uppercase tracking-tighter">{project.title.split(' ')[0]}</h3>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {project.description.map((item, i) => (
                      <li key={i} className="text-sm text-slate-400 leading-relaxed flex gap-3">
                        <span className="text-accent-blue opacity-50">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 glass-card py-3 flex items-center justify-center gap-2 hover:bg-white/10 font-bold text-xs uppercase tracking-widest"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a
                      href="#"
                      className="flex-1 gradient-bg py-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform font-bold text-xs uppercase tracking-widest text-white"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

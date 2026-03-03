import { motion } from 'framer-motion';
import { ArrowRight, Download, Projector as ProjectsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-accent-blue font-medium tracking-wider uppercase text-sm">Welcome to my portfolio</span>
            <h1 className="text-6xl md:text-8xl font-bold mt-4 leading-tight">
              Hello, I'm <br />
              <span className="gradient-text">Dhanush N G</span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold text-slate-400 mt-6 h-12">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'AI Enthusiast', 'MCA Student'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-slate-300",
                  cursorClassName: "text-accent-purple"
                }}
              />
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mt-8 leading-relaxed">
              Crafting premium digital experiences through clean code and modern AI integration. Specializing in full-stack development and multi-agent systems.
            </p>

            <div className="flex flex-wrap gap-6 mt-12">
              <Link
                to="/projects"
                className="group gradient-bg px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/Dhanush_Resume.pdf"
                download="Dhanush_Resume.pdf"
                className="glass-card px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/10"
              >
                Download Resume <Download size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-10 glow-effect"
          >
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-4">01 / Skillset</span>
            <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
            <p className="text-slate-400 leading-relaxed">Building multi-agent frameworks, predictive models, and integrating advanced LLM APIs into scalable applications.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-10 glow-effect"
          >
            <span className="text-accent-purple text-xs font-bold uppercase tracking-widest block mb-4">02 / Focus</span>
            <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
            <p className="text-slate-400 leading-relaxed">Developing responsive, user-centric interfaces with React and robust backends using Node.js and Express.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-10 glow-effect"
          >
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-4">03 / Foundation</span>
            <h3 className="text-2xl font-bold mb-4">Data Systems</h3>
            <p className="text-slate-400 leading-relaxed">Designing efficient database structures with MongoDB, MySQL, and PostgreSQL for complex web architectures.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="col-header block mb-4">Location: Tumakuru, India</span>
          <h1 className="text-[12vw] md:text-[8vw] font-serif italic leading-[0.9] tracking-tighter mb-8">
            Dhanush N G
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
              MCA student at SIT, specializing in AI automation, multi-agent systems, and modern web development. Crafting precise digital solutions with a focus on efficiency and scalability.
            </p>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <Link to="/projects" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-60 transition-opacity">
                View Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-60 transition-opacity">
                About Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          <div className="bg-bg p-8">
            <span className="col-header block mb-4">01 / Expertise</span>
            <h3 className="text-2xl font-serif italic mb-4">AI & Machine Learning</h3>
            <p className="text-sm opacity-60 leading-relaxed">Building multi-agent frameworks and predictive models using Python and modern LLM APIs.</p>
          </div>
          <div className="bg-bg p-8">
            <span className="col-header block mb-4">02 / Craft</span>
            <h3 className="text-2xl font-serif italic mb-4">Web Development</h3>
            <p className="text-sm opacity-60 leading-relaxed">Developing responsive, user-centric interfaces with React, JavaScript, and modern CSS frameworks.</p>
          </div>
          <div className="bg-bg p-8">
            <span className="col-header block mb-4">03 / Foundation</span>
            <h3 className="text-2xl font-serif italic mb-4">Data Systems</h3>
            <p className="text-sm opacity-60 leading-relaxed">Designing efficient database structures and managing data pipelines for scalable applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

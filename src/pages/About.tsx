import { motion } from 'framer-motion';
import { EDUCATION, SKILLS } from '../constants';
import { Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
            <div className="w-64 h-64 md:w-80 md:h-80 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full h-full glass-card overflow-hidden flex items-center justify-center bg-slate-800">
                <span className="text-6xl">👨‍💻</span>
                {/* Image placeholder - user can replace with actual src later */}
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="gradient-text">Me</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                I am a dedicated Computer Science (MCA) student at Siddaganga Institute of Technology, passionate about building intelligent systems and seamless user experiences. With a strong foundation in Full Stack Development and AI, I strive to solve complex problems through innovative technology.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 text-center">
                  <h4 className="text-2xl font-bold text-white">4+</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Projects</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <h4 className="text-2xl font-bold text-white">15+</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Skills</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <h4 className="text-2xl font-bold text-white">MCA</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Student</p>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-32">
            <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
              <BookOpen className="text-accent-blue" /> Education
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-card p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full gradient-bg opacity-50"></div>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-slate-400">{edu.institution}, {edu.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-accent-purple font-mono text-sm">{edu.period}</span>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">CGPA: {edu.cgpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-32">
            <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
              <Briefcase className="text-accent-purple" /> Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SKILLS.map((group, idx) => (
                <div key={idx} className="glass-card p-8 glow-effect">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 glass-card !rounded-lg text-accent-blue">
                      <group.icon size={20} />
                    </div>
                    <span className="text-sm uppercase tracking-widest font-bold text-slate-300">{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>


        </motion.div>
      </div>
    </div>
  );
};

export default About;

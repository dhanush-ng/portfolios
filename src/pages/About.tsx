import { motion } from 'motion/react';
import { EDUCATION, SKILLS } from '../constants';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-serif italic mb-20">Background & Skills</h2>

          <section className="mb-32">
            <div className="grid grid-cols-4 mb-4 px-4">
              <span className="col-header">Institution</span>
              <span className="col-header">Degree</span>
              <span className="col-header">Period</span>
              <span className="col-header text-right">CGPA</span>
            </div>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="data-row grid grid-cols-4 p-4 items-center">
                <div className="text-sm font-medium">{edu.institution}</div>
                <div className="text-xs opacity-60">{edu.degree}</div>
                <div className="text-[10px] uppercase tracking-widest font-mono">{edu.period}</div>
                <div className="text-right font-mono">{edu.cgpa}</div>
              </div>
            ))}
          </section>

          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-12 opacity-40">Technical Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {SKILLS.map((group, idx) => (
                <div key={idx} className="border-l border-line pl-6">
                  <div className="flex items-center gap-3 mb-6 opacity-40">
                    <group.icon size={16} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-sm font-serif italic px-3 py-1 bg-ink/5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-32 border-t border-line pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <span className="col-header block mb-6">Soft Skills</span>
                <ul className="space-y-4">
                  <li className="text-2xl font-serif italic">Quick Learner</li>
                  <li className="text-2xl font-serif italic">Teamwork</li>
                  <li className="text-2xl font-serif italic">Strong Work Ethic</li>
                </ul>
              </div>
              <div>
                <span className="col-header block mb-6">Accomplishments</span>
                <ul className="space-y-6">
                  <li className="text-sm leading-relaxed opacity-70">
                    Attended a company-hosted session on cybersecurity best practices, digital identity, and data protection.
                  </li>
                  <li className="text-sm leading-relaxed opacity-70">
                    Participated and volunteered in ZERONE (College-Level Technical Symposium).
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

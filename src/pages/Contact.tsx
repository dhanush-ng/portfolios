import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Let's <span className="gradient-text">Connect</span></h2>
            <p className="text-slate-400 text-lg">I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-8 flex items-center gap-6 group hover:glow-effect">
                <div className="p-4 glass-card !rounded-2xl text-accent-blue group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 block mb-1">Email Me</span>
                  <a href="mailto:dhanushng07@gmail.com" className="text-lg font-bold text-white hover:text-accent-blue transition-colors">dhanushng07@gmail.com</a>
                </div>
              </div>

              <div className="glass-card p-8 flex items-center gap-6 group hover:glow-effect">
                <div className="p-4 glass-card !rounded-2xl text-accent-purple group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 block mb-1">Call Me</span>
                  <a href="tel:+919019374026" className="text-lg font-bold text-white hover:text-accent-purple transition-colors">+91 9019374026</a>
                </div>
              </div>

              <div className="glass-card p-8 flex items-center gap-6 group hover:glow-effect">
                <div className="p-4 glass-card !rounded-2xl text-accent-blue group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 block mb-1">Location</span>
                  <span className="text-lg font-bold text-white">Karnataka, India</span>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <a href="https://github.com/dhanushng" target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-white/10 transition-colors text-slate-300">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/dhanushng" target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-white/10 transition-colors text-slate-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-[0.03] rounded-bl-full"></div>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Dhanush N G"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="dhanush@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Hi Dhanush, I'd like to talk about..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white placeholder:text-slate-600 resize-none"
                    />
                  </div>
                  <button className="gradient-bg w-full py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all text-white shadow-lg shadow-accent-blue/20">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-serif italic mb-20">Get in Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-2xl font-light opacity-70 mb-12 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-bg transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="col-header block">Email</span>
                    <a href="mailto:dhanushng07@gmail.com" className="text-lg font-medium">dhanushng07@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-bg transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="col-header block">Phone</span>
                    <a href="tel:+919019374026" className="text-lg font-medium">+91 9019374026</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:text-bg transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="col-header block">Location</span>
                    <span className="text-lg font-medium">Tumakuru, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ink/5 p-12 rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-line py-2 focus:outline-none focus:border-ink transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-line py-2 focus:outline-none focus:border-ink transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Subject</label>
                  <input type="text" className="w-full bg-transparent border-b border-line py-2 focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-line py-2 focus:outline-none focus:border-ink transition-colors resize-none" />
                </div>
                <button className="w-full py-4 bg-ink text-bg text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

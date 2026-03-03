const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-sm font-bold gradient-text uppercase tracking-widest">Dhanush N G</div>
          <p className="text-xs text-slate-500 font-medium">Built with ❤️ by Dhanush N G</p>
        </div>

        <div className="flex gap-8">
          <a href="mailto:dhanushng07@gmail.com" className="text-xs uppercase tracking-widest text-slate-400 hover:text-accent-blue transition-colors font-bold">Email</a>
          <a href="https://github.com/dhanushng" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors font-bold">GitHub</a>
          <a href="https://linkedin.com/in/dhanushng" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-slate-400 hover:text-accent-purple transition-colors font-bold">LinkedIn</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

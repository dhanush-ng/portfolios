const Footer = () => {
  return (
    <footer className="py-12 border-t border-line mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs uppercase tracking-widest opacity-50">
          © {new Date().getFullYear()} Dhanush N G
        </div>
        <div className="flex gap-8">
          <a href="mailto:dhanushng07@gmail.com" className="text-xs uppercase tracking-widest hover:opacity-100 opacity-50 transition-opacity">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:opacity-100 opacity-50 transition-opacity">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:opacity-100 opacity-50 transition-opacity">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

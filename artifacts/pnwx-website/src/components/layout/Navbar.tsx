import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Our approach', href: '#reviews' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_16px_40px_-28px_rgba(15,23,42,0.8)] py-3 border-white/70' 
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-display text-sm font-bold tracking-[0.2em] transition-transform group-hover:scale-105 ${
            isScrolled ? 'bg-primary text-accent' : 'bg-white/90 text-primary'
          }`}>
            PX
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-lg tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Pacific Northwest
            </span>
            <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${isScrolled ? 'text-secondary' : 'text-white/80'}`}>
              Imaging Collective
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="shine px-5 py-2.5 rounded-full bg-accent text-primary font-semibold text-sm hover:brightness-105 transition-all shadow-[0_12px_30px_-18px_rgba(15,23,42,0.75)]"
          >
            Request Consultation
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-3 right-3 rounded-2xl glass-card shadow-xl border border-white/80 flex flex-col py-4 px-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-semibold text-slate-800 hover:text-accent py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 w-full text-center px-5 py-3 rounded-full bg-accent text-primary font-bold text-sm"
          >
            Request Consultation
          </a>
        </div>
      )}
    </header>
  );
}



import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1122] text-white/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
              X
            </div>
            <div>
              <div className="font-bold text-white text-lg tracking-tight leading-none">
                Pacific Northwest X-Ray Inc.
              </div>
              <div className="text-xs uppercase tracking-wider mt-1">
                Since 1997
              </div>
            </div>
          </div>

          <div className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Pacific Northwest X-Ray Inc. All rights reserved.<br/>
            Serving healthcare and veterinary professionals globally.
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
        </div>
      </div>
    </footer>
  );
}

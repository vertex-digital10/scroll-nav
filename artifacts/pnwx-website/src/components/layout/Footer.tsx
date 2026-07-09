import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071229] text-white/70 py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_0.8fr_auto] gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-display font-bold text-sm tracking-[0.2em]">
              PX
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg tracking-tight leading-none">
                Pacific Northwest X-Ray Inc.
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] mt-1 text-white/65">
                Since 1997
              </div>
            </div>
          </div>

          <div className="text-sm text-white/80">
            High-trust partner for radiology teams, veterinary clinics, and specialists seeking dependable imaging supply operations.
          </div>

          <div className="text-sm text-white/80">
            <p>Mon-Fri, 8:00 AM-5:00 PM PT</p>
            <p className="mt-1">Toll Free: 800-827-9729</p>
          </div>

          <div className="flex md:justify-end">
            <button 
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/10"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="premium-divider mt-10 mb-6" />

        <div className="text-xs text-white/60 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Pacific Northwest X-Ray Inc. All rights reserved.</p>
          <p>Serving healthcare and veterinary professionals globally.</p>
        </div>
      </div>
    </footer>
  );
}

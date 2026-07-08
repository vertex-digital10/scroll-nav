import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white min-h-[90vh] flex items-center">
      {/* Background abstract medical pattern/shapes */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl opacity-10 translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Trusted since 1997
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                The Premier Source for <span className="text-accent">X-Ray Equipment</span> & Supplies.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                Expert knowledge, fast shipping, and a comprehensive catalog serving healthcare facilities and veterinary practices across the Pacific Northwest and globally.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                onClick={(e) => handleScrollTo(e, '#services')}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded bg-accent text-primary font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Contact Us
              </a>
            </FadeIn>

            <FadeIn delay={0.5} className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-accent" size={28} />
                <span className="font-semibold text-sm">Industry Experts</span>
              </div>
              <div className="flex flex-col gap-2">
                <Clock className="text-accent" size={28} />
                <span className="font-semibold text-sm">Fast Shipping</span>
              </div>
              <div className="flex flex-col gap-2">
                <Globe className="text-accent" size={28} />
                <span className="font-semibold text-sm">Global Reach</span>
              </div>
            </FadeIn>
          </div>

          <div className="hidden lg:block relative">
            <FadeIn direction="left" delay={0.2}>
              {/* Abstract decorative medical imaging representation */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/40 to-primary/80 border border-white/10 backdrop-blur-sm p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start z-10">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-accent rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50 font-mono uppercase">System Status</div>
                      <div className="text-sm font-bold text-accent">ONLINE / READY</div>
                    </div>
                  </div>
                  
                  {/* Decorative Scan Lines */}
                  <div className="absolute inset-x-0 top-1/4 bottom-1/4 border-y border-accent/20 flex flex-col justify-around py-4">
                    <div className="w-full h-px bg-white/5"></div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="w-full h-px bg-accent/20 relative">
                       <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/40 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                    </div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="w-full h-px bg-white/5"></div>
                  </div>

                  <div className="z-10 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Precision Diagnostics</div>
                        <div className="text-xs text-white/60">Delivering clarity since 1997</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

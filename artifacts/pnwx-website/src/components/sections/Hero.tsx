import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, ShieldCheck, Clock, Globe, Sparkles } from 'lucide-react';

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden lux-gradient text-white min-h-[94vh] flex items-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute top-8 left-4 h-52 w-52 rounded-full bg-white/10 blur-3xl float-slow" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/30 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-accent" />
                Premium Radiology Distribution Partner Since 1997
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                Modern Imaging Supply,
                <span className="text-accent block mt-2"> White-Glove Service.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-100/90 mb-8 max-w-xl leading-relaxed">
                Upgrade your diagnostic workflow with curated X-ray systems, protection essentials, and precision accessories delivered by specialists who understand clinical operations.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                onClick={(e) => handleScrollTo(e, '#services')}
                className="shine inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-bold text-lg hover:brightness-105 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Premium Catalog
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Book a Consultation
              </a>
            </FadeIn>

            <FadeIn delay={0.5} className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-accent" size={28} />
                <span className="font-semibold text-sm">Clinical-Grade Standards</span>
              </div>
              <div className="flex flex-col gap-2">
                <Clock className="text-accent" size={28} />
                <span className="font-semibold text-sm">Rapid Fulfillment</span>
              </div>
              <div className="flex flex-col gap-2">
                <Globe className="text-accent" size={28} />
                <span className="font-semibold text-sm">Nationwide + Global</span>
              </div>
            </FadeIn>
          </div>

          <div className="hidden lg:block relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative w-full max-w-xl mx-auto">
                <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white/20 bg-slate-900/45 backdrop-blur-md p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80"
                    alt="Radiology workstation and imaging monitors"
                    className="h-[390px] w-full rounded-[1.4rem] object-cover"
                  />

                  <div className="absolute -left-8 top-8 w-44 rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur-md float-slow">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Live Inventory</p>
                    <p className="font-display text-3xl text-accent mt-2">12k+</p>
                    <p className="text-xs text-white/80 mt-1">SKUs available</p>
                  </div>

                  <div className="absolute -bottom-8 right-5 w-56 rounded-2xl border border-white/20 bg-black/40 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/70">Avg dispatch time</p>
                    <div className="mt-2 flex items-end gap-2">
                      <span className="font-display text-3xl text-white">24h</span>
                      <span className="text-sm text-accent">priority window</span>
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

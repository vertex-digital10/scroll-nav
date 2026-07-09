import { FadeIn } from '@/components/ui/fade-in';
import { Phone, Printer, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <FadeIn>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-[0.15em] mb-4">
                Get in Touch
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Talk to a Specialist.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Need a quote, compatibility check, or replacement recommendation? Our team will map the right products to your workflow.
              </p>
            </FadeIn>

            <FadeIn delay={0.08} className="glass-card rounded-2xl p-6 mb-8">
              <p className="text-xs uppercase tracking-[0.18em] text-secondary">Rapid response channels</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:+18008279729" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold">
                  Call Toll Free
                  <ArrowUpRight size={14} />
                </a>
                <a href="tel:+15036673000" className="inline-flex items-center gap-2 rounded-full bg-white text-primary border border-primary/20 px-4 py-2 text-sm font-semibold">
                  Call Direct
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg">Call Us</h4>
                    <p className="text-slate-600 mt-1">
                      <span className="font-semibold text-slate-900">Toll Free (USA):</span> 800-827-9729 (800-827-XRAY)<br/>
                      <span className="font-semibold text-slate-900">Local/Direct:</span> 503-667-3000
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Printer size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg">Fax Orders</h4>
                    <p className="text-slate-600 mt-1">
                      <span className="font-semibold text-slate-900">Fax:</span> 503-666-8855<br/>
                      <span className="text-sm italic">Accepted 24 hours a day</span>
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg">Locations</h4>
                    <div className="grid sm:grid-cols-2 gap-4 mt-1">
                      <p className="text-slate-600 text-sm">
                        <span className="font-semibold text-slate-900 block mb-1">Physical Address:</span>
                        845 NW Dunbar Ave, Ste 109<br/>
                        Troutdale, OR 97060
                      </p>
                      <p className="text-slate-600 text-sm">
                        <span className="font-semibold text-slate-900 block mb-1">Mailing Address:</span>
                        P.O. Box 625<br/>
                        Gresham, OR 97030
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg">Business Hours</h4>
                    <p className="text-slate-600 mt-1">
                      Monday–Friday, 8:00 AM – 5:00 PM (Pacific Time)
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="h-full min-h-[440px] lg:min-h-0 rounded-2xl overflow-hidden shadow-inner relative border border-white/80">
            <FadeIn delay={0.3} className="w-full h-full" fullWidth>
              <iframe
                title="Google Maps Location for Pacific Northwest X-Ray"
                src="https://maps.google.com/maps?q=845+NW+Dunbar+Ave+Ste+109+Troutdale+OR+97060&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </FadeIn>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/70" />
          </div>

        </div>
      </div>
    </section>
  );
}

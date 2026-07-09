import { FadeIn } from '@/components/ui/fade-in';
import { MapPin, Phone, Clock, FileText, Award, Truck } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          
          <div>
            <FadeIn>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/12 text-secondary font-bold text-sm uppercase tracking-[0.15em] mb-4">
                About Pacific Northwest X-Ray
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                A Legacy of Precision,
                <span className="block text-secondary mt-2">Built for Modern Care Teams.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  <strong>Pacific Northwest X-Ray Inc.</strong> is headquartered in Troutdale, Oregon and supports hospitals, surgical centers, specialty clinics, and veterinary groups with trusted imaging equipment.
                </p>
                <p>
                  Our digital-first catalog is updated continuously, so teams can source compliant products, compare specs quickly, and place orders with confidence.
                </p>
                <p>
                  From room setup to routine replenishment, our experts help you standardize purchasing and maintain uninterrupted imaging operations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-bold text-primary mb-4 text-lg">Why teams choose PNWX</h3>
              <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span><strong>Clinical guidance</strong> for imaging rooms, accessories, and compliance needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span><strong>Established in 1997</strong> with decades of reliable, repeatable service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span><strong>Full digital catalog</strong> curated for fast procurement workflows.</span>
                  </li>
              </ul>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FadeIn direction="left" delay={0.05} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/80 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.8)]">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Medical team discussing radiology workflow"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/85 via-primary/35 to-transparent" />
                <div className="absolute left-5 bottom-5 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/75">Consultative approach</p>
                  <p className="font-display text-xl mt-1">From selection to support</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col justify-center">
                <MapPin className="text-secondary mb-4" size={28} />
                <h4 className="font-display font-bold text-lg mb-2 text-primary">Where We Operate</h4>
                <p className="text-slate-600 text-sm">
                  Oregon based with fulfillment support for clinics across the U.S. and international destinations.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col justify-center">
                <Truck className="text-secondary mb-4" size={28} />
                <h4 className="font-display font-bold text-lg mb-2 text-primary">Logistics Reliability</h4>
                <p className="text-slate-600 text-sm">
                  Priority dispatch options and practical alternatives when products are time-sensitive.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="bg-primary p-6 rounded-2xl text-white h-full flex flex-col justify-center shadow-lg">
                <Clock className="text-accent mb-4" size={28} />
                <h4 className="font-display font-bold text-lg mb-2">Responsive Support</h4>
                <p className="text-white/80 text-sm">
                  Monday to Friday, 8am to 5pm Pacific with specialists ready for product guidance.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <div className="bg-accent p-6 rounded-2xl text-primary h-full flex flex-col justify-center shadow-lg">
                <FileText className="text-primary mb-3" size={28} />
                <h4 className="font-display font-bold text-lg mb-2">Always-Current Catalog</h4>
                <p className="text-primary/80 text-sm font-medium">
                  No stale printed pages. Live inventory, updated specs, and transparent product details.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.5}>
              <div className="bg-secondary p-6 rounded-2xl text-white h-full flex flex-col justify-center shadow-lg">
                <Award className="text-accent mb-3" size={28} />
                <h4 className="font-display font-bold text-lg mb-2">Trusted Reputation</h4>
                <p className="text-white/85 text-sm">
                  Preferred vendor for healthcare and veterinary professionals who value dependable supply partners.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.55}>
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col justify-center">
                <Phone className="text-secondary mb-3" size={28} />
                <h4 className="font-display font-bold text-lg mb-2 text-primary">Direct Access</h4>
                <p className="text-slate-600 text-sm">
                  Talk to real product experts, not scripted call queues.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

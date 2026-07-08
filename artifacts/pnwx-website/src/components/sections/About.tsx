import { FadeIn } from '@/components/ui/fade-in';
import { MapPin, Phone, Clock, FileText } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <div className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Your Trusted Radiology Partner.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  <strong>Pacific Northwest X-Ray Inc.</strong> is based in Gresham/Troutdale, Oregon, USA. We are a leading distributor of X-ray and radiology equipment, accessories, and supplies.
                </p>
                <p>
                  Our website IS our catalog — we focus our resources on keeping our online inventory up-to-date and accessible, offering no printed catalog to ensure you always see the latest products and specifications.
                </p>
                <p>
                  We proudly serve hospitals, clinics, medical practices, veterinary offices, and radiology professionals throughout the United States and internationally.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-primary mb-4 text-lg">Why choose PNWX?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span><strong>Expert Knowledge</strong> in X-ray imaging and diagnostics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span><strong>Established in 1997</strong> — decades of reliable service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span><strong>Full online catalog</strong> continuously updated at pnwx.com</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FadeIn direction="left" delay={0.1}>
              <div className="bg-primary p-6 rounded-xl text-white h-full flex flex-col justify-center shadow-lg">
                <MapPin className="text-accent mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-white/80 text-sm">
                  Headquartered in Gresham/Troutdale, Oregon. Shipping across the USA and internationally.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-secondary p-6 rounded-xl text-white h-full flex flex-col justify-center shadow-lg">
                <Phone className="text-accent mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Support</h4>
                <p className="text-white/80 text-sm">
                  Phone lines open<br/>
                  8am–5pm M-F (PT)<br/>
                  Expert guidance available.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.3}>
              <div className="bg-gray-100 p-6 rounded-xl text-primary h-full flex flex-col justify-center shadow-sm border border-gray-200">
                <Clock className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Availability</h4>
                <p className="text-gray-600 text-sm">
                  Fax orders accepted 24 hours a day. Fast turnaround on all standard items.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <div className="bg-accent p-6 rounded-xl text-primary h-full flex flex-col justify-center shadow-lg">
                <FileText className="text-primary mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Digital Catalog</h4>
                <p className="text-primary/80 text-sm font-medium">
                  Eco-friendly, always current. No printed catalogs—everything is accessible online.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

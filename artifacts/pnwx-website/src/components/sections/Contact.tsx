import { FadeIn } from '@/components/ui/fade-in';
import { Phone, Printer, MapPin, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <FadeIn>
              <div className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Contact Our Team.
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Have questions about our equipment or need a specialized quote? Our expert team is ready to assist you.
              </p>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Call Us</h4>
                    <p className="text-gray-600 mt-1">
                      <span className="font-semibold text-gray-900">Toll Free (USA):</span> 800-827-9729 (800-827-XRAY)<br/>
                      <span className="font-semibold text-gray-900">Local/Direct:</span> 503-667-3000
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
                    <h4 className="font-bold text-primary text-lg">Fax Orders</h4>
                    <p className="text-gray-600 mt-1">
                      <span className="font-semibold text-gray-900">Fax:</span> 503-666-8855<br/>
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
                    <h4 className="font-bold text-primary text-lg">Locations</h4>
                    <div className="grid sm:grid-cols-2 gap-4 mt-1">
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold text-gray-900 block mb-1">Physical Address:</span>
                        845 NW Dunbar Ave, Ste 109<br/>
                        Troutdale, OR 97060
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold text-gray-900 block mb-1">Mailing Address:</span>
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
                    <h4 className="font-bold text-primary text-lg">Business Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday–Friday, 8:00 AM – 5:00 PM (Pacific Time)
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="h-full min-h-[400px] lg:min-h-0 bg-gray-100 rounded-xl overflow-hidden shadow-inner relative border border-gray-200">
            <FadeIn delay={0.3} className="w-full h-full" fullWidth>
              <iframe
                title="Google Maps Location for Pacific Northwest X-Ray"
                src="https://maps.google.com/maps?q=845+NW+Dunbar+Ave+Ste+109+Troutdale+OR+97060&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

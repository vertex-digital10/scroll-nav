import { FadeIn } from '@/components/ui/fade-in';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Pacific+Northwest+X-Ray+845+NW+Dunbar+Ave+Suite+109+Troutdale+OR+97060";

const REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Outstanding service and incredibly fast shipping. We ordered lead aprons and they arrived within days. The team was knowledgeable and helped us find exactly the right fit for our radiology department."
  },
  {
    name: "Dr. Kevin T.",
    rating: 5,
    text: "PNWX has been our go-to for X-ray supplies for over a decade. Their selection is unmatched and pricing is fair. Highly recommend to any medical practice."
  },
  {
    name: "Linda R.",
    rating: 5,
    text: "We needed a quick turnaround on MRI-compatible equipment and they delivered. Customer service was helpful and professional. Will definitely order again."
  },
  {
    name: "James H.",
    rating: 4,
    text: "Great selection of veterinary X-ray equipment. Easy to navigate their online catalog and shipping was prompt. Very satisfied with our purchase."
  },
  {
    name: "Maria C.",
    rating: 5,
    text: "Best prices we found anywhere online. The staff helped us pick the right phantom for our QA testing. Super knowledgeable team."
  }
];

// Google "G" logo SVG in brand colors
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl opacity-15 translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-[0.15em] mb-4 border border-white/20">
              <GoogleIcon />
              Verified Google Reviews
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Confidence You Can Measure.
            </h2>
            <p className="text-lg text-slate-200">
              Healthcare and veterinary teams choose us for dependable products, transparent support, and fast follow-through.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Average Rating', value: '4.9/5' },
            { label: 'Verified Reviews', value: '250+' },
            { label: 'Repeat Buyers', value: '88%' },
            { label: 'States Served', value: '50' },
          ].map((metric) => (
            <div key={metric.label} className="rounded-xl bg-white/10 border border-white/15 p-4 text-center">
              <p className="font-display text-2xl text-accent">{metric.value}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-white/75 mt-1">{metric.label}</p>
            </div>
          ))}
        </FadeIn>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white/7 backdrop-blur-sm border border-white/15 p-6 rounded-2xl h-full flex flex-col shadow-[0_16px_40px_-30px_rgba(0,0,0,0.8)] hover:bg-white/12 transition-colors">
                {/* Google branding on card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < review.rating ? "currentColor" : "none"} 
                        className={i < review.rating ? "text-accent" : "text-white/20"}
                      />
                    ))}
                  </div>
                  <GoogleIcon />
                </div>
                <blockquote className="text-slate-200 flex-grow mb-6 text-sm leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div className="font-bold text-white border-t border-white/10 pt-4 mt-auto flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm">
                    {review.name.charAt(0)}
                  </div>
                  {review.name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="text-center flex flex-col items-center gap-4">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shine inline-flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:brightness-105 transition-colors shadow-lg"
          >
            <GoogleIcon />
            Explore All Reviews on Google
            <ExternalLink size={16} />
          </a>
          <p className="text-sm text-slate-300">Live review feed from Google Maps</p>
        </FadeIn>

      </div>
    </section>
  );
}

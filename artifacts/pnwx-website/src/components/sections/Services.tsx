import { FadeIn } from '@/components/ui/fade-in';
import { Stethoscope, Shield, Scissors, Sparkles, Package } from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    title: 'X-Ray Equipment',
    icon: Stethoscope,
    description: 'State-of-the-art imaging systems and processing hardware.',
    items: [
      'Digital Portable X-Ray Systems',
      'Film Processors',
      'Chemical Mixers & Darkroom Equipment',
      'Exam Tables (power & standard)',
      'Film Viewing / Lightboxes',
      'Silver Recovery Systems'
    ]
  },
  {
    title: 'Radiation Protection',
    icon: Shield,
    description: 'Premium shielding and safety gear with fast shipping.',
    items: [
      'Lead Aprons (fastest shipping available)',
      'Lead Gloves',
      'Lead Glass & Windows',
      'Mobile Lead Barriers & Shields',
      'Lead Curtains'
    ]
  },
  {
    title: 'Accessories & Supplies',
    icon: Scissors,
    description: 'Essential components for daily radiology operations.',
    items: [
      'X-Ray Cassettes & CR Plates',
      'X-Ray Grids',
      'Positioning Aids & Patient Assistants',
      'Exam Room Products (IV poles, seating, warming cabinets)',
      'Film Handling & Storage',
      'Darkroom Safelights & Timers'
    ]
  },
  {
    title: 'Specialty Products',
    icon: Sparkles,
    description: 'Targeted solutions for veterinary, MRI, and QA testing.',
    items: [
      'MRI Products & Accessories',
      'Veterinary Digital X-Ray Systems',
      'Resolution Test Phantoms & QA Tools',
      'Patient Positioning (Pet-Sitioner™)',
      'ACR-accredited MRI Phantoms'
    ]
  },
  {
    title: 'General Supplies',
    icon: Package,
    description: 'Consumables and hygiene products for clinics.',
    items: [
      'X-Ray Supplies & Consumables',
      'Disposable Gowns & Capes',
      'Table Papers & Pillow Cases',
      'Hand Sanitizer'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-[0.15em] mb-4">
              Our Products
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Curated Solutions for Every Imaging Environment.
            </h2>
            <p className="text-lg text-slate-600">
              Build reliable workflows with a complete catalog spanning core imaging hardware, shielding, consumables, and specialty products.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((category, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative overflow-hidden rounded-2xl p-8 h-full flex flex-col group glass-card transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.8)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-secondary to-primary/50 opacity-80" />
                <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-accent transition-colors">
                  <category.icon size={28} />
                </div>
                
                <h3 className="font-display text-xl font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{category.description}</p>
                
                <ul className="space-y-3 mt-auto">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-slate-700 text-sm">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35} className="mt-14 rounded-2xl overflow-hidden border border-white/80 shadow-[0_22px_70px_-46px_rgba(15,23,42,0.95)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80"
              alt="Radiology team operating modern diagnostic equipment"
              className="h-52 md:h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center max-w-2xl text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Enterprise procurement support</p>
              <h3 className="font-display text-2xl md:text-3xl mt-2">Need a custom quote for a full room setup?</h3>
              <p className="text-white/85 mt-3 text-sm md:text-base">
                Our specialists can assemble a tailored bundle with compatible components, lead-time guidance, and optimized shipping.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

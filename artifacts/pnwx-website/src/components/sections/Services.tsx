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
    <section id="services" className="py-24 bg-gray-50 border-y border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider mb-4">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Comprehensive Medical Catalog.
            </h2>
            <p className="text-lg text-gray-600">
              From advanced digital systems to daily consumables, we provide everything your radiology department or veterinary practice needs.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((category, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col group">
                <div className="w-14 h-14 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-accent transition-colors">
                  <category.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{category.description}</p>
                
                <ul className="space-y-3 mt-auto">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-gray-700 text-sm">
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

      </div>
    </section>
  );
}

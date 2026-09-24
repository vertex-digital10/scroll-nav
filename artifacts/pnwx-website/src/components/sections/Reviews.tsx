import {
  ArrowRight,
  ClipboardList,
  PackageCheck,
  MessagesSquare,
} from "lucide-react";
export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest text-accent mb-5">
          SUPPORT AT EVERY STEP
        </p>
        <h2 className="text-3xl md:text-5xl max-w-2xl leading-tight">
          From your first question
          <br />
          to your next delivery.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            {
              icon: MessagesSquare,
              title: "Start with a conversation",
              text: "Tell us about your practice, equipment requirements, and timeline.",
            },
            {
              icon: ClipboardList,
              title: "Find the right fit",
              text: "Discuss product specifications, compatibility, and available options with our team.",
            },
            {
              icon: PackageCheck,
              title: "Plan your order",
              text: "Confirm pricing, availability, and shipping details before placing your order.",
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="border-t border-white/25 pt-6">
              <div className="flex items-center justify-between text-accent mb-6">
                <Icon size={26} />
                <span className="text-xs">0{i + 1}</span>
              </div>
              <h3 className="text-xl mb-3">{title}</h3>
              <p className="text-white/75 text-sm leading-7">{text}</p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex gap-4 items-center mt-10 text-accent text-sm font-semibold"
        >
          Talk to our team <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

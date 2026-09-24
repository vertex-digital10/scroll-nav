import { ArrowRight, ShieldCheck, Package, Headphones } from "lucide-react";
export function Hero() {
  return (
    <section id="home" className="imaging-hero">
      <div className="imaging-copy">
        <p className="imaging-eyebrow">
          PACIFIC NORTHWEST · IMAGING & SUPPLIES
        </p>
        <h1>
          Behind every image,
          <br />
          <em>a dependable partner.</em>
        </h1>
        <p>
          Equipment, protection, and everyday essentials for your imaging
          practice. Find the right products with people who understand what you
          need.
        </p>
        <div className="imaging-actions">
          <a href="#services">
            Explore our products <ArrowRight size={17} />
          </a>
          <a href="#contact">
            Talk to a specialist <ArrowRight size={17} />
          </a>
        </div>
        <div className="imaging-assurances">
          <span>
            <ShieldCheck size={18} />
            Specialist knowledge
          </span>
          <span>
            <Package size={18} />
            Equipment & essentials
          </span>
          <span>
            <Headphones size={18} />
            Personal support
          </span>
        </div>
      </div>
      <div className="imaging-photo">
        <img
          src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=85"
          alt="Imaging equipment in a clinical environment"
          fetchPriority="high"
        />
        <div>
          <span>FOCUSED ON YOUR PRACTICE</span>
          <p>Clarity in every detail.</p>
          <a href="#about">
            Meet your supply partner <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

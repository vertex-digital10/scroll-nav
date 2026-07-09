import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Reviews } from '@/components/sections/Reviews';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/40 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Reviews />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

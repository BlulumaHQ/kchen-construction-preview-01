import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroResidential from "@/assets/hero-residential.jpg";
import heroMultifamily from "@/assets/hero-multifamily.jpg";

const Index = () => {
  return (
    <>
      <SEOHead
        title="K. Chen Construction Management | Vancouver Design-Build & Construction"
        description="Comprehensive development and design-build construction management in Vancouver, BC. Commercial, residential, and multi-family projects."
      />

      {/* Hero Slider – simplified to a single hero with overlay text */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <img
          src={heroCommercial}
          alt="Commercial development by KChen Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(0,0%,0%)] opacity-30" />
        <div className="relative z-10 flex flex-col justify-end h-full section-padding pb-20">
          <p className="text-[hsl(0,0%,100%)] text-sm uppercase tracking-[0.25em] mb-3 opacity-80">
            Strategic Solutions for Business Spaces
          </p>
          <h1 className="text-[hsl(0,0%,100%)] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-[700px]">
            COMMERCIAL<br />DEVELOPMENTS
          </h1>
          <p className="text-[hsl(0,0%,100%)] mt-4 max-w-[520px] text-sm md:text-base leading-relaxed opacity-80">
            From retail hubs to office complexes, we provide integrated Design-Build services that prioritize functionality, cost-control, and rapid delivery.
          </p>
        </div>
      </section>

      {/* Proven Expertise section */}
      <section className="section-padding py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] kchen-muted-text mb-3">Proven Expertise.</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight kchen-dark-text mb-6">
              Comprehensive Development and Design-Build Construction Management
            </h2>
            <h3 className="text-lg font-medium kchen-dark-text mb-4">Project Strategy</h3>
            <p className="kchen-gray-text leading-relaxed mb-8">
              Through a strategic integration of architecture, engineering, and construction management, KChen delivers high-value development solutions. We maximize investment potential for our clients by providing seamless oversight and professional accountability across every phase of the project lifecycle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-2 text-sm kchen-gray-text">
                <li>• Design-Build Services</li>
                <li>• Pre-Construction Planning</li>
                <li>• Feasibility Analysis</li>
                <li>• Value Engineering</li>
                <li>• Owner's Representation</li>
              </ul>
              <ul className="space-y-2 text-sm kchen-gray-text">
                <li>• Construction Management</li>
                <li>• Project Management</li>
                <li>• Regulatory Compliance</li>
                <li>• Cost & Schedule Control</li>
                <li>• Quality Assurance</li>
              </ul>
            </div>
          </div>

          {/* Years counter */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-7xl md:text-8xl font-bold kchen-green-text">15+</div>
            <p className="text-lg kchen-gray-text mt-2">Years of experience.</p>
          </div>
        </div>
      </section>

      {/* Three category cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {[
          {
            image: heroCommercial,
            label: "COMMERCIAL DEVELOPMENTS",
            desc: "Strategic Solutions for Business Spaces",
          },
          {
            image: heroResidential,
            label: "SELECT SINGLE DETACHED",
            desc: "Bespoke Homes. Exceptional Execution.",
          },
          {
            image: heroMultifamily,
            label: "MULTI-FAMILY RESIDENTIAL",
            desc: "Maximizing High-Density Investment",
          },
        ].map((card) => (
          <div key={card.label} className="relative h-[400px] group overflow-hidden">
            <img
              src={card.image}
              alt={card.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[hsl(0,0%,0%)] opacity-40 group-hover:opacity-50 transition-opacity" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <p className="text-[hsl(0,0%,100%)] text-xs uppercase tracking-[0.2em] opacity-80 mb-2">{card.desc}</p>
              <h3 className="text-[hsl(0,0%,100%)] text-xl font-semibold">{card.label}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padding py-20 text-center">
        <h2 className="text-3xl font-semibold kchen-dark-text mb-4">Ready to Start Your Project?</h2>
        <p className="kchen-gray-text mb-8 max-w-lg mx-auto">
          Through a unique combination of engineering, construction and design disciplines.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
};

export default Index;

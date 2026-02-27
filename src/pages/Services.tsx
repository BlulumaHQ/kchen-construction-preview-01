import SEOHead from "@/components/SEOHead";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    title: "CONSTRUCTION MANAGEMENT",
    description:
      "KChen provides high-quality construction services delivered on budget, on pace, and to our clients' total satisfaction. We provide seamless oversight from the pre-construction planning stage, including detailed budgeting, scheduling, and identifying challenges before they arise. Through a transparent bidding process and strict cost control, we supervise all site activities with precision. Our team ensures that every phase of construction meets our rigorous quality standards from the first shovel in the ground until final completion.",
    summary:
      "We deliver high-quality projects on time and within budget through seamless oversight. From pre-construction planning and transparent bidding to on-site supervision, we ensure every detail meets our rigorous production standards.",
  },
  {
    title: "DESIGN & BUILD",
    description:
      "KChen offers a comprehensive design–build service that integrates architecture, engineering, and construction under one unified team. This streamlined approach eliminates delays, reduces costs, and ensures design intent is carried through to completion. From concept development and permitting to construction and finishing, we collaborate closely with clients to transform vision into reality—delivering creative, functional, and cost-effective spaces with full accountability from start to finish.",
    summary:
      "Experience a unified approach that integrates architecture, engineering, and construction. Our streamlined process eliminates delays and reduces costs, providing a single point of accountability to transform your vision into a functional reality.",
  },
  {
    title: "PROJECT MANAGEMENT",
    description:
      "With our local knowledge, profound expertise and wide network in this industry, we help our clients maximize the value of its investment potential. We evaluate the project and seek to achieve the highest profitability. Our experience in working with government bodies and local authorities, allows us to assess the potential and feasibility of the development project. As Owner's Representative, we watch out for the client's interest and provide advice and strategies that best guideline throughout the process of development and construction project.",
    summary:
      "Maximize your investment potential with our deep local expertise and industry network. As your dedicated Owner's Representative, we navigate government regulations and provide strategic guidance to ensure the highest profitability and project feasibility.",
  },
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Our Services | K. Chen Construction Management"
        description="KChen provides integrated construction management, design-build, and project management services across Greater Vancouver."
      />

      {/* Hero */}
      <section className="section-padding py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] kchen-muted-text mb-3 border border-border inline-block px-3 py-1 rounded-full">
              Our Services
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold kchen-dark-text mt-4 mb-6">
              KChen Construction
            </h1>
            <p className="kchen-gray-text leading-relaxed max-w-lg">
              We provide integrated design, project, and construction management services across Greater Vancouver.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 h-[400px]">
            <img src={servicesHero} alt="Interior by KChen" className="w-full h-full object-cover rounded" />
            <img src={servicesHero} alt="Interior by KChen" className="w-full h-full object-cover rounded" style={{ objectPosition: "right" }} />
          </div>
        </div>
      </section>

      {/* Service summaries */}
      <section className="section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
          {services.map((s) => (
            <div key={s.title}>
              <div className="w-2 h-2 rounded-full bg-foreground mb-4" />
              <h3 className="text-lg font-bold kchen-dark-text mb-3 uppercase">{s.title}</h3>
              <p className="text-sm kchen-gray-text leading-relaxed">{s.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full descriptions */}
      <section className="section-padding py-16 space-y-16">
        {services.map((s) => (
          <div key={s.title} className="max-w-3xl">
            <h2 className="text-2xl font-bold kchen-dark-text uppercase mb-4">{s.title}</h2>
            <p className="kchen-gray-text leading-relaxed">{s.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;

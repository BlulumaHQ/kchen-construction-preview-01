import SEOHead from "@/components/SEOHead";
import { Award, Trophy, Shield } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const recognitions = [
  {
    icon: Award,
    title: "Top 50 Construction Management Firms – Regional Ranking",
    year: "2025",
    org: "Engineering News-Record (ENR) Southeast",
    description:
      "Ranked #18 among the leading construction management firms in the Southeast region based on revenue, project diversity, and client satisfaction scores for healthcare, education, and commercial sectors.",
  },
  {
    icon: Trophy,
    title: "Excellence in Construction Award – Commercial Category",
    year: "2024",
    org: "Master Builders Association",
    description:
      "Recognized for outstanding project delivery and craftsmanship on the Downtown Riverside Office Complex, a 180,000 sq ft LEED Gold-certified mixed-use development completed ahead of schedule with zero lost-time incidents.",
  },
  {
    icon: Shield,
    title: "Safety Achievement Award – Platinum Level",
    year: "2023",
    org: "Associated General Contractors (AGC)",
    description:
      "Awarded for achieving over 1.2 million man-hours without a recordable incident across multiple infrastructure and high-rise projects, demonstrating exceptional commitment to worker safety and best-in-class safety protocols.",
  },
];

const Recognitions = () => {
  return (
    <>
      <SEOHead
        title="Recognitions | K. Chen Construction Management"
        description="Awards and recognitions earned by K. Chen Construction Management for excellence in construction, safety, and project delivery."
      />

      {/* Recognitions Grid */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
          {recognitions.map((r, i) => (
            <div
              key={r.title}
              className={`p-8 md:p-10 ${i < recognitions.length - 1 ? "md:border-r border-border" : ""} border-b md:border-b-0 border-border`}
            >
              <r.icon size={36} className="kchen-dark-text mb-6" />
              <h2 className="text-lg font-bold kchen-dark-text mb-4">{r.title}</h2>
              <p className="text-sm kchen-green-text font-medium mb-2">{r.year}</p>
              <p className="text-sm kchen-muted-text mb-4">{r.org}</p>
              <p className="text-sm kchen-gray-text leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services repeat section (matches source) */}
      <section className="section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] kchen-muted-text mb-3 border border-border inline-block px-3 py-1 rounded-full">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold kchen-dark-text mt-4 mb-6">
              KChen Construction
            </h2>
            <p className="kchen-gray-text leading-relaxed max-w-lg">
              We provide integrated design, project, and construction management services across Greater Vancouver.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 h-[350px]">
            <img src={servicesHero} alt="Interior" className="w-full h-full object-cover rounded" loading="lazy" />
            <img src={servicesHero} alt="Interior" className="w-full h-full object-cover rounded" style={{ objectPosition: "right" }} loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recognitions;

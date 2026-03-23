import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroResidential from "@/assets/hero-residential.jpg";
import heroMultifamily from "@/assets/hero-multifamily.jpg";
import kevinImg from "@/assets/kevin-chen.jpg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import { Phone, CheckCircle, ArrowRight, Shield, Clock, DollarSign } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Kevin was a breath of fresh air. He was always available to answer my questions and address any concerns I had throughout the construction process. Their attention to detail and commitment to quality really stood out to me, and I couldn't be happier with the final result.",
    name: "Daniel Lee",
  },
  {
    quote:
      "I was initially nervous about taking on a construction project, but Kevin and his team put all of my worries to rest. They were honest, transparent, and communicative throughout the entire process, and delivered a final product that exceeded my expectations. Thank you very much~",
    name: "Ashley Martinez",
  },
];

const services = [
  {
    title: "Construction Management",
    summary:
      "We deliver high-quality projects on time and within budget through seamless oversight. From pre-construction planning and transparent bidding to on-site supervision, we ensure every detail meets our rigorous production standards.",
    icon: Shield,
  },
  {
    title: "Design & Build",
    summary:
      "Experience a unified approach that integrates architecture, engineering, and construction. Our streamlined process eliminates delays and reduces costs, providing a single point of accountability to transform your vision into a functional reality.",
    icon: Clock,
  },
  {
    title: "Project Management",
    summary:
      "Maximize your investment potential with our deep local expertise and industry network. As your dedicated Owner's Representative, we navigate government regulations and provide strategic guidance to ensure the highest profitability and project feasibility.",
    icon: DollarSign,
  },
];

const howWeWork = [
  { step: "01", label: "Consultation" },
  { step: "02", label: "Design & Budgeting" },
  { step: "03", label: "Permitting & Planning" },
  { step: "04", label: "Construction & Supervision" },
  { step: "05", label: "Handover & Warranty" },
];

const CTAButton = ({ text = "Start Your Project Today", large = false }: { text?: string; large?: boolean }) => (
  <Link
    to="/contact"
    className={`inline-flex items-center gap-2 bg-kchen-cta text-primary-foreground font-bold uppercase tracking-wider hover:bg-kchen-cta-hover transition-all duration-300 rounded ${large ? "px-10 py-5 text-lg" : "px-8 py-4 text-sm"} shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
  >
    {text}
    <ArrowRight size={large ? 22 : 18} />
  </Link>
);

const Index = () => {
  return (
    <>
      <SEOHead
        title="K. Chen Construction Management | Vancouver Design-Build & Construction"
        description="Comprehensive development and design-build construction management in Vancouver, BC. Commercial, residential, and multi-family projects."
      />

      {/* ═══════════════════════════════════════════════════
          1. HOOK — Full-screen hero with dominant CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroCommercial}
          alt="Commercial development by KChen Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,8%,8%,0.85)] via-[hsl(220,8%,8%,0.7)] to-[hsl(220,8%,8%,0.4)]" />
        <div className="relative z-10 section-padding w-full max-w-3xl py-20">
          <p className="text-kchen-cta text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Vancouver's Trusted Construction Partner
          </p>
          <h1 className="text-[hsl(0,0%,100%)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Comprehensive Development and Design-Build Construction Management
          </h1>
          <p className="text-[hsl(0,0%,80%)] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            From retail hubs to office complexes, we provide integrated Design-Build services that prioritize functionality, cost-control, and rapid delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton text="Get a Free Consultation" large />
            <a
              href="tel:6046182449"
              className="inline-flex items-center gap-2 border-2 border-[hsl(0,0%,100%,0.4)] text-[hsl(0,0%,100%)] px-8 py-5 rounded font-bold text-lg uppercase tracking-wider hover:border-[hsl(0,0%,100%)] transition-colors"
            >
              <Phone size={20} />
              (604) 618-2449
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. PROBLEM — Pain point identification
      ═══════════════════════════════════════════════════ */}
      <section className="bg-kchen-funnel-dark section-padding py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-kchen-cta text-xs font-bold uppercase tracking-[0.3em] mb-4">
            The Reality of Construction
          </p>
          <h2 className="text-[hsl(0,0%,95%)] text-3xl md:text-4xl font-bold mb-6">
            Construction Projects Are Complex, Stressful, and Full of Risk
          </h2>
          <p className="text-[hsl(0,0%,65%)] text-lg leading-relaxed">
            Managing multiple contractors, navigating regulations, controlling budgets, and keeping timelines on track — the hassle of having multiple contractors creates frustrations and misunderstandings through the process.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. AGITATION — Emphasize the problem
      ═══════════════════════════════════════════════════ */}
      <section className="bg-background section-padding py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "68%", text: "of construction projects go over budget without professional management" },
              { stat: "43%", text: "of project delays are caused by communication breakdowns between contractors" },
              { stat: "$80M+", text: "in budgets managed by our principal, Kevin Chen, P.Eng, GSC" },
            ].map((item) => (
              <div key={item.stat} className="p-6">
                <div className="text-4xl md:text-5xl font-bold kchen-green-text mb-3">{item.stat}</div>
                <p className="kchen-gray-text text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. SOLUTION — Introduce KChen as the answer
      ═══════════════════════════════════════════════════ */}
      <section className="bg-kchen-funnel-light section-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-kchen-cta text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Your One-Stop Trusted Advisor
            </p>
            <h2 className="text-3xl md:text-4xl font-bold kchen-dark-text mb-6">
              KChen Provides a Streamline of Services That Brings Efficiency for Our Clients
            </h2>
            <p className="kchen-gray-text text-lg leading-relaxed max-w-2xl mx-auto">
              We simplify or eliminate the hassle of having multiple contractors. We assist our clients from the preliminary stage of evaluating the profitability and feasibility of each project, to the designing and building services transformed from initial sketches to the final construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src={heroResidential}
              alt="Bespoke home by KChen Construction"
              className="w-full h-[400px] object-cover rounded shadow-xl"
              loading="lazy"
            />
            <div>
              <h3 className="text-2xl font-bold kchen-dark-text mb-4">Project Strategy</h3>
              <p className="kchen-gray-text leading-relaxed mb-6">
                Through a strategic integration of architecture, engineering, and construction management, KChen delivers high-value development solutions. We maximize investment potential for our clients by providing seamless oversight and professional accountability across every phase of the project lifecycle.
              </p>
              <ul className="space-y-3">
                {[
                  "Design-Build Services",
                  "Pre-Construction Planning",
                  "Feasibility Analysis",
                  "Value Engineering",
                  "Owner's Representation",
                  "Construction Management",
                  "Project Management",
                  "Regulatory Compliance",
                  "Cost & Schedule Control",
                  "Quality Assurance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm kchen-dark-text">
                    <CheckCircle size={18} className="text-kchen-cta shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-funnel CTA */}
      <section className="bg-kchen-cta section-padding py-14 text-center">
        <h2 className="text-[hsl(0,0%,100%)] text-2xl md:text-3xl font-bold mb-4">
          Let's Talk About Your New Project — We Can Do It!
        </h2>
        <p className="text-[hsl(0,0%,100%,0.85)] mb-8 max-w-lg mx-auto">
          Through a unique combination of engineering, construction and design disciplines.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[hsl(0,0%,100%)] text-kchen-dark font-bold px-10 py-4 rounded text-sm uppercase tracking-wider hover:bg-[hsl(0,0%,95%)] transition-colors shadow-lg"
        >
          Get Your Free Consultation
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. BENEFITS — Value breakdown via services
      ═══════════════════════════════════════════════════ */}
      <section className="bg-background section-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] kchen-muted-text mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold kchen-dark-text">
              Three Core Services. One Unified Team.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-border rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 hover:border-kchen-cta/30"
              >
                <s.icon size={40} className="kchen-green-text mb-6" />
                <h3 className="text-lg font-bold kchen-dark-text mb-4 uppercase">{s.title}</h3>
                <p className="text-sm kchen-gray-text leading-relaxed">{s.summary}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-kchen-cta font-bold uppercase tracking-wider text-sm hover:gap-3 transition-all"
            >
              Explore All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. TRUST — Credibility signals + Testimonials
      ═══════════════════════════════════════════════════ */}
      <section className="bg-kchen-funnel-dark section-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          {/* Kevin bio + experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
              <img
                src={kevinImg}
                alt="Kevin Chen, P.Eng, GSC"
                className="w-[200px] h-[220px] object-cover rounded shadow-lg mb-6"
              />
              <div className="text-7xl md:text-8xl font-bold kchen-green-text">15+</div>
              <p className="text-[hsl(0,0%,70%)] text-lg mt-2">Years of experience.</p>
            </div>
            <div>
              <p className="text-kchen-cta text-xs font-bold uppercase tracking-[0.3em] mb-3">Meet Our Principal</p>
              <h2 className="text-[hsl(0,0%,95%)] text-3xl font-bold mb-2">Kevin Chen</h2>
              <p className="text-kchen-cta font-medium mb-6">P.Eng, GSC</p>
              <p className="text-[hsl(0,0%,70%)] leading-relaxed text-sm mb-4">
                Kevin is the President of KChen Management Construction, and co-founder and partner of Formation Project Management Inc. Kevin has over 15 years of career expertise in the construction industries. He works directly with clients and manages all the trade partners in each stage of projects.
              </p>
              <p className="text-[hsl(0,0%,70%)] leading-relaxed text-sm">
                Prior to starting up KChen Construction Management, Kevin was a Project Manager at a larger Canadian-based international construction firm. He has served on various scales of construction projects, managed budgets ranging from $250k to over $80 million, and worked on projects located in Victoria, Whistler, to every corner in the Lower Mainland. Kevin is a registered Professional Engineer, and he possess Gold Seal Certification from the Canadian Construction Association.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-[hsl(0,0%,95%)] text-2xl md:text-3xl font-bold text-center mb-12 uppercase">
              See What Our Clients Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="bg-[hsl(220,8%,18%)] rounded-lg p-8 border-l-4 border-kchen-cta"
                >
                  <p className="italic text-[hsl(0,0%,75%)] leading-relaxed mb-4">"{t.quote}"</p>
                  <cite className="block not-italic font-bold text-[hsl(0,0%,95%)] text-sm">— {t.name}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-background section-padding py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] kchen-muted-text mb-8">Certified & Licensed</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { src: certNHW, alt: "National Home Warranty" },
              { src: certGVHBA, alt: "Greater Vancouver Home Builders' Association Member" },
              { src: certGeorgie, alt: "Georgie Awards" },
              { src: cert2510, alt: "2-5-10 Year Warranty" },
            ].map((cert) => (
              <div key={cert.alt} className="flex items-center justify-center p-4">
                <img src={cert.src} alt={cert.alt} className="max-h-[80px] w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. OFFER — Category showcase (what you get)
      ═══════════════════════════════════════════════════ */}
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
          <Link
            to="/projects"
            key={card.label}
            className="relative h-[350px] md:h-[450px] group overflow-hidden block"
          >
            <img
              src={card.image}
              alt={card.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,0%,0.7)] via-[hsl(0,0%,0%,0.3)] to-transparent group-hover:from-[hsl(0,0%,0%,0.8)] transition-all duration-500" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <p className="text-kchen-cta text-xs uppercase tracking-[0.2em] mb-2 font-bold">{card.desc}</p>
              <h3 className="text-[hsl(0,0%,100%)] text-xl md:text-2xl font-bold">{card.label}</h3>
              <span className="text-[hsl(0,0%,100%,0.7)] text-sm mt-3 flex items-center gap-2 group-hover:text-[hsl(0,0%,100%)] transition-colors">
                View Projects <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ═══════════════════════════════════════════════════
          8. CTA — Primary action
      ═══════════════════════════════════════════════════ */}
      <section className="bg-kchen-cta section-padding py-20 md:py-24 text-center">
        <h2 className="text-[hsl(0,0%,100%)] text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-[hsl(0,0%,100%,0.85)] text-lg mb-10 max-w-lg mx-auto">
          Whether it's the house of your dream or commercial properties that you wish to realize your business objectives — our team strives to understand you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(0,0%,100%)] text-kchen-dark font-bold px-10 py-5 rounded text-lg uppercase tracking-wider hover:bg-[hsl(0,0%,95%)] transition-colors shadow-lg"
          >
            Contact Us Now
            <ArrowRight size={20} />
          </Link>
          <a
            href="tel:6046182449"
            className="inline-flex items-center gap-2 border-2 border-[hsl(0,0%,100%,0.5)] text-[hsl(0,0%,100%)] px-10 py-5 rounded font-bold text-lg uppercase tracking-wider hover:border-[hsl(0,0%,100%)] transition-colors"
          >
            <Phone size={20} />
            (604) 618-2449
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. REINFORCEMENT — How we work process
      ═══════════════════════════════════════════════════ */}
      <section className="bg-kchen-funnel-dark section-padding py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-kchen-cta text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Process</p>
          <h2 className="text-[hsl(0,0%,95%)] text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-[hsl(0,0%,65%)] mb-12">
            A proven 5-step process that delivers predictable results, every time.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {howWeWork.map((s) => (
              <div
                key={s.step}
                className="bg-[hsl(220,8%,18%)] rounded-lg p-6 text-center border border-[hsl(220,8%,25%)] hover:border-kchen-cta/50 transition-colors"
              >
                <div className="text-3xl font-bold kchen-green-text mb-3">{s.step}</div>
                <p className="text-sm font-medium text-[hsl(0,0%,85%)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. FINAL CTA — Last push
      ═══════════════════════════════════════════════════ */}
      <section className="bg-background section-padding py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold kchen-dark-text mb-4">
            K. Chen Construction Management is a full service construction management company in Vancouver, BC
          </h2>
          <p className="kchen-gray-text text-lg leading-relaxed mb-4">
            Specializing in residential and commercial projects, fulfilling the visions of property owners, business owners, developers, and property managers.
          </p>
          <p className="kchen-gray-text leading-relaxed mb-10">
            We focus on assisting our clients in building their dream homes and realizing their investment goals while bridging the communication barriers.
          </p>
          <CTAButton text="Start Your Project Today" large />
          <p className="kchen-muted-text text-sm mt-6">
            No obligation. Free initial consultation.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;

import SEOHead from "@/components/SEOHead";
import kevinImg from "@/assets/kevin-chen.jpg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";

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

const howWeWork = [
  "Consultation",
  "Design & Budgeting",
  "Permitting & Planning",
  "Construction & Supervision",
  "Handover & Warranty",
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Us | K. Chen Construction Management"
        description="Learn about K. Chen Construction Management, a full-service construction management company in Vancouver, BC specializing in residential and commercial projects."
      />

      {/* About Intro */}
      <section className="section-padding py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold kchen-dark-text mb-6 uppercase">About Us</h1>
            <p className="kchen-gray-text leading-relaxed">
              We are our client's "one-stop" trusted advisor. KChen provides a streamline of services that will bring efficiency for our clients by simplifying or eliminating the hassle of having multiple contractors. We assist our clients from the preliminary stage of evaluating the profitability and feasibility of each project, to the designing and building services transformed from initial sketches to the final construction, and managing the budget and schedule, providing our clients with a sense of security and comfort.
            </p>
          </div>
          <div>
            <p className="kchen-gray-text leading-relaxed">
              K. Chen Construction Management is a full service construction management company in Vancouver, BC, specializing in residential and commercial projects, fulfilling the visions of property owners, business owners, developers, and property managers. We focus on assisting our clients in building their dream homes and realizing their investment goals while bridging the communication barriers. Our team possess years of experience and in depth local knowledge in the construction industry. Whether it's the house of your dream, a place to build lasting memories with your family, or commercial properties that you wish to realize your business objectives, our team strives to understand our clients, and helps our clients eliminate frustrations and misunderstandings through the process.
            </p>
          </div>
        </div>
      </section>

      {/* Kevin + Testimonials */}
      <section className="section-padding pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Kevin bio */}
          <div>
            <div className="flex items-start gap-6 mb-6">
              <img
                src={kevinImg}
                alt="Kevin Chen, P.Eng, GSC"
                className="w-[180px] h-[200px] object-cover grayscale"
              />
              <div>
                <h2 className="text-2xl font-bold kchen-dark-text uppercase">Kevin Chen</h2>
                <p className="kchen-gray-text font-medium">P.Eng, GSC</p>
              </div>
            </div>
            <p className="kchen-gray-text leading-relaxed text-sm">
              Kevin is the President of KChen Management Construction, and co-founder and partner of Formation Project Management Inc. Kevin has over 15 years of career expertise in the construction industries. He works directly with clients and manages all the trade partners in each stage of projects.
            </p>
            <p className="kchen-gray-text leading-relaxed text-sm mt-4">
              Prior to starting up KChen Construction Management, Kevin was a Project Manager at a larger Canadian-based international construction firm. He has served on various scales of construction projects, managed budgets ranging from $250k to over $80 million, and worked on projects located in Victoria, Whistler, to every corner in the Lower Mainland. Kevin is a registered Professional Engineer, and he possess Gold Seal Certification from the Canadian Construction Association.
            </p>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-2xl font-bold kchen-dark-text uppercase mb-8">
              See What Our Clients Are Saying
            </h2>
            <div className="space-y-8">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="border-l-2 border-primary pl-6">
                  <p className="italic kchen-gray-text leading-relaxed text-sm">"{t.quote}"</p>
                  <cite className="block mt-3 not-italic font-semibold kchen-dark-text text-sm">{t.name}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-secondary section-padding py-16">
        <h2 className="text-2xl font-bold kchen-dark-text uppercase mb-2">How We Work</h2>
        <p className="kchen-gray-text mb-8">Let's Talk About Your New Project, We Can Do It!</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {howWeWork.map((step, i) => (
            <div
              key={step}
              className="bg-background rounded p-5 text-center"
            >
              <div className="text-2xl font-bold kchen-green-text mb-2">{String(i + 1).padStart(2, "0")}</div>
              <p className="text-sm font-medium kchen-dark-text">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding py-16">
        <h2 className="text-2xl font-bold kchen-dark-text uppercase mb-8">Certification / Licences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[
            { src: certNHW, alt: "National Home Warranty" },
            { src: certGVHBA, alt: "Greater Vancouver Home Builders' Association Member" },
            { src: certGeorgie, alt: "Georgie Awards" },
            { src: cert2510, alt: "2-5-10 Year Warranty" },
          ].map((cert) => (
            <div key={cert.alt} className="flex items-center justify-center p-4">
              <img src={cert.src} alt={cert.alt} className="max-h-[100px] w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

import SEOHead from "@/components/SEOHead";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact | K. Chen Construction Management"
        description="Get in touch with K. Chen Construction Management for your construction, design-build, or project management needs in Vancouver, BC."
      />

      {/* Light background contact section */}
      <section className="bg-background section-padding py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold kchen-dark-text mb-4">
              WE'RE HERE TO HELP
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold kchen-dark-text mb-4">
              Let's Get Your Project Done
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold kchen-dark-text mb-10">
              Call Us Today!
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest kchen-muted-text mb-2">Find Us</p>
                <p className="kchen-gray-text">Vancouver</p>
                <p className="kchen-gray-text">BC. Canada</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest kchen-muted-text mb-2">Social</p>
                <a
                  href="https://www.instagram.com/kchenconstruction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kchen-gray-text hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right – Contact card */}
          <div className="bg-[hsl(var(--kchen-cream))] rounded-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold kchen-dark-text mb-6">
              Let's Talk About Your New Project, We Can Do It!
            </h3>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <a
                href="tel:6046182449"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                (604) 618-2449
              </a>
              <a href="mailto:info@kchencm.com" className="text-sm kchen-gray-text hover:text-foreground transition-colors">
                Email: info@kchencm.com
              </a>
            </div>
            <p className="text-xs kchen-muted-text">
              Have any questions about your construction project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

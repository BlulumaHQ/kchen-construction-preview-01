import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { projects } from "@/data/projects";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="section-padding py-32 text-center">
        <h1 className="text-2xl font-bold kchen-dark-text mb-4">Project Not Found</h1>
        <Link to="/projects" className="kchen-green-text underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${project.title} | K. Chen Construction Management`}
        description={project.fullDescription.slice(0, 155)}
      />

      {/* Back link */}
      <div className="section-padding pt-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm kchen-gray-text hover:text-foreground transition-colors">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>

      {/* Hero image */}
      <section className="section-padding py-8">
        <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Info */}
      <section className="section-padding pb-12">
        <h1 className="text-3xl md:text-4xl font-bold kchen-dark-text mb-6">{project.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 border-t border-b border-border py-4">
          <div>
            <p className="text-xs uppercase tracking-widest kchen-muted-text">Location</p>
            <p className="text-sm kchen-dark-text font-medium">{project.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest kchen-muted-text">Role</p>
            <p className="text-sm kchen-dark-text font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest kchen-muted-text">Category</p>
            <p className="text-sm kchen-dark-text font-medium">{project.category}</p>
          </div>
        </div>
        <p className="kchen-gray-text leading-relaxed max-w-3xl">{project.fullDescription}</p>
      </section>

      {/* Gallery */}
      <section className="section-padding pb-20">
        <h2 className="text-xl font-semibold kchen-dark-text mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="h-[250px] overflow-hidden cursor-pointer group"
            >
              <img
                src={img}
                alt={`${project.title} gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-[hsl(0,0%,0%)] bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-[hsl(0,0%,100%)]"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <button
            onClick={() =>
              setLightboxIndex((lightboxIndex - 1 + project.galleryImages.length) % project.galleryImages.length)
            }
            className="absolute left-4 text-[hsl(0,0%,100%)]"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={project.galleryImages[lightboxIndex]}
            alt={`${project.title} gallery ${lightboxIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={() =>
              setLightboxIndex((lightboxIndex + 1) % project.galleryImages.length)
            }
            className="absolute right-4 text-[hsl(0,0%,100%)]"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
};

export default PortfolioDetail;

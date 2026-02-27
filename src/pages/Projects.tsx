import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { projects, ProjectType, ServiceType } from "@/data/projects";

const projectTypes: ProjectType[] = [
  "Commercial",
  "Residential Multi-Family",
  "Residential Single-Family",
];

const serviceTypes: ServiceType[] = [
  "Construction Management",
  "Design-Build",
  "Project Management",
];

const Projects = () => {
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType | null>(null);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<ServiceType[]>([]);

  const toggleServiceType = (st: ServiceType) => {
    setSelectedServiceTypes((prev) =>
      prev.includes(st) ? prev.filter((s) => s !== st) : [...prev, st]
    );
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (selectedProjectType && p.projectType !== selectedProjectType) return false;
      if (
        selectedServiceTypes.length > 0 &&
        !selectedServiceTypes.some((st) => p.serviceType.includes(st))
      )
        return false;
      return true;
    });
  }, [selectedProjectType, selectedServiceTypes]);

  const clearFilters = () => {
    setSelectedProjectType(null);
    setSelectedServiceTypes([]);
  };

  const hasFilters = selectedProjectType !== null || selectedServiceTypes.length > 0;

  return (
    <>
      <SEOHead
        title="Projects | K. Chen Construction Management"
        description="Explore our portfolio of commercial, residential single-family, and multi-family construction projects across Greater Vancouver."
      />

      <section className="section-padding py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold kchen-dark-text uppercase mb-8">Projects</h1>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Project Type */}
          <div>
            <p className="text-xs uppercase tracking-widest kchen-muted-text mb-2">Project Type</p>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((pt) => (
                <button
                  key={pt}
                  onClick={() => setSelectedProjectType(selectedProjectType === pt ? null : pt)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                    selectedProjectType === pt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border kchen-gray-text hover:border-foreground"
                  }`}
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>

          {/* Service Type */}
          <div>
            <p className="text-xs uppercase tracking-widest kchen-muted-text mb-2">Service Type</p>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((st) => (
                <button
                  key={st}
                  onClick={() => toggleServiceType(st)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                    selectedServiceTypes.includes(st)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border kchen-gray-text hover:border-foreground"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm kchen-muted-text">Showing {filtered.length} projects</p>
            {hasFilters && (
              <button onClick={clearFilters} className="text-sm kchen-green-text underline">
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="group block overflow-hidden"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[hsl(0,0%,0%)] opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <div className="py-4">
                <p className="text-xs uppercase tracking-widest kchen-muted-text mb-1">{project.projectType}</p>
                <h3 className="text-lg font-semibold kchen-dark-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm kchen-gray-text mt-1">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center kchen-muted-text py-16">No projects match the selected filters.</p>
        )}
      </section>
    </>
  );
};

export default Projects;

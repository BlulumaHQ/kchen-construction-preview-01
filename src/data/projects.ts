import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type ProjectType = "Commercial" | "Residential Multi-Family" | "Residential Single-Family";
export type ServiceType = "Construction Management" | "Design-Build" | "Project Management";

export interface Project {
  title: string;
  slug: string;
  featuredImage: string;
  projectType: ProjectType;
  serviceType: ServiceType[];
  location: string;
  role: string;
  category: string;
  fullDescription: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    title: "Downtown Riverside Office Complex",
    slug: "downtown-riverside-office-complex",
    featuredImage: project1,
    projectType: "Commercial",
    serviceType: ["Construction Management", "Project Management"],
    location: "Vancouver, BC",
    role: "Construction Manager",
    category: "Commercial Office",
    fullDescription:
      "A 180,000 sq ft LEED Gold-certified mixed-use development completed ahead of schedule. KChen provided full construction management oversight including pre-construction planning, budget control, trade coordination, and quality assurance throughout all phases of the project.",
    galleryImages: [project1, project2, project3],
  },
  {
    title: "West Side Custom Residence",
    slug: "west-side-custom-residence",
    featuredImage: project2,
    projectType: "Residential Single-Family",
    serviceType: ["Design-Build"],
    location: "Vancouver West, BC",
    role: "Design-Build Lead",
    category: "Custom Home",
    fullDescription:
      "A bespoke luxury single-family home featuring modern architecture with high-end finishes throughout. KChen managed the complete design-build process from initial concept through to final handover, integrating architecture, engineering, and construction under one team.",
    galleryImages: [project2, project1, project3],
  },
  {
    title: "Cambie Corridor Multi-Family Development",
    slug: "cambie-corridor-multi-family",
    featuredImage: project3,
    projectType: "Residential Multi-Family",
    serviceType: ["Construction Management", "Project Management"],
    location: "Vancouver, BC",
    role: "Owner's Representative",
    category: "Multi-Family Residential",
    fullDescription:
      "A 120-unit multi-family residential development along the Cambie Corridor. KChen served as Owner's Representative, providing feasibility analysis, regulatory compliance oversight, and construction management to maximize the client's investment potential.",
    galleryImages: [project3, project1, project2],
  },
];

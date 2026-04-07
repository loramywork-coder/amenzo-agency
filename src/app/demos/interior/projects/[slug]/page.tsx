import { notFound } from "next/navigation";
import ProjectDetail from "./ProjectDetail";

/* ─── project data ─── */
const PROJECTS: Record<string, {
  title: string; client: string; location: string; area: string; year: string;
  scope: string; heroImg: string; gallery: string[]; nextSlug: string; nextTitle: string;
  materials: { name: string; color: string }[];
}> = {
  "lake-house": {
    title: "Lake House Lucerne",
    client: "Private Residence",
    location: "Lucerne, Switzerland",
    area: "320 m\u00B2",
    year: "2024",
    scope: "Full interior design, furniture curation, lighting design",
    heroImg: "/images/interior/project-01.jpg",
    gallery: ["/images/interior/project-02.jpg", "/images/interior/project-03.jpg", "/images/interior/project-04.jpg", "/images/interior/project-05.jpg"],
    nextSlug: "alpine-retreat",
    nextTitle: "Alpine Retreat Verbier",
    materials: [
      { name: "Swiss Oak", color: "#C4A882" },
      { name: "Limestone", color: "#D4CFC6" },
      { name: "Linen White", color: "#EDE9E1" },
      { name: "Aged Bronze", color: "#6B5E4C" },
    ],
  },
  "alpine-retreat": {
    title: "Alpine Retreat Verbier",
    client: "Verbier Collection",
    location: "Verbier, Switzerland",
    area: "580 m\u00B2",
    year: "2023",
    scope: "Hospitality interior, bespoke furniture, art curation",
    heroImg: "/images/interior/project-02.jpg",
    gallery: ["/images/interior/project-06.jpg", "/images/interior/project-07.jpg", "/images/interior/project-08.jpg", "/images/interior/project-01.jpg"],
    nextSlug: "zurich-penthouse",
    nextTitle: "Zürich Penthouse",
    materials: [
      { name: "Reclaimed Larch", color: "#8B7A65" },
      { name: "Vals Stone", color: "#5A5550" },
      { name: "Cream Bouclé", color: "#E8E2D8" },
      { name: "Blackened Steel", color: "#2C2926" },
    ],
  },
  "zurich-penthouse": {
    title: "Zürich Penthouse",
    client: "Private Residence",
    location: "Zürich, Switzerland",
    area: "210 m\u00B2",
    year: "2024",
    scope: "Complete renovation, interior design, terrace landscaping",
    heroImg: "/images/interior/project-03.jpg",
    gallery: ["/images/interior/project-09.jpg", "/images/interior/project-10.jpg", "/images/interior/project-05.jpg", "/images/interior/project-06.jpg"],
    nextSlug: "hotel-noire",
    nextTitle: "Hôtel Noire Geneva",
    materials: [
      { name: "Carrara Marble", color: "#E8E5E0" },
      { name: "Walnut", color: "#5C4A3A" },
      { name: "Brass", color: "#B8986B" },
      { name: "Charcoal Plaster", color: "#4A4540" },
    ],
  },
  "hotel-noire": {
    title: "Hôtel Noire Geneva",
    client: "Noire Hospitality Group",
    location: "Geneva, Switzerland",
    area: "1,200 m\u00B2",
    year: "2022",
    scope: "Lobby, restaurant, 24 suites, spa, lighting design",
    heroImg: "/images/interior/project-04.jpg",
    gallery: ["/images/interior/project-01.jpg", "/images/interior/project-07.jpg", "/images/interior/project-03.jpg", "/images/interior/project-09.jpg"],
    nextSlug: "gallery-loft",
    nextTitle: "Gallery Loft Basel",
    materials: [
      { name: "Noir Belge Marble", color: "#1E1C1A" },
      { name: "Smoked Oak", color: "#4A3F35" },
      { name: "Velvet Moss", color: "#3C4A3A" },
      { name: "Patinated Copper", color: "#7A8B6E" },
    ],
  },
  "gallery-loft": {
    title: "Gallery Loft Basel",
    client: "Galerie Margaux",
    location: "Basel, Switzerland",
    area: "440 m\u00B2",
    year: "2023",
    scope: "Exhibition space, private offices, lighting infrastructure",
    heroImg: "/images/interior/project-05.jpg",
    gallery: ["/images/interior/project-08.jpg", "/images/interior/project-02.jpg", "/images/interior/project-10.jpg", "/images/interior/project-04.jpg"],
    nextSlug: "lake-house",
    nextTitle: "Lake House Lucerne",
    materials: [
      { name: "Polished Concrete", color: "#A8A29E" },
      { name: "White Plaster", color: "#F0EDE8" },
      { name: "Raw Steel", color: "#6E6A65" },
      { name: "Douglas Fir", color: "#C9B08E" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) notFound();

  return <ProjectDetail project={project} slug={slug} />;
}

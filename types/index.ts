export type ProjectCategory = "Computer Vision" | "NLP" | "Data Science";

export interface Project {
  slug: string;
  title: string;
  description: string;
  /** Plain-language goals of the project. Describe intent, not unverified results. */
  highlights: string[];
  technologies: string[];
  categories: ProjectCategory[];
  image: { src: string; alt: string; /** true = illustration, not a real screenshot */ illustrative: boolean };
  /** Leave a link as "" until it exists; the card shows a disabled button. */
  links: { demo: string; repo: string; notebook?: string };
  featured: boolean;
}

export interface SkillGroup { id: string; title: string; skills: string[] }

export interface EducationEntry { institution: string; degree: string; specialization?: string; location?: string; dates?: string }
export interface TimelineItem { title: string; org?: string; dates?: string; description?: string }

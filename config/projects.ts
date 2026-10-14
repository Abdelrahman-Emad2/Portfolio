import type { Project } from "@/types";

/** Edit freely. Replace illustrative images with real screenshots and fill in links when ready. */
export const projects: Project[] = [
  {
    slug: "ship-detection",
    title: "Ship Detection",
    description: "A computer vision project focused on detecting and locating ships in aerial or satellite imagery.",
    highlights: ["Dataset preparation", "Model training", "Detection results", "Evaluation"],
    technologies: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    categories: ["Computer Vision"],
    image: { src: "/images/ship-detection.svg", alt: "Illustration of satellite imagery with bounding boxes around ships", illustrative: true },
    links: { demo: "", repo: "" },
    featured: true,
  },
  {
    slug: "accessible-college-navigation",
    title: "Accessible College Navigation",
    description: "An AI-powered indoor navigation system designed to help blind, visually impaired, deaf, and hard-of-hearing users navigate a college building.",
    highlights: ["Accessible voice and text interaction", "Indoor mapping", "Navigation assistance"],
    technologies: ["Python", "NLP", "Speech-to-Text", "Text-to-Speech", "Computer Vision"],
    categories: ["NLP", "Computer Vision"],
    image: { src: "/images/college-navigation.svg", alt: "Illustration of an indoor floor plan with a highlighted route", illustrative: true },
    links: { demo: "", repo: "" },
    featured: true,
  },
  {
    slug: "car-data-analysis",
    title: "Car Data Analysis",
    description: "A data analysis and machine learning project exploring car specifications, prices, and the factors that influence vehicle pricing.",
    highlights: ["Data cleaning", "Exploratory analysis", "Visualization", "Predictive modeling where implemented"],
    technologies: ["Python", "pandas", "NumPy", "Matplotlib", "scikit-learn"],
    categories: ["Data Science"],
    image: { src: "/images/car-analysis.svg", alt: "Illustration of a data dashboard with charts about car prices", illustrative: true },
    links: { demo: "", repo: "", notebook: "" },
    featured: true,
  },
];

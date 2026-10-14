import type { SkillGroup } from "@/types";

/** List only what you genuinely know. Remove anything you're not comfortable discussing. */
export const skillGroups: SkillGroup[] = [
  { id: "programming", title: "Programming", skills: ["Python", "C++", "SQL"] },
  { id: "data", title: "Data Science", skills: ["NumPy", "pandas", "Matplotlib", "scikit-learn"] },
  { id: "ml", title: "Machine Learning & Deep Learning", skills: ["TensorFlow", "PyTorch", "CNNs", "Model evaluation"] },
  { id: "cv", title: "Computer Vision", skills: ["OpenCV", "Object detection", "YOLO"] },
  { id: "dev", title: "Development & Deployment", skills: ["Git", "GitHub", "FastAPI", "Docker", "Linux"] },
];

import type { EducationEntry, TimelineItem } from "@/types";

export const education: EducationEntry[] = [
  {
    institution: "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
    degree: "Bachelor of Computer Science",
    specialization: "Artificial Intelligence",
    location: "College of Computing and Information Technology, New Cairo",
    dates: "", // TODO: e.g. "2023 – 2027"
  },
];

/** Empty arrays are hidden automatically. Add only real entries. */
export const internships: TimelineItem[] = [];
export const coursework: string[] = [];
export const certifications: TimelineItem[] = [];
export const teamProjects: TimelineItem[] = [];
export const achievements: TimelineItem[] = [];

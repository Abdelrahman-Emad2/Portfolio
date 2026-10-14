/** Single source of truth for personal details. Edit here only. */
export const site = {
  name: "Abdelrahman Emad",
  firstName: "Abdelrahman",
  surname: "Emad",
  initials: "AR",
  role: "AI Student | Computer Science",
  title: "Abdelrahman Emad | AI Student & Computer Science Portfolio",
  description:
    "Portfolio of Abdelrahman Emad, a Computer Science student specializing in Artificial Intelligence: machine learning, computer vision, and practical intelligent applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  intro:
    "I'm a Computer Science student specializing in artificial intelligence. I'm interested in machine learning, computer vision, and turning models into practical applications people can use.",
  tagline: "Better Models. Bigger Impact.",
  /** Empty strings hide the matching icon/link everywhere. */
  email: "", // TODO: add your email, e.g. "you@example.com"
  github: "", // TODO: add your profile URL, e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/abdelrahman-emad-611566265",
  /** Put your PDF at public/cv/ and set available: true to show the button. */
  cv: { path: "/cv/Abdelrahman-Emad-CV.pdf", available: false },
  about: [
    "I'm studying Computer Science with an Artificial Intelligence specialization at the Arab Academy for Science, Technology and Maritime Transport (AASTMT). Most of my time goes into machine learning and deep learning: learning how models work, how to evaluate them honestly, and where they break.",
    "I like projects with a real use case, such as detecting objects in imagery, helping people navigate a building, or finding the factors behind a price. I care about reliable results more than flashy demos.",
    "I learn by building, I enjoy breaking a hard problem into small testable steps, and I work well in a team. I'm looking for internships where I can contribute to practical AI systems and keep growing.",
  ],
  traits: ["Machine learning", "Deep learning", "Computer vision", "Team projects"],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

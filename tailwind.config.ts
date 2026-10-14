import type { Config } from "tailwindcss";
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: c("bg"), surface: c("surface"), line: c("line"), fg: c("fg"), muted: c("muted"), accent: c("accent"), brand: c("brand") },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "ui-monospace", "monospace"] },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;

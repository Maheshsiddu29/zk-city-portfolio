/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",          // overall page background (very dark slate)
        surface: "#030712",     // deep card background
        surfaceSoft: "#020617",
        accent: "#f97316",      // orange
        accentSoft: "#fb923c",
        accent2: "#38bdf8",     // neon blue
        accentPurple: "#a855f7" // neon purple
      },
      backgroundImage: {
        // global page glow (Huly-like)
        "app-gradient":
          "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.25), transparent 55%)," +
          "radial-gradient(circle at 100% 0%, rgba(248,113,113,0.20), transparent 55%)," +
          "radial-gradient(circle at 50% 100%, rgba(168,85,247,0.35), transparent 60%)",
        // cards + sections
        "card-gradient":
          "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(168,85,247,0.55))",
        "footer-gradient":
          "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.35), transparent 55%)," +
          "radial-gradient(circle at 10% 100%, rgba(249,115,22,0.35), transparent 55%)," +
          "radial-gradient(circle at 90% 100%, rgba(168,85,247,0.30), transparent 60%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.45)",
        "glow-soft": "0 0 30px rgba(168,85,247,0.35)"
      }
    }
  },
  plugins: []
};

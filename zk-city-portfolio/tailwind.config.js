/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",          // page background
        surface: "#020617",     // base surface
        neonBlue: "#38bdf8",
        neonOrange: "#fb923c",
        neonPurple: "#a855f7",
      },
      boxShadow: {
        "neon-blue": "0 0 32px rgba(56,189,248,0.45)",
        "neon-orange": "0 0 32px rgba(251,146,60,0.45)",
        "soft": "0 22px 60px rgba(15,23,42,0.9)",
      },
      backgroundImage: {
        "page-gradient":
          "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.14), transparent 55%)," +
          "radial-gradient(circle at 100% 0%, rgba(251,146,60,0.16), transparent 55%)," +
          "radial-gradient(circle at 50% 100%, rgba(168,85,247,0.2), transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(56,189,248,0.35), rgba(251,146,60,0.35))",
      },
      borderRadius: {
        card: "22px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

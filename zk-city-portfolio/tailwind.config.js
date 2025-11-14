/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        surface: "#0b1020",
        surfaceSoft: "#111827",
        accent: "#4f46e5",
        accentSoft: "#6366f1",
        accent2: "#06b6d4",
      },
    },
  },
  plugins: [],
};

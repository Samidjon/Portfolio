import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17171c",
        cream: "#fffdf8",
        lilac: "#8b72ff",
        lemon: "#ffe56c",
        mint: "#b9f2dc",
        coral: "#ff8e7e",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(39, 31, 84, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;

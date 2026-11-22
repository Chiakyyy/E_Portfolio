// This configuration file exports the theme extensions and content path definitions.
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          bg: "#050507",
          card: "#16181D",
          cardHover: "#1E2025",
          statCard: "#181A20",
          contact: "#14161A",
          iconBadge: "#1F2229",
        },
        brand: {
          // Vibrant reddish-pink studio accent color definition.
          pink: "#FA2A55",
          orange: "#F97316",
          amber: "#C2590A",
          amberLight: "#E07A16",
          cyan: "#10D9C4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

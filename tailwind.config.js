

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E0F2F1", // Light mint green
          DEFAULT: "#26A69A", // Primary mint green
          dark: "#00796B", // Darker mint green
        },
        accent: {
          light: "#FCE4EC", // Soft pink highlight
          DEFAULT: "#F48FB1", // Main pink highlight
          dark: "#AD1457", // Darker accent
        },
        neutral: {
          light: "#F5F5F5", // Background light gray
          DEFAULT: "#9E9E9E", // Neutral gray
          dark: "#212121", // Dark gray
        },
      },
    },
  },
  plugins: [],
};

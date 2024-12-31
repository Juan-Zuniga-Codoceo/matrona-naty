/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#702459", // purple-900
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#FED7E2", // pink-200
          foreground: "hsl(var(--secondary-foreground))",
        },
        matrona: {
          pink: {
            light: '#FFF5F7',
            DEFAULT: '#FED7E2',
            dark: '#D53F8C',
          },
          purple: {
            light: '#9F7AEA',
            DEFAULT: '#702459',
            dark: '#521B41',
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
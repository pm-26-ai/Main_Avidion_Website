import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "why-choose-us": "url('/why-choose-bg.png')",
      },
      animation: {
        "rotate-border": "border-rotate 3s linear infinite",
        gradient: "gradient 8s linear infinite",
        "gradient-wave": "gradientWave 1s linear infinite",
        blob: "blob 0.7s linear infinite",
        bounce: "bounce 3s infinite",
      },

      keyframes: {
        gradientWave: {
          "0%": {
            "background-position": "0% 50%",
          },
          "100%": {
            "background-position": "200% 50%",
          },
        },
        gradient: {
          to: {
            "background-position": "200% center",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -50px) scale(1.05)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },

        "border-rotate": {
          to: {
            "--border-angle": "360deg",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
        "avidion-benefit": "url('/careers/benefits-bg.png')",
      },
      animation: {
        "rotate-border": "border-rotate 4s linear infinite",
        gradient: "gradient 8s linear infinite",
        "gradient-wave": "gradientWave 6s linear infinite",
        blob: "blob 5s linear infinite",
        bounce: "bounce 3s infinite",
        "gradient-radial": "gradient-radial 12s linear infinite",
        "service-bounce": "service-bounce 3s infinite",
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
            transform: "translate(10px, -130px) scale(1.07)",
          },
          "66%": {
            transform: "translate(-20px, -50px) scale(0.8)",
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
        "gradient-radial": {
          "0%, 100%": {
            background:
              "radial-gradient(56.13% 56.07% at 50.86% 3.47%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "25%": {
            background:
              "radial-gradient(70.29% 22.24% at 72.24% 59.53%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "50%": {
            background:
              "radial-gradient(32.59% 32.59% at 50% 92.13%, rgba(0,0,0,0) 0%, #000 100%)",
          },
          "75%": {
            background:
              "radial-gradient(68.81% 21.77% at 28.23% 59.53%, rgba(0,0,0,0) 0%, #000 100%)",
          },
        },
        "service-bounce": {
          "0%, 100%": {
            transform: "translateY(-4%)",
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

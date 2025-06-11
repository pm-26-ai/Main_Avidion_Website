import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      vs: "375px",
      xxs: "390px",
      xs: "400px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      padding: {
        DEFAULT: "23px",
        sm: "23px",
        md: "52px",
        xl: "182.5px",
        "2xl": "416px",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jersey: ["Jersey 25", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "why-choose-us-bg-xl": "url('/why-choose-us/why-choose-bg-xl.png')",
        "why-choose-us-bg-md": "url('/why-choose-us/why-choose-bg-md.png')",
        "mobile-app-dev": "url('/hero-section/mobile-app-dev-bg.svg')",
      },
      animation: {
        "rotate-border": "border-rotate 4s linear infinite",
        // for animating main logo and hero-heading
        gradient: "gradient 8s linear infinite",
        "gradient-wave": "gradientWave 6s linear infinite",

        //for animating the blurry balls
        blob: "blob 5s ease-in-out infinite",
        "blob-2": "blob-2 5s ease-in-out infinite",
        "circle-move": "circle-move 3s linear infinite",

        //for bouncing the items with normal speed
        bounce: "bounce 3s infinite",

        // for gardient in services page
        "gradient-radial": "gradient-radial 12s linear infinite",

        // for animating all-services icons in services page little slow then bounce
        "service-bounce": "service-bounce 3s infinite",

        //for animating the current-openings in career page
        slideDown: "slideDown 400ms ease-out",
        slideUp: "slideUp 400ms ease-out",

        "infinite-scroll": "infinite-scroll 20s linear infinite",
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
            transform: "translate(300px, -50px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "blob-2": {
          "0%": {
            transform: "translate(0px, 0px) ",
          },
          "33%": {
            transform: "translate(10px, -180px) ",
          },
          "66%": {
            transform: "translate(-200px, -20px) ",
          },
          "100%": {
            transform: "translate(0px, 0px) ",
          },
        },
        "circle-move": {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translateY(200px)",
          },
          "66%": {
            transform: "translate(50px, 50px)",
          },
          "100%": {
            transform: "translateY(0px)",
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
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f84759",
          ".nav-link": {
            color: "#e4e4e7",
          },
          ".nav-link:hover": {
            color: "#f84759",
          },
          ".link": {
            color: "#71717a",
            "text-decoration": "none",
          },
          ".link:hover": {
            color: "#3f3f46",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        primary: "1px 2px 8px 1px rgba(248, 71, 89, 0.39)",
        card: "0 1px 6px 0 rgba(113,113,122, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 5s ease-in-out forwards",
        title: "title 4s ease-out forwards",
        "fade-left": "fade-left 4s ease-in-out forwards",
        "fade-right": "fade-right 4s ease-in-out forwards",
        "fade-in-sections": "fade-in 7s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents }) {
      const skillItems = {
        ".skill-item": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "8px",
          width: "110px",
          height: "100px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 2px 8px 0 rgba(248, 71, 89, 1)",
          },
        },
      };
      addComponents(skillItems);
    },
  ],
};

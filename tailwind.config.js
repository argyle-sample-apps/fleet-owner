const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/charts/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["CircularXX", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ["40px", "49px"],
        heading: ["30px", "36px"],
        subheading: ["26px", "32px"],
        titleSmall: ["20px", "24px"],
        largeParagraph: ["18px", "25px"],
        paragraph: ["16px", "20px"],
        smallParagraph: ["14px", "20px"],
        footnote: ["12px", "14px"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
        gray: {
          light: "#DBDCDD",
          medium: "#A8A8A8",
          DEFAULT: "#94959A",
          dark: "#4C4F56",
          darkest: "#313439",
          40: "#999999",
          /*  transparent */
          T04: "rgba(0, 0, 0, 0.04)",
          T08: "rgba(0, 0, 0, 0.08)",
          T10: "rgba(0, 0, 0, 0.1)",
          T12: "rgba(0, 0, 0, 0.12)",
          T16: "rgba(0, 0, 0, 0.16)",
          T20: "rgba(0, 0, 0, 0.2)",
          T30: "rgba(0, 0, 0, 0.3)",
          T40: "rgba(0, 0, 0, 0.4)",
          T50: "rgba(0, 0, 0, 0.5)",
          T60: "rgba(0, 0, 0, 0.6)",
          T70: "rgba(0, 0, 0, 0.7)",
          T80: "rgba(0, 0, 0, 0.8)",
          T90: "rgba(0, 0, 0, 0.9)",
        },
        cyan: {
          20: "#D8EBF5",
          light: "#58C4DE",
          pastel: "#C2C1F2",
          DEFAULT: "#58C4DE",
          dark: "#707192",
          darkest: "#494A62",
        },
        purple: {
          light: "#E6E6FA",
          pastel: "#C2C1F2",
          DEFAULT: "#696EE3",
          dark: "#B097E3",
          darkest: "#707192",
        },
        blue: {
          DEFAULT: "#4C7CDA",
        },
        orange: {
          light: "#FFEFD0",
          pastel: "#FED88A",
          DEFAULT: "#FFA437",
          dark: "#937F53",
          darkest: "#5F5337",
        },
        green: {
          light: "#D5EDDC",
          pastel: "#B6E6B8",
          DEFAULT: "#40AC74",
          dark: "#81875A",
          darkest: "#54583C",
        },
        yellow: {
          light: "#FEE4AE",
        },
        lime: {
          light: "#F2F5D5",
          pastel: "#DFE795",
          DEFAULT: "#B2C73C",
          dark: "#69876F",
          darkest: "#44584A",
        },
        misty: {
          40: "#A6B3C4",
        },
        red: {
          DEFAULT: "#FF3737",
        },
      },
      gridTemplateColumns: {
        summary: "min-content 16px min-content",
        connect: "40px 1fr",
        landing: "40px 1fr 24px",
        connected: "48px 1fr 1fr 24px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};

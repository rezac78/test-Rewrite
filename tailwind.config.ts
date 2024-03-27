import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(252, 252, 253, 1)",
        "nav-title": "rgba(116, 166, 166, 1)",
        "custom-purple": "rgba(147, 115, 238, 1)",
        'custom-dark': '#181818',
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, #F2EEFD 6.16%, rgba(242, 238, 253, 0) 100%)",
      },
      borderWidth: {
        "3": "3px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

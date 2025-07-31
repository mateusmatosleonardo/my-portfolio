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
        background: "#000000F2",
        white: "#FAFAFA",
        "default-gray": "#ACACAC",
        "dark-gray": "#363636",
      },
    },
  },
  plugins: [],
};
export default config;

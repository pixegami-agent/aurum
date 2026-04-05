import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F5C518',
        dark: '#1A1A1A',
        'dark-mid': '#2C2C2C',
        grey: '#6B6B6B',
        'grey-light': '#F4F4F4',
      },
    },
  },
  plugins: [],
};
export default config;

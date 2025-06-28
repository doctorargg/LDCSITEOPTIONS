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
        primary: {
          '50': '#f0f7ff',
          '100': '#e0effe',
          '200': '#c1e0fd',
          '300': '#a1d1fc',
          '400': '#7bbcf8',
          '500': '#5ba8f5',
          '600': '#4790e7',
          '700': '#3a79d0',
          '800': '#3162ab',
          '900': '#2d538a',
          '950': '#1f365c',
        },
        accent: {
          '50': '#f0f9f7',
          '100': '#dcf2ea',
          '200': '#bce6d6',
          '300': '#98d8c1',
          '400': '#71c8a9',
          '500': '#4fba92',
          '600': '#3da17b',
          '700': '#318165',
          '800': '#2a6952',
          '900': '#245645',
          '950': '#143028',
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        animation: {
          glow: 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          glow: {
            '0%': { 'box-shadow': '0 0 5px rgba(75, 181, 146, 0.5), 0 0 10px rgba(75, 181, 146, 0.5)' },
            '100%': { 'box-shadow': '0 0 20px rgba(75, 181, 146, 1), 0 0 30px rgba(75, 181, 146, 1)' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;

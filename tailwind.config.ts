import type { Config } from "tailwindcss";
import { Playwrite_DK_Loopet } from "next/font/google";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'playwrite': ['"Playwrite DK Loopet"', 'cursive'],
      },
      keyframes: {
        fadeInLetter: {
          '0%': { opacity: 0, transform: 'translateY(0.25rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInLetter: 'fadeInLetter 0.3s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
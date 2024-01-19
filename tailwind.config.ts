import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        "circle-sm": "0 0 8px 8px rgba(255, 255, 255, 0.25)",
      }
    },
  },
  plugins: [],
} satisfies Config;

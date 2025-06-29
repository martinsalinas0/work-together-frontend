// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}", // App Router pages
    "./components/**/*.{ts,tsx}", // Your shared components
    "./pages/**/*.{ts,tsx}", // (if you're mixing with Pages Router)
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1e40af",
      },
    },
  },
  plugins: [],
};
export default config;

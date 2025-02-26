/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main Brand Color (Bright Blue)
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Accent Color (Warm Orange)
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        text: {
          light: '#ffffff',   // For Light Text
          dark: '#1e293b',    // For Dark Text
          muted: '#64748b',   // For Muted Text
        },
        background: {
          light: '#f8fafc',   // Light Background
          dark: '#1e293b',    // Dark Background
        }
      },      
      fontFamily: {
        Poppins: ["Poppins"],
        "Poppins-Medium": ["Poppins-Medium"],
        "Poppins-Semibold": ["Poppins-SemiBold"],
        "Poppins-Bold": ["Poppins-Bold"]
      }
    },
  },
  plugins: [],
};

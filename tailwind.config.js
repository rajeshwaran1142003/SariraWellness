/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
      },
      colors: {
        background: 'hsl(43, 43%, 97%)', // Heritage Cream
        foreground: 'hsl(88, 28%, 15%)',
        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(88, 28%, 15%)',
        popover: 'hsl(0, 0%, 100%)',
        'popover-foreground': 'hsl(88, 28%, 15%)',
        primary: {
          DEFAULT: 'hsl(88, 28%, 21%)', // Deep Green #364A22
          foreground: 'hsl(43, 43%, 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(43, 33%, 92%)',
          foreground: 'hsl(88, 28%, 21%)',
        },
        muted: {
          DEFAULT: 'hsl(43, 33%, 94%)',
          foreground: 'hsl(88, 28%, 35%)',
        },
        accent: {
          DEFAULT: 'hsl(29, 78%, 54%)', // Burnt Orange #E38A30
          foreground: 'hsl(0, 0%, 98%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        border: 'hsl(43, 23%, 90%)',
        input: 'hsl(43, 23%, 90%)',
        ring: 'hsl(29, 78%, 54%)',
        terracotta: 'hsl(13, 40%, 45%)',
        brown: 'hsl(21, 33%, 27%)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        floating: 'floating 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Matches all JavaScript, JSX, TypeScript, and TSX files in `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  
};


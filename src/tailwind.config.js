// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // This enables the class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Times New Roman', 'serif'],
          'serif': ['Times New Roman', 'serif'],
        },
        colors: {
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
        },
      },
    },
    plugins: [],
  };
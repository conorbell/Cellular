/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Import DaisyUI

export default {
  content: ['./index.html', './components/**/*.{html, js, jsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '480px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
    },
    extend: {
      backgroundColor: {
        'gray-button': 'rgba(65, 69, 73, 0.68)',
      },

      colors: {
        blue1: '#0000ff',
      },
      fontFamily: {
        Rounded: ['Rounded'],
        Roboto: ['Roboto', 'sans'],
      },
      fontSize: {
        sM: '0.5rem',
      },
      maxWidth: {
        maxW: 'unset',
      },
      keyframes: {
        float: {
          '0%': {
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translateY(0px)',
          },
          '50%': {
            boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
            transform: 'translateY(-20px)',
          },
          '100%': {
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

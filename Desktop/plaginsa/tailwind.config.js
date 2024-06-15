/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        // Add Preline and Acernity UI paths
        './node_modules/preline/dist/*.js',
        './node_modules/@acernity/ui/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            inter: ['Inter', 'sans-serif'],
        },
    },
    plugins: [
        require('preline/plugin'),
        addVariablesForColors,
    ],
}
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

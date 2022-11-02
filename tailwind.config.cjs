/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pale_Cyan': 'hsl(193, 100% , 96% )',
                'dark_Cyan': 'hsl(192, 100%, 9% )',
                'Pink': 'hsl(322, 100% , 66% )',


            },
            backgroundImage: {
                'heroD': "url('./assets/images/bg-hero-desktop.svg')",
                'heroM': "url('./assets/images/bg-hero-mobile.svg')"
            },
        },
    },
    plugins: [],
}
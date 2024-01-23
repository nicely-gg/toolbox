import tailwindTypography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Space Grotesk',
            },

            colors: {
                zinc: { 925: '#0e0e0e' },
            },
        },
    },
    plugins: [tailwindTypography({ target: 'modern' })],
}

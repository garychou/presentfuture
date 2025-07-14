module.exports = {

    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./content/**/*.md"
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            typography: (theme) => ({
                DEFAULT: {
                css: {
                    fontFamily: theme('fontFamily.body').join(', '),
                    h1: { fontFamily: theme('fontFamily.heading').join(', ') },
                    h2: { fontFamily: theme('fontFamily.heading').join(', ') },
                    h3: { fontFamily: theme('fontFamily.heading').join(', ') },
                },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
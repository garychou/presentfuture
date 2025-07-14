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
                heading: ['DM Serif Text', 'serif'],
                body: ['Schibsted Grotesk', 'sans-serif'],
            },
            typography: (theme) => ({
                DEFAULT: {
                css: {
                    fontFamily: theme('fontFamily.body').join(', '),
                    h1: { fontFamily: theme('fontFamily.heading').join(', ') },
                    h2: { fontFamily: theme('fontFamily.heading').join(', ') },
                    h3: { 
                        fontFamily: theme('fontFamily.body').join(', '),
                        fontSize: '1.3rem',
                                '@screen md': {
                                fontSize: '1.5rem'
                                },
                                '@screen lg': {
                                fontSize: '1.7rem !important'
                                },

                        fontWeight: '400 !important',         // Weight (font-semibold)
                        lineHeight: '1.4 !important',         // Line height
                        marginTop: '2rem',         // Top margin
                        marginBottom: '1rem',      // Bottom margin
                        color: 'inherit',           // Use parent color
                    },
                    'h3 strong': {
                        fontWeight: '800 !important',
                        color:'#fff'         // Weight (font-bold)
                    }
                },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
                'lato-bold': [
                    'Lato Bold',
                    'Helvetica',
                    'Verdana',
                    'Tahoma',
                    'sans-serif',
                ],
                roboto: [
                    'Roboto',
                    'Helvetica',
                    'Verdana',
                    'Tahoma',
                    'sans-serif',
                ],
                'roboto-bold': [
                    'Lato Bold',
                    'Helvetica',
                    'Verdana',
                    'Tahoma',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            animation: {
                ping: 'ping 10s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
        },
        keyframes: {
            ping: {
                '0%': {
                    transform: 'scale(1)',
                    opacity: '1',
                },
                '75%, 100%': {
                    transform: 'scale(2)',
                    opacity: '0',
                },
            },
        },
        plugins: [],
    }
}
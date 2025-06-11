/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            Animation: {
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
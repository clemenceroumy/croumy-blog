import type {Config} from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                "background-light": "#FFFFFF",
                "background-dark": "#0D1317",
                "text-light": "#000000",
                "text-dark": "#FFFFFF",
                primary: '#3116FA',
                darkGray: '#9C8F6E',
                "bg-article": "#FEF7E5",
                "bg-article-dark": "#252323"
            },
        },
    },
    plugins: [],
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    variants: {
        extend: {}
    }
}
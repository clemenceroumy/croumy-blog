import type {Config} from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                "background-light": "#FFFCF4",
                "background-dark": "#0D1317",
                "text-light": "#000000",
                "text-dark": "#FFFFFF",
                primary: '#E14428',
                darkPrimary: '#E95432',
                darkGray: '#9C8F6E',
                gray: '#C4C4C4',
                "bg-article": "#FEF7E5",
                "bg-article-dark": "#252323"
            }
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
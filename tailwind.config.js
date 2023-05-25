const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        screens: {
            phone: "320px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
        },
        extend: {
            fontFamily: {
                sans: ["Jost", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                carbon: {
                    primary: "#30415d",
                    secondary: "#90adbb",
                    accent: "#cf6766",
                    neutral: "#2D2432",
                    "base-100": "#031424",
                    info: "#38B1E0",
                    success: "#1A996E",
                    warning: "#fde68a",
                    error: "#ef4444",
                },
                gardenia: {
                    primary: "#68886c",
                    secondary: "#e2e9e6",
                    accent: "#ded4dd",
                    neutral: "#000000",
                    "base-100": "#f7f6f8",
                    info: "#38B1E0",
                    warning: "#fde68a",
                    error: "#ef4444",
                },
                glam: {
                    primary: "#ffb9b3",
                    secondary: "#fff6f5",
                    accent: "#d1bdff",
                    neutral: "#000000",
                    "base-100": "#ffffff",
                    info: "#38B1E0",
                    success: "#1A996E",
                    warning: "#fde68a",
                    error: "#ef4444",
                },
                catppuccin: {
                    primary: "#8caaee", // blue
                    secondary: "#f4b8e4", // pink
                    accent: "#81c8be", // teal
                    neutral: "#232634", // crust
                    "base-100": "#303446", // base
                    info: "#85c1dc", // sapphire
                    success: "#a6d189", // green
                    warning: "#e5c890", // yellow
                    error: "#e78284", // red
                },
                souvingon: {
                    primary: "#3a3d55",
                    secondary: "#98878f",
                    accent: "#985d6f",
                    neutral: "#303446",
                    "base-100": "#1b2033",
                    info: "#85c1dc",
                    success: "#a6d189",
                    warning: "#e5c890",
                    error: "#e78284",
                },
            },
        ],
    },
};

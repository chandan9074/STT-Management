/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xxs: "12px",
      xs: "13px",
      small: "14px",
      base: "16px",
      "heading-6": "18px",
      "heading-5": "20px",
      "heading-4": "22px",
      "heading-3": "24px",
      "heading-2": "32px",
      "heading-1": "72px",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
      },
      boxShadow: {
        "light-blue": "0px 0px 12px #FFFFFF",
        "light-tomato": "0px 2px 18px #FFD3D3",
        "light-periwinkle": "0px 2px 18px #FFF5CC",
        "light-onahau": "0px 2px 18px #E2FBD7",
        "light-orinoco": "0px 2px 18px #CCF8FE",
        "light-yellow": "0px 2px 18px #CCDDFE",
        "bottom-light-blue": "0px 3px 10px #2C79BE, 0px 0px 1px #2C79BE",
        "light-gray":
          "0px 1px 2px rgba(31, 56, 76, 0.06), 0px 1px 3px rgba(31, 56, 76, 0.1)",
      },
      colors: {
        "primary-ct-blue-60": "#2C79BE",
        "primary-ct-magenta-60": "#851F58",
        "blue-gray-90": "#464E5F",
        "secondary-green-50": "#05956F",
        "secondary-red-50": "#FF293D",
        "secondary-purple-50": "#6918B4",
        "secondary-orange-50": "#FF8000",
        "secondary-blue-50": "#136EE5",
        "secondary-pink-50": "#FF00FF",
        "secondary-yellow-50": "#F5AC42",
        "border-light": "#E5E7EB",
        "border-gray": "#D1D3D6",
        "border-light-blue": "#D6E5F5",
        "border-teal": "#80CBC4",
        icon: "#9099A1",
        default: "#F4F7FA",
        checking: "#FDFAF7",
        "table-row-gray": "#F9FAFC",
        "black-100": "#000000",
        "black-90": "#121212",
        "black-80": "#1B1C1E",
        "black-70": "#1B1C1E",
        "black-60": "#1F1F1F",
        "black-50": "#2B2B2B",
        "black-40": "#303030",
        "black-30": "#0B0B0C",
        "black-20": "#0E0E10",
        "ct-blue-95": "#143252",
        "ct-blue-90": "#1F384C",
        "ct-blue-80": "#2D516E",
        "ct-blue-70": "#2D6AA1",
        "ct-blue-60": "#2C79BE",
        "ct-blue-45": "#677499",
        "ct-blue-40": "#8495BA",
        "ct-blue-30": "#ADBFD9",
        "ct-blue-20": "#D6E5F5",
        "ct-blue-10": "#EAF3FA",
        "ct-blue-05": "#F4F7FA",
        "ct-blue-03": "#FEFEFE",
        "ct-blue-90-88%": "#1F384C",
        "ct-blue-90-70%": "#1F384C",
        "ct-blue-90-68%": "#1F384C",
        "ct-blue-90-55%": "#1F384C",
        "blue-gray-85": "#323640",
        "blue-gray-80": "#464E5F",
        "blue-gray-75": "#5F6B7D",
        "blue-gray-70": "#6B7B8C",
        "blue-gray-60": "#9099A1",
        "blue-gray-40": "#D1D3D6",
        "blue-gray-30": "#E5E7EB",
        "blue-gray-20": "#E9EDF3",
        "blue-gray-10": "#F3F4F6",
        "blue-gray-05": "#F9FAFC",
        "blue-gray-A10": "#E0E7EF",
        "blue-gray-A20": "#B8BFCC",
        "blue-gray-A30": "#9FA3B2",
        "green-60": "#03543F",
        "green-10": "#DEF7F0",
        "green-05": "#F7FCFC",
        "green-A10": "#E2FBD7",
        "red-80": "#940412",
        "red-60": "#BF1F2E",
        "red-40": "#FF5767",
        "red-30": "#F78391",
        "red-15": "#FFD3D3",
        "red-10": "#F7DEE0",
        "red-03": "#FCF7F7",
        "purple-60": "#52138C",
        "purple-10": "#EEDDFF",
        "purple-A10": "#DAD7FE",
        "orange-60": "#D96D00",
        "orange-10": "#FFF2E5",
        "orange-A10": "#FFE5D3",
        "blue-60": "#0D4B9C",
        "blue-30": "#8EBFFF",
        "blue-20": "#CCDDFE",
        "blue-10": "#E1EFFE",
        "blue-A10": "#CCF8FE",
        "yellow-03": "#FCF9EB",
        "yellow-A10": "#FFF5CC",
        "magenta-70": "#621841",
        "winter-wizard": "#A1E6FF",
        "venetian-red": "#F7DEE1",
        "sea-foam-green": "#A0E4CB",
        "sea-serpent": "#59C1BD",
      },
    },
  },
  plugins: [],
};

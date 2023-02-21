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
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeIn2: "fadeIn 0.3s ease-in-out",
        transition1: "transition duration-900 ease-out hover:ease-in",
      },
      dropShadow: {
        "blue-gray": "drop-shadow(0px 2px 4px rgba(91, 124, 192, 0.25))",
      },
      boxShadow: {
        "light-blue": "0px 0px 12px #FFFFFF",
        "light-periwinkle": "0px 2px 18px #FFF5CC",
        "light-onahau": "0px 2px 18px #E2FBD7",
        "light-orinoco": "0px 2px 18px #CCF8FE",
        "light-yellow": "0px 2px 18px #CCDDFE",
        "toast-shadow":"0px 4px 12px rgba(31, 56, 76, 0.25)",
        "bottom-light-blue": "0px 2px 32px #2C79BE, 0px 0px 1px #2C79BE",
        "light-gray":
          "0px 1px 2px rgba(31, 56, 76, 0.06), 0px 1px 3px rgba(31, 56, 76, 0.1)",
        "light-blue-2": "0px 4px 16px rgba(70, 78, 95, 0.35)",
        "bottom-light-blue-10":
          "0px 1px 2px rgba(31, 56, 76, 0.06), 0px 1px 3px rgba(31, 56, 76, 0.1)",
        "bottom-light-blue-20": "0px 4px 24px rgba(31, 56, 76, 0.12)",
        'light-orange-shadow': "0px 2px 18px rgba(230, 206, 190, 0.12)",
        "light-tomato": "0px 2px 18px rgba(240, 97, 111, 0.12)",

        "light-tomato2": "0px 2px 18px rgba(240, 97, 111, 0.50)",
        "light-green2": "0px 2px 18px rgba(127, 187, 101, 0.50)",
        "light-yellow2": "0px 4px 4px rgba(197, 178, 104, 0.50)",
        "light-blue2": "0px 4px 4px rgba(184, 224, 229, 0.50 )",
        "light-orange2": "0px 4px 4px rgba(197, 178, 104, 0.50)",
        "light-blue3": "0px 4px 4px rgba(124, 150, 201, 0.50)",
        "light-purple": "px 4px 4px rgba(163, 158, 216, 0.50)",

        "light-tomato-4": "0px 2px 18px rgba(230, 190, 190, 1)",
        "light-onahau-4": "0px 2px 18px rgba(207, 230, 197, 1)",
        "light-periwinkle-4": "0px 2px 18px rgba(230, 221, 184, 1)",
        "shadow-light-orange-4": "0px 2px 18px rgba(255, 229, 211, 1)",
        "light-orinoco-4": "0px 2px 18px rgba(184, 224, 230, 1)",
        "light-yellow-4": "0px 2px 18px rgba(184, 200, 230, 1)",
        "light-purple-4": "0px 2px 18px rgba(184, 200, 230, 1)",

        "light-gray-3": "0px 4px 24px 1px rgba(31, 56, 76, 0.08)",

        "box": '0px 1px 2px rgba(31, 56, 76, 0.06), 0px 1px 3px rgba(31, 56, 76, 0.1)',

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
        "ct-blue-medium": "#157AFF",
        "ct-blue-90-88%": "rgba(31, 56, 76, 0.88)",
        "ct-blue-90-70%": "rgba(31, 56, 76, 0.7)",
        "ct-blue-90-68%": "rgba(31, 56, 76, 0.68)",
        "ct-blue-90-55%": "rgba(31, 56, 76, 0.55)",
        "ct-blue-90-74%": "rgba(20, 50, 82, 0.74)",
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
        "blue-gray-A40": "#8CB3FE",
        "green/50-05956F": "#05956F",
        "green-60": "#03543F",
        "green-90": "#059514",
        "green-10": "#DEF7F0",
        "green-05": "#F7FCFC",
        "green-A10": "#E2FBD7",
        "green-bg-O25": "#51574E",
        "light-green-90": "#AFFF8C",
        "coral-90": "#FF8C8C",
        "quack-90": "#FFE98C",
        "water-90": "#8CF0FE",
        "cobalite-90": "#A39CFF",
        "red-80": "#940412",
        "red-60": "#BF1F2E",
        "red-40": "#FF5767",
        "red-30": "#F78391",
        "red-15": "#FFD3D3",
        "red-10": "#F7DEE0",
        "red-03": "#FCF7F7",
        "red-A10": "#C9B09F",
        "purple-60": "#52138C",
        "purple-10": "#EEDDFF",
        "purple-A10": "#DAD7FE",
        "purple-bg-O18": "#392247",
        "medium-purple-bg": "#A729F5",
        "orange-60": "#D96D00",
        "orange-70": "#956105",
        "orange-10": "#FFF2E5",
        "orange-A10": "#FFE5D3",
        "orange-A10-O25": "#58524D",
        "blue-60": "#0D4B9C",
        "blue-30": "#8EBFFF",
        "blue-20": "#CCDDFE",
        "blue-10": "#E1EFFE",
        "blue-A10": "#CCF8FE",
        "yellow-03": "#FCF9EB",
        "yellow-A10": "#FFF5CC",
        "magenta-70": "#621841",
        "winter-wizard": "#A1E6FF",
        "winter-wizard-O25": "#415258",
        "venetian-red": "#F7DEE1",
        "sea-foam-green": "#A0E4CB",
        "sea-serpent": "#59C1BD",
        "silver-tree": "#5BBC96",
        "tooltip-bg": "#212121",
        tacao: "#EAA678",
        onahau: "#CCF8FE",
        fog: "#DAD7FE",
        "cold-turkey": "#C4B0B2",
        "pacific-blue": "#00A9C5",
        "bright-turquoise": "#42F5D5",
        "your-pink": "#FFCBCB",
        "pale-sky": "#667487",
        "feijao": "#94D676",
        "masala": "#453939",
        "blue-gray-A50": "rgba(31, 56, 76, 0.7)",
        'white-gray-45': 'rgba(255, 255, 255, 0.45)',
        'white-gray-55': 'rgba(255, 255, 255, 0.55)',
        "forest-green": "#26851F",
        "pacifika":"#85821F",
        "light-green-17%": "rgba(0, 255, 152, 0.17)",
        "light-green-0%": "rgba(0, 184, 110, 0)",
        "light-red-17%": "rgba(255, 0, 13, 0.17)",
        "light-red-0%": "rgba(161, 0, 8, 0)",
        "light-pink-17%": "rgba(255, 76, 73, 0.17)",
        "light-pink-0%": "rgba(245, 69, 66, 0)",
        "light-yellow-17%": "rgba(255, 152, 0, 0.17)",
        "light-yellow-0%": "rgba(245, 172, 66, 0)",
        "primary-magenta-80": "#780595",

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

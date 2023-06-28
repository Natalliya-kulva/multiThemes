import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export default new class App {
    constructor() {
        this.initHandler();
        this.currentColor = 'theme-red';

    }
    initHandler() {

        $(document).ready(() => {
            const _this = this;
            $(".js-getColor").on("click", "button", function (event) {
                let color = $(this).data('color')
                let value = color !== 'dark' ? "theme-" + $(this).data('color') : 'dark'
                if (value !== _this.currentColor) {
                   if(value !== "dark") $("body").removeClass(_this.currentColor);
                    _this.currentColor = value
                    $("body").addClass(value);
                }
            })
        });
    }
}();
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from './tailwind.config.js'
// import colors from "tailwindcss/colors.js";
//
// const fullConfig = resolveConfig(tailwindConfig)
//
// export default new class App {
//     constructor() {
//         this.currentColor = 'red';
//         this.initHandler();
//
//
//     }
//
//     initHandler() {
//         this.setColor(this.currentColor)
//         const _this = this
//         $(document).ready(() => {
//             $(".js-getColor").on("click", "button", function (event) {
//                 let color = $(this).data('color')
//                 _this.setColor(color)
//             })
//         });
//     }
//     setColor(color) {
//         let colorsArr = colors[color];
//         for (let i in colorsArr) {
//             document.querySelector(".theme-red").style.setProperty(`--color-primary-${i}`, `${colorsArr[i]}`)
//         }
//     }
// }();


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'


    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,


        // Input / output Options
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: false
        }
    }
});

window.addEventListener("load", function () {
    pickr.show()
})

window.addEventListener("click", function () {
    pickr.show()
})
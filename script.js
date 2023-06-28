let currentColor = 'theme-red';{
    $(document).ready(() => {
        const _this = this;
        $(".js-getColor").on("click", "button", function (event) {
            let color = $(this).data('color')
            let value = color !== 'dark' ? "theme-" + $(this).data('color') : 'dark'
            if (value !== _this.currentColor) {
                if (value !== "dark") $("body").removeClass(currentColor);
                currentColor = value
                $("body").addClass(value);
            }
        })
    });
}

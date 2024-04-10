$(".user-card__avatar").on("click", function(){
    const duration = 300;
    container = $(this).closest(".user-card-opened");
    if (!container){
        throw new Error(".user-card-opened not found (user-card-animation.js)");
    }
    container.animate({
        opacity: 1,
        padding: "8px",
        top: "-8px",
        right: "-8px"
    }, duration, 'swing');
    text = container.find(".user-card__text");
    if (!text) {
        throw new Error(".user-card__text not found in .user-card-opened > .user-card (user-card-animation.js)");
    }
    width = text.css("width").slice(0, -2);
    width = parseFloat(width) + 8;
    console.log(parseFloat(width) + 8);
    text.css("width", "0");
    text.css("display", "flex");
    text.animate({
        width: width + "px",
        opacity: 1,
        'padding-left': "12px"
    }, duration, 'swing');

})

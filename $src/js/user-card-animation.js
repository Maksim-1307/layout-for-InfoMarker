function open_user_card(container){
    const duration = 300;
    text = container.find(".user-card__text");
    if (!text) {
        throw new Error(".user-card__text not found in .user-card-opened > .user-card (user-card-animation.js)");
    }
    container.animate({
        opacity: 1,
        padding: "8px",
        top: "-8px",
        right: "-8px"
    }, duration, 'swing');
    width = text.css("width").slice(0, -2);
    width = parseFloat(width) + 8;
    text.css("width", "0");
    text.css("display", "flex");
    text.animate({
        width: width + "px",
        opacity: 1,
        'padding-left': "12px"
    }, duration, 'swing');
    container.attr('state', 'opened');
}

function close_user_card(container) {
    const duration = 300;
    text = container.find(".user-card__text");
    if (!text) {
        throw new Error(".user-card__text not found in .user-card-opened > .user-card (user-card-animation.js)");
    }
    container.animate({
        opacity: 0,
        padding: "0px",
        top: "0px",
        right: "0px"
    }, duration, 'swing');
    width = text.css("width").slice(0, -2);
    width = parseFloat(width - 8);
    text.animate({
        width: "0px",
        opacity: 0,
        'padding-left': "0px"
    }, duration, 'swing', function(){
        text.css("display", "none");
        text.css("width", width);
    });

    container.attr('state', 'closed');
}


$(".user-card__avatar").on("click", function(){

    if (parseFloat($('body').css('width').slice(0, -2)) >= 600) return;

    container = $(this).closest(".user-card-opened");
    if (!container){
        throw new Error(".user-card-opened not found (user-card-animation.js)");
    }
    if ($(container).is(':animated')) return;

    state = container.attr('state');
    if (state == 'opened'){
        close_user_card(container);
    } else if (state == 'closed'){
        open_user_card(container);
    }

})

$(window).on('resize', function(){
    nice_border();
});
$(function(){
    nice_border();
});

function rm_px(value, toFloat){
    if (toFloat){
        return parseFloat(rm_px(value));
    } else {
        return Math.round(rm_px(value));
    }
}

function rm_px(value){
    return value.slice(0, -2);
}

function nice_border(){
    $('.nice-border').each(function(){

        $(this).append("\
        <div class='nice-border__element'>\
            <div class='nice-border__top'>\
                <div class='nice-border__edge'></div>\
                <div class='nice-border__horizontal'></div>\
                <div class='nice-border__edge'></div>\
            </div>\
            <div class='nice-border__middle'>\
                <div class='nice-border__vertical'></div>\
                <div class='nice-border__vertical'></div>\
            </div>\
            <div class='nice-border__bottom'>\
                <div class='nice-border__edge'></div>\
                <div class='nice-border__horizontal'></div>\
                <div class='nice-border__edge'></div>\
            </div>\
        </div>");

        borderWidth = 3;
        element = $(this).find('.nice-border__element');
        width = parseFloat($(this).css("width").slice(0, -2)) + borderWidth * 2;
        height = parseFloat($(this).css("height").slice(0, -2)) + borderWidth * 2;
        element.css({
            "top" : -borderWidth + "px",
            "left": -borderWidth + "px",
            "width":  width + "px",
            "height":  height + "px",
        });

        i = 0;
        $('.nice-border__edge').each(function(){
            rotate = 0;
            switch(i % 4){
                case 0: rotate = 0;
                case 1: rotate = 90;
                case 2: rotate = 270;
                case 3: roatte = 180;
            }
            $(this).css("transform", "rotate(" + (90 * (i%4)) + "deg)")
            i++;
        });

        const lineLen = 40.0; // width gap
        $('.nice-border__horizontal').each(function(){
            $(this).empty();
            width = $(this).css('width');
            linesCount = Math.round(rm_px(width, true) / lineLen);
            $(this).append(('<div class="nice-border__h-line"></div>').repeat(linesCount));
        });
        $('.nice-border__vertical').each(function () {
            $(this).empty();
            height = $(this).css('height');
            linesCount = Math.round(rm_px(height, true) / lineLen);
            $(this).append(('<div class="nice-border__v-line"></div>').repeat(linesCount));
        });
    })
}
const spans = document.querySelectorAll('h1 span');
const spans2 = document.querySelectorAll('h2 span');


//greeting 
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

//about me text //myskills text
spans2.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))

spans2.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))




/* navbar color */


$(window).scroll(function () {

    if ($(window).scrollTop() > 100)
        $("nav").css({
            "background-color": "rgba(0,0,0,.5)"
        });

    else
        $("nav").css({
            "background-color": "rgb(15, 14, 14)"
        });

});



// bars mouseover
$("section .p-85").mouseover(function () {
    $("#css").hide();
})


$("section .p-85").mouseleave(function () {
    $("#css").show();
})


$("section .p-95").mouseover(function () {
    $("#html").hide();
})


$("section .p-95").mouseleave(function () {
    $("#html").show();
})



$("section .p-80").mouseover(function () {
    $("#bootstrap").hide();
})


$("section .p-80").mouseleave(function () {
    $("#bootstrap").show();
})



$("section .p-75").mouseover(function () {
    $("#javascript").hide();
})


$("section .p-75").mouseleave(function () {
    $("#javascript").show();
})


$("section #brown").mouseover(function () {
    $("#jquery").hide();
})


$("section #brown").mouseleave(function () {
    $("#jquery").show();
})


$("section #brown2").mouseover(function () {
    $("#python").hide();
})


$("section #brown2").mouseleave(function () {
    $("#python").show();
})


$("section .p-50").mouseover(function () {
    $("#django").hide();
})


$("section .p-50").mouseleave(function () {
    $("#django").show();
})
// bars mouseover end


 
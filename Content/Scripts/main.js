$(document).ready(function () {
    setTimeout(function () {
        $(".orange").hover(function () {
            $(".middle").toggleClass("orange");
        });

        $(".blue").hover(function () {
            $(".middle").toggleClass("blue");
        });

        $(".green").hover(function () {
            $(".middle").toggleClass("green");
        });

    }, 100);
});
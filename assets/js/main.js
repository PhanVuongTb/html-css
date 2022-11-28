$(function () {
    //===== AOS Animation =====//
    AOS.init({
        duration: 800,
    });

    //===== Scroll Sticky Mernu =====//
    window.addEventListener("scroll", () => {
        $(".header").toggleClass("sticky", window.scrollY > 0);
    });

    //===== Click Show Menu =====//
    $(".header__menu-button").click(() => {
        $(".header__menu-list").toggleClass("show");
        $(".header__overlay").addClass("overlay");
        $("body").addClass("overflow-hidden");
    });
    $(".header__overlay").click(() => {
        $(".header__menu-list").removeClass("show");
        $(".header__overlay").removeClass("overlay");
        $("body").removeClass("overflow-hidden");
    });

    //===== Click Scroll =====//
    $(".list__item-link").click(function (e) {
        var href = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(href).offset().top,
            },
            "1000"
        );
        e.preventDefault();
    });
});

var winWidth = $(window).width();
var winHeight = $(window).height();

function relatedProductSlider() {
    try {
        var relatedProductSlider = new Swiper('.related-product-slider', {
            slidesPerView: "auto",
            spaceBetween: 30,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: ".swiper-pagination"
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}


function shopForOfficeSlider() {
    try {
        if (winWidth < 767) {
            var shopForOfficeSlider = new Swiper('.shop-for-office-slider', {
                slidesPerView: "auto",
                spaceBetween: 15,
            });
        }
    } catch (error) {
        console.log(error);
    }
}

function productTypeSlider() {
    try {
        productTypeSlider = new Swiper('.product-type-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            nextButton: ".product-type .swiper-button-next",
            prevButton: ".product-type .swiper-button-prev",
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function trendingDealsSlider() {
    try {
        trendingDealsSlider = new Swiper(' .trending-deals-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function beachWrapsSlider() {
    try {
        beachWrapsSlider = new Swiper(' .beach-wrap-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function seasonalCollectionsSlider() {
    try {
        seasonalCollectionsSlider = new Swiper('.seasonal-collections-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}


function shopByBrandSlider() {
    try {
        shopByBrandSlider = new Swiper('.shop-by-brand-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function setBg() {
    try {
        $(".set-bg").each(function () {
            var currentImg = $(this).find(".fetch-img-src")[0];
            var currentImgPath = currentImg.currentSrc;
            $(this).css("background-image", "url(" + currentImgPath + ")");
        });
    } catch (error) {
        console.log(error);
    }
}

function bestSellingBedsheetSlider() {
    try {
        bestSellingBedsheetSlider = new Swiper('.best-selling-bedsheets-slider', {
            slidesPerView: "auto",
            spaceBetween: 30,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function openSearch() {
    try {
        $(".search-wrap .search-btn").click(function () {
            $(".search-wrap").addClass("active");
            if (winWidth < 768) {
                $("html").addClass("disable-scroll");
            }
        })

        $(".search-wrap .close-search").click(function () {
            $(".search-wrap").removeClass("active");
            $("html").removeClass("disable-scroll");
        })


        $(document).on("mouseup", function (e) {
            var container = $(".search-wrap");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.removeClass("active");
            }
        });

    } catch (error) {
        console.log(error);
    }
}


function footerLinkAcc() {
    try {
        if (winWidth < 767) {
            $(".cp-footer .accord-cont .title").click(function () {
                var accList = $(this).next(".list");
                var accListParent = $(this).closest(".accord-cont");
                if (accListParent.hasClass("active")) {
                    accList.slideUp();
                    accListParent.removeClass("active");
                }
                else {
                    $(".cp-footer .accord-cont .list").slideUp();
                    $(".cp-footer .accord-cont").removeClass("active");
                    accList.slideDown();
                    accListParent.addClass("active");
                }
            })
        }

    } catch (error) {
        console.log(error);
    }
}

function openCloseMenu() {
    try {
        $(".hamburger-menu").click(function () {
            $(".bs-nav").addClass("active");
            $("html").addClass("disable-scroll");
        })

        $(".close-menu").click(function () {
            $(".bs-nav").removeClass("active");
            $("html").removeClass("disable-scroll");
        })

        $(".arrow").click(function () {
            var parentDiv = $(this).closest(".parent");
            parentDiv.find(".submenu").slideToggle();
        })

    } catch (error) {
        console.log(error);
    }
}


function selectionSlider() {
    try {
        selectionSlider = new Swiper('.selection-slider', {
            slidesPerView: 2,
            spaceBetween: 15,
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: "auto",
                    spaceBetween: 15,
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function pollHideShow() {
    try {
        $(".clck").click(function () {
            $(".cp-your-poll").addClass("active");
        })
    } catch (error) {
        console.log(error);
    }
}

$(function () {
    if ($(".related-product-slider").length) {
        relatedProductSlider();
    }
    if ($(".set-bg").length) {
        setBg();
    }
    if ($(".best-selling-bedsheets-slider").length) {
        bestSellingBedsheetSlider();
    }
    if ($(".seasonal-collections-slider").length) {
        seasonalCollectionsSlider()
    }
    if ($(".shop-by-brand-slider").length) {
        shopByBrandSlider()
    }
    if ($(".hamburger-menu").length) {
        openCloseMenu();
    }

    if ($(".product-type-slider").length) {
        productTypeSlider();
    }

    if ($(".trending-deals-slider").length) {
        trendingDealsSlider();
    }
    if ($(".search-wrap").length) {
        openSearch()
    }
    if ($(".cp-footer .title").length) {
        footerLinkAcc();
    }
    if ($(".shop-for-office-slider").length) {
        shopForOfficeSlider();
    }

    if ($(".selection-slider").length) {
        selectionSlider()
    }
    if ($(".cp-your-poll").length) {
        pollHideShow();
    }
    if ($(".beach-wrap-slider").length) {
        beachWrapsSlider()

    }

});



var defaultScrollPos, currentScrollTop = 0,
    header = $('.cp-header');
var headerHeight = header.height();
//$("body").css("padding-top", "0");

// $("body").css("padding-top", headerHeight);

$(window).scroll(function (event) {
    var scrollPos = $(window).scrollTop();

    currentScrollTop = scrollPos;

    if (defaultScrollPos < currentScrollTop) {
        if (scrollPos > headerHeight) {
            console.log("scroll-down");
            header.addClass("scroll-up");
            header.removeClass("scroll-down");
        }

    } else {
        console.log("scroll-up");

        if (scrollPos < winHeight) {
            header.addClass("scroll-up");
            header.removeClass("scroll-down");
            if (scrollPos < (winHeight - 100)) {
                console.log("winHeight - 40");
                header.removeClass("fixed-header scroll-up scroll-down");
            }
        }
        else {
            header.addClass("scroll-down fixed-header");
            header.removeClass("scroll-up");
        }

    }
    defaultScrollPos = currentScrollTop;
});



// $(window).scroll(function (event) {
//     var scrollPos = $(window).scrollTop();
//     // var headerHeight = header.height();
//     // console.log(headerHeight + " --- " + scrollPos);

//     currentScrollTop = scrollPos;
//     if (scrollPos > headerHeight) {
//         header.addClass("scroll-up");
//     }
//     else {
//         header.removeClass("scroll-down scroll-up");
//     }

//     // if (scrollPos <= (headerHeight * 2)) {
//     // header.removeClass("fixed-header scroll-up scroll-down");
//     // }

//     if (defaultScrollPos < currentScrollTop && scrollPos > winHeight) {
//         console.log("scroll-down")
//         header.removeClass("scroll-down");
//     } else if (defaultScrollPos > currentScrollTop && !(scrollPos <= winHeight)) {

//         console.log("scroll-up", scrollPos, ":", winHeight)
//         header.addClass("scroll-down fixed-header");
//         // header.removeClass("scroll-up");
//     } else if (defaultScrollPos > currentScrollTop && scrollPos <= winHeight) {
//         header.removeClass("scroll-down ");
//         setTimeout(function () {
//             header.removeClass("scroll-up fixed-header");
//         }, 500)
//     }
//     defaultScrollPos = currentScrollTop;

//     // if (scrollPos < winHeight) {
//     // console.log(scrollPos + " < " + winHeight);
//     // header.addClass("scroll-up fixed-header");
//     // header.removeClass("scroll-down ");
//     // }
// });
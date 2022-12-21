$(document).ready(function () {
    $('.latest-items-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1900,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    });

    // About -- about-items

    $(".large-tab ul li").click(function (event) {
        event.preventDefault();
        $(".large-tab .panes").show();
        var i = $(this).index(i);
        $(".large-tab ul li").removeClass("active");
        $(".bottom ul li").removeClass("active");
        $(this).addClass("active");
        $(".large-tab .panes .pane").hide();
        $(".large-tab .panes .pane").eq(i).show();
    });

    $(".mobile-tab-block .title").click(function () {
        if ($(this).hasClass("active")) {
        } else {
            $(".mobile-tab-block").removeClass("active");
            $(this).parent(".mobile-tab-block").addClass("active");
            $(".mobile-tab-contant").slideUp();
            $(this).next(".mobile-tab-contant").stop(true, false).slideToggle();
            var targetOffset = $(".mobile-tab-block .title").offset().top - 200;
            $('html, body').animate({ scrollTop: targetOffset }, 1000);
        }
    });


    // Contact-us 

    $(".main-section__tabs li").click(function (event) {
        event.preventDefault();
        $(".sub-section__panes").show();
        var i = $(this).index(i);
        $(".main-section__tabs li").removeClass("active");
        $(this).addClass("active");
        $(".sub-section__panes .pane").hide();
        $(".sub-section__panes .pane").eq(i).show();
    });

    // services--section

    $(".mainServices-section__tabs div").click(function (event) {
        event.preventDefault();
        $(".sub-section__line").show();
        var i = $(this).index(i);
        $(".mainServices-section__tabs div").removeClass("active");
        $(this).addClass("active");
        $(".sub-section__line .bodyLine").hide();
        $(".sub-section__line .bodyLine").eq(i).show();
    });

    // laws-section

    $(".mainLaws-tabs div").click(function (event) {
        event.preventDefault();
        $(".sub-laws__line").show();
        var h = $(this).index(h);
        $(".mainLaws-tabs div").removeClass("active");
        $(this).addClass("active");
        $(".sub-laws__line .bodyLine").hide();
        $(".sub-laws__line .bodyLine").eq(h).show();
    });

    // ministry-definition

    $(".mainDefinition-tabs div").click(function (event) {
        event.preventDefault();
        $(".sub-definition__line").show();
        var h = $(this).index(h);
        $(".mainDefinition-tabs div").removeClass("active");
        $(this).addClass("active");
        $(".sub-definition__line .bodyLine").hide();
        $(".sub-definition__line .bodyLine").eq(h).show();
    });
});



var toTop = 0;
function autoPlay() {
    timer = setTimeout(function () {
        var row = document.getElementById('row');
        toTop = toTop - 350;
        if (toTop < -350) {
            toTop = 0;
            clearTimeout(timer);
            row.onmouseover = clearTimeout(timer);
        }
        row.style.top = toTop + 'px';
        autoPlay();
    }, 3000);
}
autoPlay();





$(function () {
    var siteSticky = function () {
        $(".js-sticky-header").sticky({ topSpacing: 0 });
    };
    siteSticky();

    var siteMenuClone = function () {

        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        // setTimeout(function () {
        //     var counter = 0;
        //     $('.site-mobile-menu .has-children').each(function () {
        //         var $this = $(this);
        //         $this.prepend('<span class="arrow-collapse collapsed">');
        //         $this.find('.arrow-collapse').attr({
        //             'data-toggle': 'collapse',
        //             'data-target': '#collapseItem' + counter,
        //         });
        //         $this.find('> ul').attr({
        //             'class': 'collapse',
        //             'id': 'collapseItem' + counter,
        //         });
        //         counter++;
        //     });
        // }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();

});


// pagination 

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("div");

const paginationLimit = 7;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    handleActivePageNumber();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});

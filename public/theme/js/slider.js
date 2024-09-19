
/* <div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div> 

var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

*/
var click = {
    showMenu: function () {
        var buttonShowMenu = Tech.$(".show-menu-mobile");
        var closeMenu = Tech.$(".over-lay");
        if (typeof buttonShowMenu != "undefined") {
            buttonShowMenu.onClick(function () {
                Tech.$(".menu").toggleClass("active");
                // Tech.$('body,html').toggleClass('show-menu');
                Tech.$(".over-lay").toggleClass("active");
                Tech.$(this).toggleClass("active");
            });
        }
        if (typeof closeMenu != "undefined") {
            closeMenu.onClick(function () {
                Tech.$(".menu").removeClass("active");
                // Tech.$('body,html').toggleClass('show-menu');
                Tech.$(".over-lay").removeClass("active");
                Tech.$(".show-menu-mobile").removeClass("active");
            });
        }
        var width_ = window.innerWidth;
        if (width_ >= 1280) {
            if (Tech.$(".menu") == undefined || Tech.$(".menu") == null) return;
            var listIitemLi = Tech.$(".menu").find("li");
            listIitemLi.forEach(function (element, index) {
                if (element.find(":scope > ul").length() > 0) {
                    element.append(
                        `<span class="btn-dropdown-menu"><i class="fa-solid fa-caret-down"></i></span>`
                    );
                    element.css("padding-right", "20px");
                }
            });
        }
        if (width_ < 1280) {
            var listIitemLi = Tech.$(".menu").find("li");
            listIitemLi.forEach(function (element, index) {
                if (element.find(":scope > ul").length() > 0) {
                    element.append(
                        `<span class="btn-dropdown-menu"><i class="fa-solid fa-caret-down"></i></span>`
                    );
                    // element.onClick(function() {
                    //     var a = Tech.$(this).find(":scope > a");
                    //     var href = a._element[0]._element.getAttribute('href')
                    //     if (href === 'javascript:void(0)' || href === "" || href === "/") {
                    //         a.next("ul").toggleSlide(300);
                    //         Tech.$(this).toggleClass('open');
                    //     }
                    // })
                    var a = element.find(":scope > a");
                    var href = a._element[0]._element.getAttribute("href");
                    a.onClick(function (e) {
                        e.preventDefault();
                        Tech.$(this).next("ul").toggleSlide(300);
                        Tech.$(this).next().next().toggleClass("open");
                    });
                }
            });
            // var listBtnDropdownMenu =
            //     Tech.$(".menu").find(".btn-dropdown-menu");
            // var timeSlide = 300;
            // listBtnDropdownMenu.onClick(function(event) {
            //     var _this = Tech.$(this);
            //     _this.css("pointer-events", "none");
            //     setTimeout(function() {
            //         _this.css("pointer-events", "all");
            //     }, timeSlide);
            //     // var parentLi = Tech.$(this.closest('li'));
            //     var listUlChild = Tech.$(this).prev("ul");
            //     _this.toggleClass("open");
            //     listUlChild.toggleSlide(timeSlide);
            // });
        }
    },
}


var swiper_slide_banner = new Swiper(".slide_banner", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

var athur = new Swiper(".athur", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".a-pagination",
        clickable: true,
    },
})


var partner_0 = new Swiper(".partner_0", {
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 8
        },
        576: {
            slidesPerView: 4,
            spaceBetween: 8
        },
        991: {
            slidesPerView: 6,
            spaceBetween: 8
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 16
        }
    },
    navigation: {
        nextEl: ".partner__next-0",
        prevEl: ".partner__prev-0",
    },
});

var partner_1 = new Swiper(".partner_1", {
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 8
        },
        576: {
            slidesPerView: 4,
            spaceBetween: 8
        },
        991: {
            slidesPerView: 6,
            spaceBetween: 8
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 16
        }
    },
    navigation: {
        nextEl: ".partner__next-1",
        prevEl: ".partner__prev-1",
    },
});

var slide_certifi = new Swiper(".slide_certifi", {
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 8
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 8
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    },
    pagination: {
        el: ".certifi-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".certifi__next",
        prevEl: ".certifi__prev",
    },
});

var slide_publications = new Swiper(".slide_publications", {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 8
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 16
        }
    },
    pagination: {
        el: ".publications-pagination",
        clickable: true,
    },
});

var slide_new__index = new Swiper(".slide_new__index", {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 8
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    },
});

// var swiper = new Swiper(".mySwiper", {
//     autoplay: {
//         delay: 6000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".button-next",
//         prevEl: ".button-prev",
//     },
// on: {
//     // Kiểm tra khi Swiper khởi tạo
//     init: function () {
//         updateNavigation(this);
//     },
//     // Kiểm tra khi Swiper thay đổi slide
//     slideChange: function () {
//         updateNavigation(this);
//     }
// }
// });
// function updateNavigation(swiper) {
//     const nextButton = document.querySelector('.button-next');
//     const prevButton = document.querySelector('.button-prev');

//     // Ẩn nút prev nếu đang ở slide đầu tiên
//     if (swiper.isBeginning) {
//         prevButton.style.display = 'none';
//     } else {
//         prevButton.style.display = 'flex';
//     }
//     // Ẩn nút next nếu đang ở slide cuối cùng
//     if (swiper.isEnd) {
//         nextButton.style.display = 'none';
//     } else {
//         nextButton.style.display = 'flex';
//     }
// }




// tab item INTRODUCTION
const IntroduceBtn = document.querySelectorAll('.module-child');
const moduleInfor = document.querySelectorAll('.module-infor');
IntroduceBtn.forEach(function (BtnChild, X) {
    BtnChild.addEventListener('click', function (e) {
        IntroduceBtn.forEach(a => a.classList.remove('active'));
        BtnChild.classList.add('active');
        moduleInfor.forEach(a => a.classList.remove('flex'));
        moduleInfor.forEach(a => a.classList.add('hidden'));
        moduleInfor[X].classList.add('flex');
        moduleInfor[X].classList.remove('hidden');
    })
})


// tab item section-form-register
const Form_Btn = document.querySelectorAll('.tablinks');
const formInfor = document.querySelectorAll('.tab-content');
Form_Btn.forEach(function (Btn_tab, X) {
    Btn_tab.addEventListener('click', function (e) {
        Form_Btn.forEach(a => a.classList.remove('active'));
        Btn_tab.classList.add('active');
        formInfor.forEach(a => a.classList.remove('flex'));
        formInfor.forEach(a => a.classList.add('hidden'));
        formInfor[X].classList.add('flex');
        formInfor[X].classList.remove('hidden');
    })
})
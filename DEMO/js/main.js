// alert('connect success')

$(window).scroll(function () {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
})

// animate gioi thieu sach
let nCount = selector => {
    $(selector).each(function () {
        console.log($(this).text())
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                console.log(value)
                $(this).text(Math.ceil(value))
            }
        })
    })
}

let position = 0;
$(window).scroll(function () {
    let oTop = $('.numbers').offset().top - window.innerHeight
    if(position == 0 && $(window).scrollTop() >= oTop) {
        position++;
        nCount(".rect > h1")
    }
})

// search
const searchWrapper = document.querySelector(".search-container");
const closeBtn = document.querySelector(".fa-times");

searchWrapper.addEventListener("click", () => {
    searchWrapper.classList.add("active");
});
closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    searchWrapper.classList.remove("active");
});
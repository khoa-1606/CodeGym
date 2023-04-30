// alert('connect success')

// $(window).scroll(function () {
//     let oTop = $('.section-2').offset().top - window.innerHeight;
//     if ($(window).scrollTop() > oTop) {
//         $('.navbar').addClass('sticky');
//     } else {
//         $('.navbar').removeClass('sticky');
//     }
// })

// animate gioi thieu sach
// let nCount = selector => {
//     $(selector).each(function () {
//         console.log($(this).text())
//         $(this).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 4000,
//             easing: "swing",
//             step: function (value) {
//                 console.log(value)
//                 $(this).text(Math.ceil(value))
//             }
//         })
//     })
// }

// let position = 0;
// $(window).scroll(function () {
//     let oTop = $('.numbers').offset().top - window.innerHeight
//     if(position == 0 && $(window).scrollTop() >= oTop) {
//         position++;
//         nCount(".rect > h1")
//     }
// })

// search
// const searchWrapper = document.querySelector(".search-container");
// const closeBtn = document.querySelector(".fa-times");

// searchWrapper.addEventListener("click", () => {
//     searchWrapper.classList.add("active");
// });
// closeBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     searchWrapper.classList.remove("active");
// });


// zoom
let zoom = document.querySelector('.zoom');
let imgZoom = document.getElementById('imgZoom');
zoom.addEventListener('mousemove', (event)=>{
    imgZoom.style.opacity = 1;
    let positionPx = event.x - zoom.getBoundingClientRect().left;
    let positionX = (positionPx / zoom.offsetWidth) * 100;

    let positionPy = event.y - zoom.getBoundingClientRect().top;
    let positionY = (positionPy / zoom.offsetHeight) * 100;

    imgZoom.style.setProperty('--zoom-x', positionX + '%');
    imgZoom.style.setProperty('--zoom-y', positionY + '%');

    let transformX = -(positionX - 50) / 3.5;
    let transformY = -(positionY - 50) / 3.5;

})
zoom.addEventListener('mouseout', (event)=>{
    imgZoom.style.opacity = 0;
})
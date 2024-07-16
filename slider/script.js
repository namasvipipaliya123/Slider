let allslider = [
    {
        src:"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=1920&h=1080",
        name: "Nike",
    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY6P_A7V2vxJ40BtSeUjMVOxV6y-_jcfAFw&s",
        name: "Puma",
    },
    {
        src:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/jqr/SKYPE-LGRY-DGRY/0/QqjH1mHGG_-CLQ_9831.jpg",
        name: "JQR",
    },
    {
        src:"https://images.jdmagicbox.com/quickquotes/images_main/bata-mens-footwear-24-09-2020-1342-210348124-tnpv5.jpeg",
        name: "Bata",
    },
    {
        src:"https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw5ab426e1/Category-Landing/Category-Mobile/Mens-New/Mobile_Men_Lace-Ups.jpg?sw=780&q=95",
        name: "Skechers",
    },
    {
        src:"https://images-cdn.ubuy.co.id/634f526b76ef8361c1584e31-mens-reebok-bb4600-athletic-shoes-size.jpg",
        name: "Reebook",
    },
]


allslider.forEach((val , index) => {
    let slider = document.getElementById("slider");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let par = document.createElement("h3");

    img.src = val.src;
    par.innerHTML = val.name;
    div.classList.add("slide")
    par.className = "text"


    div.append(img);
    div.append(par);
    slider.append(div);
})
function Slider() {

    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();
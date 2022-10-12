const imgList = [
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp",
];

const carousel = document.querySelector('.my_carousel');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let active = 0;

for (let i = 0; i < imgList.length; i++) {
    const listEl = imgList[i];
    const image = `<img class="${(i === 0) ? 'active' : ''}" src=${listEl} alt="">`;
    carousel.insertAdjacentHTML('beforeend', image);
}

nextButton.addEventListener('click', function () {
    const allImage = document.querySelectorAll('img');
    const elementActive = allImage[active];
    elementActive.classList.remove("active");
    if (active===4){
        active = 0
    }else{
        active++;  
    }
    allImage[active].classList.add('active');
    
});

prevButton.addEventListener('click', function () {
   
    const allImage = document.querySelectorAll('img');
    const elementActive = allImage[active];
    elementActive.classList.remove("active");
    if (active===0){
        active = 4
    }else{
        active--;  
    }
  
    allImage[active].classList.add('active');
});



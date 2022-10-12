const imgList =[
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp",
];

const carousel = document.querySelector('.my_carousel');

for (let i = 0; i < imgList.length; i++) {
    const listEl = imgList[i];
    const image = `<img class="${(i===0) ? 'active' : ''}" src=${listEl} alt="">`;
    carousel.insertAdjacentHTML('beforeend', image);
}



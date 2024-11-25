
let nextDom = document.getElementById('next'); 
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listitemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
};
prevDom.onclick = function() {
    showSlider('prev');
};

let timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item'); // Fixed selector

    if (type === 'next') {
        listitemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listitemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);
}

// Scale up thumbnail on click
document.querySelectorAll('.carousel .thumbnail .item').forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        thumbnail.classList.toggle('scaled');
    });
});

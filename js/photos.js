const next = document.getElementById("next");
const prev = document.getElementById("prev");
const photo = document.getElementById("photo");
const desc = document.getElementById("desc");
const imgs = document.querySelectorAll(".img");


const arr = [
    {
    photo: '../img/no-logo.jpg',
    desc: 'Отсутствие картинки.'
    },
    {
    photo: '../img/mot1.jpg',
    desc: 'Тут есть мотор.'
    },
    {
    photo: '../img/mot2.jpg',
    desc: 'Красивый моторчик.'
    },
    {
    photo: '../img/mot3.jpg',
    desc: 'Красный прикольный моторчик.'
    },
    {
    photo: '../img/mot4.jpg',
    desc: 'Много всякого...'
    },
    {
    photo: '../img/mot5.jpg',
    desc: 'ОЧень красиво.'
    },
    {
    photo: '../img/mot6.jpg',
    desc: 'Как он сюда попал?'
    },
    {
    photo: '../img/mot7.jpg',
    desc: 'Будто бы из стекла.'
    },
];

const all = arr.length;

let currentItem = 0;

prev.onclick = function() {
    currentItem--;
    if (currentItem < (arr.length - arr.length)) {
    currentItem = (all - 1);
    }
    showElement(currentItem);

};

setInterval(next.onclick = function() {
    currentItem++;
    if (currentItem > arr.length - 1) {
        currentItem = 0;
    }
    showElement(currentItem);
}, 10000);

function showElement(person) {
    photo.src = arr[currentItem].photo;
    desc.innerHTML = arr[currentItem].desc;
};

let t = 0;
setTimeout(imgs.forEach(function() {
    imgs[t].src = arr[t].photo;
    t++;
}), 0);

for (let r = 0; r < imgs.length; r++) {
    imgs[r].onclick = function() {
        photo.src = arr[r].photo;
        desc.innerHTML = arr[r].desc;
    }
}
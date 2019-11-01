const filter = document.querySelector('#filterShow');
const button = document.querySelector('.filterenShow');
const toon = document.querySelector('#toon');
const sluit = document.querySelector('#sluit');

button.addEventListener('click', function () {
    filter.classList.toggle('show');
    toon.classList.toggle('show');
    sluit.classList.toggle('show');

});

//const likeKnop = document.querySelector('#filterShow');
//
//
//button.addEventListener('click', function () {
//    filter.classList.toggle('show');
//    toon.classList.toggle('show');
//    sluit.classList.toggle('show');
//
//});

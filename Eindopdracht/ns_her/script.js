/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

const filter = document.querySelector('#filterShow');
const button = document.querySelector('.filterenShow');
const toon = document.querySelector('#toon');
const sluit = document.querySelector('#sluit');

button.addEventListener('click', function () {
    filter.classList.toggle('show');
    toon.classList.toggle('show');
    sluit.classList.toggle('show');

});


//
//var zoekveld = document.querySelector('.searchbar');
//var zoekbutton = document.querySelector('.zoekknoppie');
//var zoeklabel = document.querySelector('figcaption');
//
//function show() {
//    zoekveld.classList.toggle('show-search');
//    if (zoekveld.classList.contains('show-search')) {
//        showClose();
//    } else {
//        showSearch();
//    }
//}

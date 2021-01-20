let btn = document.querySelector('.ownproj__request');
let pop = document.querySelector('.popup');
let btn2 = document.querySelector('.ownproj__btn');
let btnClose = document.querySelector('.btn-close');
const body = document.querySelector('body');

btn.addEventListener('click', function() {
    pop.classList.add('open')
    body.classList.add('hidden')
});
btn2.addEventListener('click', function() {
    pop.classList.add('open')
    body.classList.add('hidden')
});
btnClose.addEventListener('click', function() {
    pop.classList.remove('open')
    body.classList.remove('hidden')
});
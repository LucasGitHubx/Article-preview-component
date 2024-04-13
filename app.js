const btn = document.querySelector('#btn');
const btnPopUp = document.querySelector('#btn-popup');
const popup = document.querySelector(".popup");

btn.addEventListener ('click', () => {
    if(popup.classList.contains('hidden')){
        popup.classList.remove('hidden'); 
    } else {
        popup.classList.add('hidden'); 
    }
});
btnPopUp.addEventListener ('click', () => {
    popup.classList.add('hidden');
});
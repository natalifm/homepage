let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');
let i = 0;

btn_prev.onclick = function () {
    images[i].className = '';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
}

btn_next.onclick = function () {
    images[i].className = '';
    i++;
    if (i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
}


let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
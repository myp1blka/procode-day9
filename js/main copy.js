const elButtonUp = document.querySelector('input[name="bUp"]');
const elButtonLeft = document.querySelector('input[name="bLeft"]');
const elButtonDown = document.querySelector('input[name="bDown"]');
const elButtonRight = document.querySelector('input[name="bRight"]');
const elMainBlock = document.querySelector('.main-block');
const elRedBlock = document.querySelector('.red-block');

const MainBlockWidth = parseInt(elMainBlock.style.width);
const MainBlockHeight = parseInt(elMainBlock.style.height);
const RedBlockWidth = parseInt(elRedBlock.style.width);
const RedBlockHeight = parseInt(elRedBlock.style.height);

elButtonUp.addEventListener('click', (ev) => {
    if (parseInt(elRedBlock.style.top) >=RedBlockHeight){
        console.log('move up');
        elRedBlock.style.top = parseInt(elRedBlock.style.top) - 100 + 'px';
    }
});
elButtonLeft.addEventListener('click', (ev) => {
    if (parseInt(elRedBlock.style.left) >= RedBlockWidth) {
        console.log('move left');
        elRedBlock.style.left = parseInt(elRedBlock.style.left) - 100 + 'px';
    }
});
elButtonDown.addEventListener('click', (ev) => {
    if (parseInt(elRedBlock.style.top) < MainBlockHeight - 100) {
        console.log('move down');
        elRedBlock.style.top = parseInt(elRedBlock.style.top) + 100 + 'px';
    }
});
elButtonRight.addEventListener('click', (ev) => {
    if (parseInt(elRedBlock.style.left) < MainBlockWidth - 100) {
        console.log('move right');
        elRedBlock.style.left = parseInt(elRedBlock.style.left) + 100 + 'px';
    }
});








document.addEventListener('keypress', (ev) => {
    console.log(ev);
});

// ArrowDown
// ArrowLeft
// ArrowRight
// ArrowUp
















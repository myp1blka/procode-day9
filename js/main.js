const elButtonUp = document.querySelector('.bUp');
const elButtonLeft = document.querySelector('.bLeft');
const elButtonDown = document.querySelector('.bDown');
const elButtonRight = document.querySelector('.bRight');
const elMainBlock = document.querySelector('.main-block');
const elRedBlock = document.querySelector('.red-block');

const MainBlockWidth = parseInt(elMainBlock.style.width);
const MainBlockHeight = parseInt(elMainBlock.style.height);
const RedBlockWidth = parseInt(elRedBlock.style.width);
const RedBlockHeight = parseInt(elRedBlock.style.height);

const moveFunction = (e) => {
    console.log(e.code);

    if (e.code === "ArrowUp" || e.target.className === 'bUp') { 
            if (parseInt(elRedBlock.style.top) >= RedBlockHeight) {
            //console.log('move up');
            elRedBlock.style.top = parseInt(elRedBlock.style.top) - 100 + 'px';
        }
    }
        
    if (e.code === "ArrowLeft" || e.target.className === 'bLeft') {
        if (parseInt(elRedBlock.style.left) >= RedBlockWidth) {
            //console.log('move left');
            elRedBlock.style.left = parseInt(elRedBlock.style.left) - 100 + 'px';
        }
    }
        
    if (e.code === "ArrowDown" || e.target.className === 'bDown') {
        if (parseInt(elRedBlock.style.top) < MainBlockHeight - 100) {
            //console.log('move down');
            elRedBlock.style.top = parseInt(elRedBlock.style.top) + 100 + 'px';
        }
    }
        
    if (e.code === "ArrowRight" || e.target.className === 'bRight') {
        if (parseInt(elRedBlock.style.left) < MainBlockWidth - 100) {
            //console.log('move right');
            elRedBlock.style.left = parseInt(elRedBlock.style.left) + 100 + 'px';
        }
    } 
};
document.addEventListener("keydown", moveFunction);
document.addEventListener("click", moveFunction);








//document.getElementsByTagName('div');

/* document.addEventListener('keypress', (ev) => {
    console.log(ev);
}); */

// ArrowDown
// ArrowLeft
// ArrowRight
// ArrowUp
















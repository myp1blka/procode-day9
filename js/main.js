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

//document.addEventListener("keydown", function (e));

document.addEventListener("click", function (e) {

    //console.log(e.target.className);

        if (e.target.className === 'bUp' && parseInt(elRedBlock.style.top) >= RedBlockHeight){
            //console.log('move up');
            elRedBlock.style.top = parseInt(elRedBlock.style.top) - 100 + 'px';
    }
    
        if (e.target.className === 'bLeft' && parseInt(elRedBlock.style.left) >= RedBlockWidth){
            //console.log('move left');
            elRedBlock.style.left = parseInt(elRedBlock.style.left) - 100 + 'px';
    }
    
        if (e.target.className === 'bDown' && parseInt(elRedBlock.style.top) < MainBlockHeight - 100){
            //console.log('move down');
            elRedBlock.style.top = parseInt(elRedBlock.style.top) + 100 + 'px';
    }
    
        if (e.target.className === 'bRight' && parseInt(elRedBlock.style.left) < MainBlockWidth - 100){
            //console.log('move right');
            elRedBlock.style.left = parseInt(elRedBlock.style.left) + 100 + 'px';
    }
     
});










//document.getElementsByTagName('div');

document.addEventListener('keypress', (ev) => {
    console.log(ev);
});

// ArrowDown
// ArrowLeft
// ArrowRight
// ArrowUp
















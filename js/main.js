const elButtonUp = document.querySelector('.bUp');
const elButtonLeft = document.querySelector('.bLeft');
const elButtonDown = document.querySelector('.bDown');
const elButtonRight = document.querySelector('.bRight');
const elMainBlock = document.querySelector('.main-block');
const elRedBlock = document.querySelector('.red-block');
const elGrayBlock1 = document.querySelector('.grey-block-1');
const elGrayBlock2 = document.querySelector('.grey-block-2');

const elPacMan = document.querySelector('.pac');

const MainBlockWidth = parseInt(elMainBlock.style.width);
const MainBlockHeight = parseInt(elMainBlock.style.height);
const RedBlockWidth = parseInt(elRedBlock.style.width);
const RedBlockHeight = parseInt(elRedBlock.style.height);
const GrayBlock1Top = parseInt(elGrayBlock1.style.top);
const GrayBlock1Left = parseInt(elGrayBlock1.style.left);
const GrayBlock2Top = parseInt(elGrayBlock2.style.top);
const GrayBlock2Left = parseInt(elGrayBlock2.style.left);

const moveFunction = (e) => {
    //console.log(e.code);

    let RedBlockTop = parseInt(elRedBlock.style.top);
    let RedBlockLeft = parseInt(elRedBlock.style.left);

    if (e.code === "ArrowUp" || e.target.className === 'bUp') { 
        if (RedBlockTop >= RedBlockHeight) { 
            if (RedBlockTop - 100 == GrayBlock1Top && RedBlockLeft == GrayBlock1Left)
                {console.log('Monstro1');}
            else if (RedBlockTop - 100 == GrayBlock2Top && RedBlockLeft == GrayBlock2Left)
                {console.log('Monstro2');}
            else
            {
                elRedBlock.style.top = RedBlockTop - 100 + 'px';
                elPacMan.style.transform = "rotate(270deg)";
            }
        }
    }
        
    if (e.code === "ArrowLeft" || e.target.className === 'bLeft') {
        if (RedBlockLeft >= RedBlockWidth) { 
            if (RedBlockTop == GrayBlock1Top && RedBlockLeft - 100 == GrayBlock1Left)
                {console.log('Monstro1');}
            else if (RedBlockTop == GrayBlock2Top && RedBlockLeft - 100 == GrayBlock2Left)
                {console.log('Monstro2');}
            else
            {
                elRedBlock.style.left = RedBlockLeft - 100 + 'px';
                elPacMan.style.transform = "scaleX(-1)";
            }
        }
    }
        
    if (e.code === "ArrowDown" || e.target.className === 'bDown') {
        if (RedBlockTop < MainBlockHeight - 100) { 
            if (RedBlockTop + 100 == GrayBlock1Top && RedBlockLeft == GrayBlock1Left)
                {console.log('Monstro1');}
            else if (RedBlockTop + 100 == GrayBlock2Top && RedBlockLeft == GrayBlock2Left)
                {console.log('Monstro2');}
            else
            {
                elRedBlock.style.top = RedBlockTop + 100 + 'px';
                elPacMan.style.transform = "rotate(90deg)";
            }
        }
    }
        
    if (e.code === "ArrowRight" || e.target.className === 'bRight') {
        if (RedBlockLeft < MainBlockWidth - 100) { 
            if (RedBlockTop == GrayBlock1Top && RedBlockLeft + 100 == GrayBlock1Left)
                {console.log('Monstro1');}
            else if (RedBlockTop == GrayBlock2Top && RedBlockLeft + 100 == GrayBlock2Left)
                {console.log('Monstro2');}
            else
            {
                elRedBlock.style.left = RedBlockLeft + 100 + 'px';
                elPacMan.style.transform = "scaleX(1)";
            }
        }
    } 
};
document.addEventListener("keydown", moveFunction);
document.addEventListener("click", moveFunction);


















// 가장 최신에 클릭한 탭 띄우기 (나중에 구현)
// var priorC=document.getElementById("color-bar").style.z-index;
// var priorS=document.getElementById("sticker-bar").style.z-index;
// var priorI=document.getElementById("image-bar").style.z-index;


// openTab->탭 여는 함수
function openTabColor(){
    document.getElementById("color-bar").style.visibility="visible";  
}

function openTabSticker(){
    document.getElementById("sticker-bar").style.visibility="visible";
    
}

function openTabImage(){
    document.getElementById("image-bar").style.visibility="visible";
}

function openTabStickerPal(){
    document.getElementById("sticker-color-pal").style.visibility="visible";
}





// closeTab->탭 닫는 함수
function closeTabC(){
    document.getElementById('color-bar').style.visibility="hidden";
}

function closeTabS(){
    document.getElementById('sticker-bar').style.visibility="hidden";
    document.getElementById("sticker-color-pal").style.visibility="hidden";
}

function closeTabI(){
    document.getElementById('image-bar').style.visibility="hidden";
}


//창 아무 곳 눌러서 창 닫기 (나중 구현)

// const modal = document.getElementById('modal')

//Show modal
// open.addEventListener('click', () => {
//     modal.classList.add('show-modal')
// })

//Hide modal
// close.addEventListener('click', () => {
//     modal.classList.remove('show-modal')
// })




// const anywhere = document.querySelector('body');
// anywhere.addEventListener('click', ClickAnytoClose);


// function ClickAnytoClose(){
//     document.getElementById("color-bar").style.visibility="hidden";
// }
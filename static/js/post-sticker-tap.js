
//HTML 로딩이 끝난 후
// window.onload = function () {
//     initS();
//     };

let stickerfunc = function(){
    initS();
};


function initS() {
    var tagS="";
    var Sticker=["../img/Star4.png"];
    for (n=0; n<Sticker.length; n++){
        for(m=0; m<Sticker[i].length; m++){
            tagS="<img src=" + Sticker[i][j] + ">";
        }
    }
    

    document.getElementById("sticker-bar-palette").innerHTML = tagS;
}


// ball.onmousedown = function(event) {
//     // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
//     ball.style.position = 'absolute';
//     ball.style.zIndex = 1000;

//     // 현재 위치한 부모에서 body로 직접 이동하여
//     // body를 기준으로 위치를 지정합니다.
//     document.body.append(ball);

//     // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
//     function moveAt(pageX, pageY) {
//       ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//       ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
//     }
  
//     // 포인터 아래로 공을 이동시킵니다.
//     moveAt(event.pageX, event.pageY);
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
//     // (2) mousemove로 공을 움직입니다.
//     document.addEventListener('mousemove', onMouseMove);
  
//     // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
//     ball.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//       ball.onmouseup = null;
//     };
  
//   };
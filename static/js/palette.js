// main color 와 sticker 탭에 들어갈 내용물에 관한 함수

//이전에 선택된 색을 저장할 함수
var beforeColor; 

//HTML 로딩이 끝난 후
window.onload = function () {
    init();
    initStickerPal();
    initStickerBasic();
    };

    function init() {

    var palette = [
        [
            "#fff5f4", "#fde4e0", "#ffc8c7", "#fea8a7", "#ff8788",
            "#ff6b6b", "#fa5153", "#f03e3e", "#e42f2b", "#c72b2e",

            "#fff0f5", "#fcdfeb","#fcc2d8","#f8a3c2", "#f782ac",
            "#f26496", "#e64980", "#da316c", "#c0265c", "#9d254d",

            "#f8f0fd","#f4d9fa","#eebefa","#e499f6","#da78f3",
            "#cc5de8", "#c04add", "#ae3dc9", "#9d36b5", "#892d9c",

            "#f3f1ff", "#e5dbfe", "#cbbffe", "#b197fc","#9675fa",
            "#865ff8","#7951f2", "#6e49e6", "#6841da", "#5f3dc7",

            "#ecf2fe", "#dae4ff", "#bbc8ff", "#91a6ff", "#748efc",
            "#5d7cf9", "#4c6ef4", "#4264ec","#3d5ada","#364fc6",

            "#e7f5fe", "#ceebff", "#a4d8ff", "#74c0fc", "#4eabf8",
            "#349aef","#238be4","#1c7ed7","#1871c1","#1764aa",

            "#e2fafc", "#c3f7fa","#99e9f2","#65d9e8","#3cc9db",
            "#22b8d0","#15aabd","#1099ac","#0c8598","#0b7285",

            "#e7fcf5","#c4fbe8","#95f2d7","#63e6be","#37d9a8",
            "#21c998","#12b886","#0ea578","#099268","#077f5b",
        
            "#ebfbee","#d4f9d8", "#b5f2b9","#8ce999","#69db7c",
            "#51ce66","#41c057","#38b24d","#3c9d50","#288b3b",

            "#f4fce4","#e8f9cc","#d8f5a1","#c0eb75","#a8e34b",
            "#96d62f","#81c91d","#76b71c","#66a810","#5c940d",
            
            "#fef9db","#fff3bf","#fced9d","#fde067","#ffd437",
            "#fcc419","#fbb005","#f69f00","#f08c00","#e77701",
            
            "#fff4e6","#ffe8cc","#fdd9a7","#fac379","#ffa94a",
            "#ff912d","#fd7d18","#f76707","#e8590b","#d9480f",
            
            "#f8f9fb","#f2f3f5","#e8ebf0","#dfe2ea","#cfd4da",
            "#adb6bd","#868f96","#48515a","#363940","#21242d",

        ],

    ];

    //팔레트 개별 색상을 div로 묶어서 줄지어놓음
    //for루프 돌면서 html에 추가됌
    //class=paletteIndv
    var tag = "";
    for (i = 0; i < palette.length; i++) {
        for (j = 0; j < palette[i].length; j++) {
        tag +=
            "<div id=" +
            palette[i][j] +
            " class='paletteIndv' onclick='colorSet(this)'></div>";
        }
    }

    //팔레트 파싱
    document.getElementById("color-bar-palette").innerHTML = tag;

    //색상 입히기
    var paletteIndv = document.getElementsByClassName("paletteIndv");
    for (i = 0; i < paletteIndv.length; i++) {
        paletteIndv[i].style.background = paletteIndv[i].id;
    }
    }


    function colorSet(target) {
            document.querySelector(".colorBox-color").style.background = target.id;
            document.querySelector("body").style.background = target.id;

            // target.style.border = "solid 0.1vw #ffffff"

            if (beforeColor != undefined && beforeColor != null) {
                document.getElementById(beforeColor).className = document
                .getElementById(beforeColor)
                .className.replace("active", "");
                
            }
            document.getElementById(target).className += " active";
            beforeColor = target.id;

        }



function initS(){
            stickerArr=[
                "Star4","Star5","Star6",
                "Star10","Star11","Star12",
                "Star13","Star14", "Star16", 
                "Ellipse175", "Union", "Union2",
                "Union3", "Union4", "Union5",
                "Star17","Star18", "Star19", 
            ];
        
            var tag = "";
            for (n=0; n<stickerArr.length; n++){
                tag += "<img class='stickerIndv' src='" 
                + "../static/img/" + stickerArr[n] + "_emp.png'/>"
            }
        
            document.getElementById("sticker-bar-palette").innerHTML = tag;
        };



//초록 스티커
    // function greenSticker(){
    //     stickerArr=[
    //         "Star4","Star5","Star6",
    //         "Star10","Star11","Star12",
    //         "Star13","Star14", "Star16", 
    //         "Ellipse175", "Union", "Union1", 
    //         "Union2","Union3", "Union4",
    //         "Star17","Star18", "Star19", 
    //     ];

    //     var tag = "";
    //     for (n=0; n<stickerArr.length; n++){
    //         tag += "<img class='stickerIndv' src='" 
    //         + "../static/img/sticker_g/" + stickerArr[n] + "_g.png'/>"
    //     }

    //     document.getElementById("sticker-bar-palette").innerHTML = tag;
    // };



    //핑크 스티커
    // function pinkSticker(){
    //     stickerArr=[
    //         "Star4","Star5","Star6",
    //         "Star10","Star11","Star12",
    //         "Star13","Star14", "Star16", 
    //         "Ellipse175", "Union", "Union1", 
    //         "Union2","Union3", "Union4",
    //         "Star17","Star18", "Star19", 
    //     ];

    //     var tag = "";
    //     for (n=0; n<stickerArr.length; n++){
    //         tag += "<img class='stickerIndv' src='" 
    //         + "../static/img/sticker_p/" + stickerArr[n] + "_p.png'/>"
    //     }

    //     document.getElementById("sticker-bar-palette").innerHTML = tag;
    // };


        //오렌지 스티커
        // function initS(){
        //     stickerArr=[
        //         "Star4","Star5","Star6",
        //         "Star10","Star11","Star12",
        //         "Star13","Star14", "Star16", 
        //         "Ellipse175", "Union", "Union1", 
        //         "Union2","Union3", "Union4",
        //         "Star17","Star18", "Star19", 
        //     ];
    
        //     var tag = "";
        //     for (n=0; n<stickerArr.length; n++){
        //         tag += "<img class='stickerIndv' src='" 
        //         + "../static/img/sticker_o/" + stickerArr[n] + "_o.png'/>"
        //     }
    
        //     document.getElementById("sticker-bar-palette").innerHTML = tag;
        // };
//팔레트 채워넣기

function initStickerPal() {

    var s_palette = [
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

    var tag = "";
    for (i = 0; i <s_palette.length; i++) {
        for (j = 0; j < s_palette[i].length; j++) {
        tag +=
            "<div id=" +
            s_palette[i][j] +
            " class='stiColorIndv' onclick='stickerColorSet"+
            [j]+ "()'></div>";
        }
    }

    //팔레트 파싱
    document.getElementById("sticker-color-pal").innerHTML = tag;

    //색상 입히기
    var stiColorIndv = document.getElementsByClassName('stiColorIndv');
    for (i = 0; i < stiColorIndv.length; i++) {
        stiColorIndv[i].style.background = stiColorIndv[i].id;
    }
};



//페이지 새로 고침하면 뜨는 기본 무색 스티커
function initStickerBasic(){
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
        tag += "<img id='aaa' class='stickerIndv' src='" 
        + "../static/img/" + stickerArr[n] + "_emp.png'/>"
    }

    document.getElementById("sticker-bar-palette").innerHTML = tag;
};



//팔레트 선택하면 색 바뀌게(사진이 바뀌는...)
//오렌지 색 사진으로 바꾸기
function stickerColorSet114() {
    //1. 스티커 창 비우기
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    // 2. 사진 바꾸기
    orangeSticker();
};
function stickerColorSet113() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    orangeSticker();
};
function stickerColorSet112() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    orangeSticker();
};
function stickerColorSet111() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    orangeSticker();
};
function stickerColorSet110() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    orangeSticker();
};
function stickerColorSet115() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    orangeSticker();
};



//초록색 사진으로 바꾸기
function stickerColorSet85() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    greenSticker();
};
function stickerColorSet86() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    greenSticker();
};
function stickerColorSet87() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    greenSticker();
};
function stickerColorSet83() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    greenSticker();
};
function stickerColorSet84() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    greenSticker();
};

//핑크색 사진으로 바꾸기
function stickerColorSet15() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    pinkSticker();
};
function stickerColorSet16() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    pinkSticker();
};
function stickerColorSet17() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    pinkSticker();
};
function stickerColorSet13() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    pinkSticker();
};
function stickerColorSet14() {
    document.getElementById("sticker-bar-palette").innerHTML = " ";
    pinkSticker();
};



    //이미지 태그 연결
    // 오렌지 스티커
    function orangeSticker(){
        stickerArr=[
            "Star4","Star5","Star6",
            "Star10","Star11","Star12",
            "Star13","Star14", "Star16", 
            "Ellipse175", "Union", "Union1", 
            "Union2","Union3", "Union4",
            "Star17","Star18", "Star19", 
        ];
    
        var tag = "";
        for (n=0; n<stickerArr.length; n++){
        tag += "<img class='stickerIndv' src='" 
            + "../static/img/sticker_o/" + stickerArr[n] + "_o.png'/>"
        }
    
        document.getElementById("sticker-bar-palette").innerHTML = tag;
    };

    //초록 스티커
    function greenSticker(){
        stickerArr=[
            "Star4","Star5","Star6",
            "Star10","Star11","Star12",
            "Star13","Star14", "Star16", 
            "Ellipse175", "Union", "Union1", 
            "Union2","Union3", "Union4",
            "Star17","Star18", "Star19", 
        ];

        var tag = "";
        for (n=0; n<stickerArr.length; n++){
            tag += "<img class='stickerIndv' src='" 
            + "../static/img/sticker_g/" + stickerArr[n] + "_g.png'/>"
        }

        document.getElementById("sticker-bar-palette").innerHTML = tag;
    };


    //핑크 스티커
    function pinkSticker(){
        stickerArr=[
            "Star4","Star5","Star6",
            "Star10","Star11","Star12",
            "Star13","Star14", "Star16", 
            "Ellipse175", "Union", "Union1", 
            "Union2","Union3", "Union4",
            "Star17","Star18", "Star19", 
        ];

        var tag = "";
        for (n=0; n<stickerArr.length; n++){
            tag += "<img class='stickerIndv' src='" 
            + "../static/img/sticker_p/" + stickerArr[n] + "_p.png'/>"
        }

        document.getElementById("sticker-bar-palette").innerHTML = tag;
    };



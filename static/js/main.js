window.onload = function () {
    let button1 = document.querySelector("#b1");
    let circle1 = document.querySelector("#c1");
    function func1() {
      if (circle1.id !== "cc1") {
        circle1.id = "cc1";
        button1.style.opacity = "0.5"
      } else {
        circle1.id = "c1";
        button1.style.opacity = "0.9"
      }
    }
    button1.addEventListener("click", func1);

    let button2 = document.querySelector("#b2");
    let circle2 = document.querySelector("#c2");
    function func2() {
      if (circle2.id !== "cc2") {
        circle2.id = "cc2";
        button2.style.opacity = "0.5"
      } else {
        circle2.id = "c2";
        button2.style.opacity = "0.9"
      }
    }
    button2.addEventListener("click", func2);

    let button3 = document.querySelector("#b3");
    let circle3 = document.querySelector("#c3");
    function func3() {
      if (circle3.id !== "cc3") {
        circle3.id = "cc3";
        button3.style.opacity = "0.5"
      } else {
        circle3.id = "c3";
        button3.style.opacity = "0.9"
      }
    }
    button3.addEventListener("click", func3);

    let button4 = document.querySelector("#b4");
    let circle4 = document.querySelector("#c4");
    function func4() {
      if (circle4.id !== "cc4") {
        circle4.id = "cc4";
        button4.style.opacity = "0.5"
      } else {
        circle4.id = "c4";
        button4.style.opacity = "0.9"
      }
    }
    button4.addEventListener("click", func4);

    let button5 = document.querySelector("#b5");
    let circle5 = document.querySelector("#c5");
    function func5() {
      if (circle5.id !== "cc5") {
        circle5.id = "cc5";
        button5.style.opacity = "0.5"
      } else {
        circle5.id = "c5";
        button5.style.opacity = "0.9"
      }
    }
    button5.addEventListener("click", func5);

    let button6 = document.querySelector("#b6");
    let circle6 = document.querySelector("#c6");
    function func6() {
      if (circle6.id !== "cc6") {
        circle6.id = "cc6";
        button6.style.opacity = "0.5"
      } else {
        circle6.id = "c6";
        button6.style.opacity = "0.9"
      }
    }
    button6.addEventListener("click", func6);

    let button7 = document.querySelector("#b7");
    let circle7 = document.querySelector("#c7");
    function func7() {
      if (circle7.id !== "cc7") {
        circle7.id = "cc7";
        button7.style.opacity = "0.5"
      } else {
        circle7.id = "c7";
        button7.style.opacity = "0.9"
      }
    }
    button7.addEventListener("click", func7);

    let editbtn = document.querySelector("#edit");
    let btns = document.querySelectorAll(".buttons");
    function func8() {
      if (btns[0].style.visibility == "visible") {
        btns[0].style.visibility = "hidden";
      } else {
        btns[0].style.visibility = "visible";
      }
      console.log("click");
    }
    editbtn.addEventListener("click", func8);

    setTimeout(function func9() {
        console.log("check!");
        circle1.style.visibility = "visible"
        circle2.style.visibility = "visible"
        circle3.style.visibility = "visible"
    }, 30000);

}
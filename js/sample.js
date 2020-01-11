const logoImg1 = document.querySelector('#logoImg1');
const logoImg2 = document.querySelector('#logoImg2');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');
const body = document.querySelector('#container2');
const bannerList = ["kakao", "naver"];
let currentListNum = 0;

function init() {

    logoImg1.classList.add("clicked1");
    body.textContent="kakao";
    body.classList.add("clicked1");

}

init();

function handleResize(event) {

    console.log(event);

}

window.addEventListener("resize", handleResize);


function handleClick1(event) {

    console.log(event);
    if (logoImg2.classList.contains("clicked2")) {
        logoImg2.classList.remove("clicked2");
        body.classList.remove("clicked2");
        logoImg1.classList.add("clicked1")
        body.textContent="kakao"
        body.classList.add("clicked1")
        currentListNum = 0;
        
    }
    else {
        logoImg1.classList.add("clicked1")
        body.textContent="kakao"
        body.classList.add("clicked1")
        currentListNum = 0;
    }

}


function handleClick2(event) {

    console.log(event);
    if (logoImg1.classList.contains("clicked1")) {
        logoImg1.classList.remove("clicked1");
        body.classList.remove("clicked1");
        logoImg2.classList.add("clicked2")
        body.textContent="naver"
        body.classList.add("clicked2")
        currentListNum = 1;
    }
    else {
        logoImg2.classList.add("clicked2")
        body.textContent="naver"
        body.classList.add("clicked2")
        currentListNum = 1;
    }

}

function arrowMoveLeft () {
    if (currentListNum === 0) {
        currentListNum = bannerList.length-1;
        bannerChange();
        console.log("arrowMoveLeftif")
    }
    else {
        currentListNum -= 1;
        bannerChange();
        console.log("arrowMoveLeftelse")
    }
}

function arrowMoveRight () {
    console.log("arrow Right")
    if (currentListNum === bannerList.length-1) {
        currentListNum = 0;
        bannerChange();
        console.log("arrowMoveRightif")
    }
    else {
        currentListNum += 1;
        bannerChange();
        console.log("arrowMoveRightelse")
    }
}


function bannerChange() {
    if (currentListNum === 0) {
        handleClick1();
    }
    else if(currentListNum === 1) {
        handleClick2();
    }
}


logoImg1.addEventListener("click", handleClick1);
logoImg2.addEventListener("click", handleClick2);
arrowLeft.addEventListener("click", arrowMoveLeft)
arrowRight.addEventListener("click", arrowMoveRight)

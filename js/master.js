// Check If There is Local Storage Color Option
let mainColor = localStorage.getItem("color_option");

if(mainColor !== null){
    // console.log(localStorage.getItem("color_option"));
    document.documentElement.style.setProperty('--main-color', mainColor);
    
    // Remove Active From All Childrens
    document.querySelectorAll(".color-list li").forEach(element => {
        // Remove Active Class From All
        element.classList.remove("active");
        
        // Add Active Class To The Element Is Equal To Local Storage MinColor
        if(element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });
}

// Toggle Spin Class On Icon
document.querySelector(".togle-gear .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};

// SWitch Colors
const colorLi = document.querySelectorAll(".color-list li");

// Loop On li List Colors
colorLi.forEach(li => {

    // Click On Every Li Make Some Thing
    li.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active On Clicked Li
        e.target.classList.add("active");
    });
});

// Random BackGround
const randomBackGround = document.querySelectorAll(".random-background span");
// Random BackGround Option
let IsRandom = true;
// Var To Controle the interval
let backGrondInterval;

// Check If There's Local Storage Random Background Item
let backgrounLocalItem = localStorage.getItem("background_item");

if(backgrounLocalItem !== null) {
    if(backgrounLocalItem === "yes"){
        IsRandom = true;
        document.querySelector(".random-background .yes").classList.add("active");
    }
    else {
        IsRandom = false;
        document.querySelector(".random-background .no").classList.add("active");
    }
    // console.log(backgrounLocalItem);
    // console.log(IsRandom);
}

// Loop On random-background span 
randomBackGround.forEach(span => {

    // Click On Every Span Make Some Thing
    span.addEventListener("click", (e) => {
        // Remove Active From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active On Clicked span
        e.target.classList.add("active");

        if(e.target.dataset.background === 'yes'){
            IsRandom = true;
            randomImg();
            localStorage.setItem("background_item" , "yes");
        }
        else {
            IsRandom = false;
            clearInterval(backGrondInterval);
            localStorage.setItem("background_item" , "no");
        }
    });
});


// Select Landing Page
let ladingPage = document.querySelector(".langing-page");
// Get Array Od Imags
let imgsArray = ["1landing.png" , "2landing.png" , "3landing.png" , "4landing.png" , "5landing.png"];
// Function to Random Back Ground
function randomImg(){
    // Change Background Image Url
    if(IsRandom){
        let randomNumber = 0;
        backGrondInterval = setInterval(() => {
            console.log(randomNumber);
            ladingPage.style.backgroundImage = 'url("imgs/Landing/'+ imgsArray[randomNumber] +'")';
            randomNumber++;
            if(randomNumber > 4){
                randomNumber=0;
            }
        }, 1000)
    }
}
randomImg();
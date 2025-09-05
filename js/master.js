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
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active 
        e.target.classList.add("active");
    });
});

// Select Landing Page
let ladingPage = document.querySelector(".langing-page");

// Get Array Od Imags
let imgsArray = ["1landing.png" , "2landing.png" , "3landing.png" , "4landing.png" , "5landing.png"];

// Change Background Image Url
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    ladingPage.style.backgroundImage = 'url("imgs/Landing/'+ imgsArray[randomNumber] +'")';
}, 3000)
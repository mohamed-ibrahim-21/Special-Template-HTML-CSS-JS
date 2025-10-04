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

        handelActive(e);
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
        handelActive(e);

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
let ladingPage = document.querySelector(".landing-page");
// Get Array Od Imags
let imgsArray = ["1landing.png" , "2landing.png" , "3landing.png" , "4landing.png" , "5landing.png"];
// Function to Random Back Ground
function randomImg(){
    // Change Background Image Url
    // clearInterval(backGrondInterval);
    if(IsRandom){
        let randomNumber = 1;
        backGrondInterval = setInterval(() => {
            // console.log(randomNumber);
            ladingPage.style.backgroundImage = 'url("imgs/Landing/'+ imgsArray[randomNumber] +'")';
            randomNumber++;
            if(randomNumber > 4){
                randomNumber=0;
            }
        }, 3000)
    }
}
randomImg();


// make progress apper in scroll
let ourskills = document.querySelector(".skills");

window.onscroll = function() {

    // Skills offset top
    let skilloffsettop = ourskills.offsetTop;

    // Skill Outer Height
    let skillouterheight = ourskills.offsetHeight;
    
    // window Height
    let windowhight = this.innerHeight;
    
    // window scrolltop
    let windowscrolltop = this.pageYOffset;

    // console.log(skilloffsettop);
    // console.log(skillouterheight);
    // console.log(windowhight);
    // console.log(windowscrolltop);
    if (windowscrolltop > (skilloffsettop + skillouterheight - windowhight)){
        // console.log("here");
        let allskills = document.querySelectorAll(".skill-box .skill-prog span");

        allskills.forEach(skill => {
            skill.style.width = skill.dataset.prog;
        });

    }

};

// Creat Popup With Image 
let galleryImgs = document.querySelectorAll(".img-box img");

galleryImgs.forEach(img => {

    img.addEventListener('click' , (e)=> {
        // Create Overlay Element(div) 
        let overlay = document.createElement("div");
        // Add Class To this Element(div)
        overlay.className = 'popup-overlay';
        // Append Overlay To The Body (Add Div To Body)
        document.body.appendChild(overlay);


        // Create The Popup Box
        let popupBox = document.createElement("div");
        // Add Class To Popup Box
        popupBox.className = 'popup-box';

        if(img.alt !== null){
            // Create Heading
            let imgHeading = document.createElement("h3");
            // Create Text For Heading
            let imgText = document.createTextNode(img.alt);
            // Append Text To Heading
            imgHeading.appendChild(imgText);
            // Append Heading To Popup Box
            popupBox.appendChild(imgHeading);
        }

        //create The Img In Popup
        let popupImg = document.createElement("img");
        // Set Img Src 
        popupImg.src = img.src;
        // Add Img To Popup Box 
        popupBox.appendChild(popupImg);
        // Add Popup Box To Body
        document.body.appendChild(popupBox);


        // Create Close Span
        let closeButton = document.createElement("span");
        // Create Close Button Text
        let closeButtonText = document.createTextNode("X");
        // Add closeButtonText to closeButton Span
        closeButton.appendChild(closeButtonText);
        // Give closeButton Span Class
        closeButton.className = 'close-button';
        // Append closeButton To popupBox
        popupBox.appendChild(closeButton);
    });
});

//Close Popup
document.addEventListener("click", e=>{
    if(e.target.className === 'close-button'){
        // Remove The Current Popup
        e.target.parentNode.remove();
        // Remove The Overlay (another way to remove)
        document.querySelector(".popup-overlay").remove();
    }
});


// Select All Bullets 
const allBullets = document.querySelectorAll(".nav-bullets .bullets");
// Select All links 
const allLinks = document.querySelectorAll(".links a");
// Scroll To Section
function scrollToSection(element){
    element.forEach(ele => {
        ele.addEventListener("click", (e)=> {
            e.preventDefault();
            const section = e.target.dataset.section;
            document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
        });
    });
};

scrollToSection(allBullets);
scrollToSection(allLinks);

// Function To Handel Active
function handelActive(ev){
    // Remove Active From All Childrens
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active On Clicked Li
        ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".Show-Bullets span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletsLocalStorage = localStorage.getItem("bullets_option");

if (bulletsLocalStorage !== null) {
    bulletsSpan.forEach( span => {
        span.classList.remove("active");
    });
    
    if(bulletsLocalStorage === "block"){
        bulletsContainer.style.display = 'block';
        document.querySelector(".Show-Bullets .yes").classList.add("active");
    }
    else {
        bulletsContainer.style.display = 'none';
        document.querySelector(".Show-Bullets .no").classList.add("active");
    }
}

bulletsSpan.forEach(span => {
    
    span.addEventListener("click", (e) => {
        if(span.dataset.bullets === 'show'){
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block');
        }
        else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none');
        }
        handelActive(e);
    });

});
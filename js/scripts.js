

//variables
let menuBtn = document.querySelector(".btnMenu");
let breakfastBtn = document.getElementById("breakfast");
let lunchBtn = document.getElementById("lunch");
let dinnerBtn = document.getElementById("dinner");
let dessertBtn = document.getElementById("dessert");
let breakfast = document.querySelectorAll(".breakfast");
let dessert = document.querySelectorAll(".dessert");
let lunch = document.querySelectorAll(".lunch");
let dinner = document.querySelectorAll(".dinner");
let menuArray = document.querySelectorAll(".open");
//events
breakfastBtn.addEventListener("click", toggleMenu(breakfast, false));
dinnerBtn.addEventListener("click", toggleMenu(dinner, false));
lunchBtn.addEventListener("click", toggleMenu(lunch, on));
dessertBtn.addEventListener("click", toggleMenu(dessert, true));
//functions
menuBtn.addEventListener("click",function(){
    if(menuBtn.classList.contains("fa-bars")){
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-arrow-left");
    } else{
        menuBtn.classList.remove("fa-arrow-left");
        menuBtn.classList.add("fa-bars");
        
    }
});
function toggleMenu(menuArray, on) { 
    for (let menu = 0; menu < menuArray.length; menu++) {
        if (on) {
            menuArray[menu].style.display = "none"; 
        } else {
            menuArray[menu].style.display = "block";
        }
    }
}

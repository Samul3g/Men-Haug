var navShow = false
var dropDownShow = false


$(".navBarImage1").on("click", function(e) {

    if (navShow===false) {
        $(".navBarSpace").toggleClass("offOn")  
        $("#navBar1").animate({"right": '-950'},500);
        $("#navBarImage1").animate({"right": '-100px'},500);
        $("#navBar2").animate({"left": '0'},500);
        navShow = true
    }
    else if ((navShow===true) && (dropDownShow === false) ) {   
        $(".navBarSpace").toggleClass("offOn") 
        $("#navBar1").animate({"right": '10px'},500);
        $("#navBarImage1").animate({"right": '10px'},500);
        $("#navBar2").animate({"left": '-950px'},500);
         
        navShow = false
    }
 
})



   
$("#brunchBt").mousedown(function(e) {
    
    if (dropDownShow === false) {
        setTimeout(() => {
            $("#BrunchTable").animate({"left": '0px'},500);
          }, 1000);
          dropDownShow = true
    }
    
});
    
$("#navBarImage2").on("click", function(e) {

    $("#BrunchTable").animate({"left": '-950px'},500);
    dropDownShow = false
 
})  

$("#drinksBt").mousedown(function(e) {
    
    if (dropDownShow === false) {
        setTimeout(() => {
            $("#DrinksTable").animate({"left": '0px'},500);
          }, 1000);
          dropDownShow = true
    }
   
});
    
$("#navBarImage3").on("click", function(e) {

    $("#DrinksTable").animate({"left": '-950px'},500);
    dropDownShow = false
 
})  




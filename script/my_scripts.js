$(document).ready(function (){
    let headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
    lightning_one();
    /*lightning_two();
     lightning_three(); */

    $("#head").click(function (){
        if (headclix < 19) {
            $("#head").animate({left:"-=367px"},500);
            headclix+=1;
        }
        else {
            $("#head").animate({left: "0px"},500);
            headclix = 0;
        }
    });
    $("#eyes").click(function (){
        if (eyeclix < 19) {
            $("#eyes").animate({left:"-=367px"},500);
            eyeclix+=1;
        }
        else {
            $("#eyes").animate({left: "0px"},500);
            eyeclix = 0;
        }
    });
    $("#nose").click(function (){
        if (noseclix < 19) {
            $("#nose").animate({left:"-=367px"},500);
            noseclix+=1;
        }
        else {
            $("#nose").animate({left: "0px"},500);
            noseclix = 0;
        }
    });
    $("#mouth").click(function (){
        if (mouthclix < 19) {
            $("#mouth").animate({left:"-=367px"},500);
            mouthclix+=1;
        }
        else {
            $("#mouth").animate({left: "0px"},500);
            mouthclix = 0;
        }
    });
});
function lightning_one(){
    $("#container #lingning1").fadeIn(2000).fadeOut(500);
    setTimeout("lightning_one()", 4000);
}
/*function lightning_two(){
   $("#container #lingning2").fadeIn("fast").fadeOut("fast");
   setTimeout("lightning_two()", 5000);
}
function lightning_three(){
   $("#container #lingning3").fadeIn("fast").fadeOut("fast");
   setTimeout("lightning_three()", 7000);
}*/
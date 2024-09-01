window.onload = AnimateHeadings();

document.getElementById("nav-burger").addEventListener("click", function(e){
    document.getElementById("navigation").classList.toggle("inactive");
    document.getElementById("nav-burger").classList.toggle("inactive");
});
document.getElementById("nav-x").addEventListener("click", function(e){
    document.getElementById("navigation").classList.toggle("inactive");
    document.getElementById("nav-burger").classList.toggle("inactive");
});
var rm_nav_elems = document.getElementsByClassName("remove-nav");
for(var i=0; i<rm_nav_elems.length; i++){
    rm_nav_elems[i].addEventListener("click", function(e){
        document.getElementById("navigation").classList.toggle("inactive");
        document.getElementById("nav-burger").classList.toggle("inactive");
    });
}

function AnimateHeadings(){
    var headings = document.getElementsByClassName("heading-txt");
    for(var i=0; i<headings.length; i++){
        AnimateHeading(i, 0);
    }
}
function AnimateHeading(index, iteration){
    //console.log(`At index: ${index}, iteration: ${iteration}`);
    var finalTexts = ["Observer.", "Comprendre.", "Appliquer."];
    var chars = "ABCDEFGHIJKLMNOPQRST1234567890+=-";
    var headingElement = document.getElementById(`heading-txt-${index+1}`);
    if(iteration < finalTexts[index].length*3){
        var randomChar = chars[Math.floor(Math.random()*chars.length)];
        var text = (headingElement.innerText).split("");
        text[(iteration-iteration%3)/3] = randomChar;    
        if(iteration > 2){
            text[(iteration-iteration%3)/3] = randomChar.toLowerCase();    
            text[(iteration-iteration%3)/3 - 1] = (finalTexts[index])[(iteration-iteration%3)/3 - 1];
        }
        headingElement.innerText = text.join("");
        setTimeout(AnimateHeading, 70, index, iteration+1);
    }else{
        headingElement.innerText = finalTexts[index];
    }
}
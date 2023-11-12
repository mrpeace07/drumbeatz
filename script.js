var numdrum = document.querySelectorAll(".drum").length;

for (var i =0; i< numdrum; i++) {


document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
var buttonInnerHTML = this.innerHTML;
// for mouse
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
    

});
// this is for keyboard
document.addEventListener("keypress",function(event) {
    makeSound(event.key);
buttonAnimation(event.key);  

});
}

var currentSound = null;

function makeSound(key)
{

    if (currentSound !== null && !currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;
     
            case "s":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();  
            break;
    
            case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");  
            tom3.play(); 
            break;
    
            case "f":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play() ; 
            break;
    
            case "j":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
    
            case "k":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();   
            break;
    
            case "l":
            var snare = new Audio("sounds/snare.mp3");   
            snare.play();
            break;
    
    
            default:
                alert("Press a valid key");
                setTimeout(function() {
                    alert.close();
                }, 200);
            break;
    }
     
}

function buttonAnimation(currentKey)
{
  var activebutton = document.querySelector("." + currentKey);
  activebutton.classList.add("pressed");

  setTimeout(function()
  {
    activebutton.classList.remove("pressed")
  },100);
}  


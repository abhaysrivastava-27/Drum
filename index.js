var click_arr = document.querySelectorAll(".drum");
for(var i=0 ; i<document.querySelectorAll(".drum").length;i++)
{
  click_arr[i].addEventListener("click",letsClick);
}

function letsClick()
{
    var data = this.innerHTML;
    switch (data) {
      case "w":
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();
      break;

      case "a":
        var tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();
      break;

      case "s":
        var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
      break;

      case "d":
        var tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();
      break;

      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "k":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
      break;

      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;


      default: console.log("wrong key")

    }
}
document.addEventListener("keypress", function(event)
  {

    var data1 = event.key;
    switch (data1) {
      case "w":
        var tom_1_1 = new Audio("sounds/tom-1.mp3");
        tom_1_1.play();
      break;

      case "a":
        var tom_2_1 = new Audio("sounds/tom-2.mp3");
        tom_2_1.play();
      break;

      case "s":
        var tom_3_1 = new Audio("sounds/tom-3.mp3");
        tom_3_1.play();
      break;

      case "d":
        var tom_4_1 = new Audio("sounds/tom-4.mp3");
        tom_4_1.play();
      break;

      case "j":
        var crash_1 = new Audio("sounds/crash.mp3");
        crash_1.play();
      break;

      case "k":
        var kick_bass_1 = new Audio("sounds/kick-bass.mp3");
        kick_bass_1.play();
      break;

      case "l":
        var snare_1 = new Audio("sounds/snare.mp3");
        snare_1.play();
      break;


      default: console.log("wrong key")
  }});

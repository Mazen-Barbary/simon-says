var buttonColors = ["red","blue","green","yellow"];

var GamePattern = [];

var userClickedPattern = [];
var started = false;

var level = 0;


function nextSequence(){

    userClickedPattern = [];

    level++;
      $("#level-title").text("level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    GamePattern.push(randomChosenColor);
      $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
      playSound(randomChosenColor);
      
       


}

$(".btn").click(function(){
    
    var userChosencolor =  this.id;
    userClickedPattern.push(userChosencolor);
    $("#" + userChosencolor).addClass("pressed");
     setTimeout(function(){
         $("#" + userChosencolor).removeClass("pressed");
    }, 100);

    playSound(userChosencolor);
    checkAnswer(userClickedPattern.length-1);

    

});

   


function playSound(name){
     var audio = new Audio("sounds/" + name + ".mp3")

        audio.play();
}

       

$("html").on("touchstart keydown",function(){
if(!started){
  
   
    $("#level-title").text(level);
       nextSequence();
    started = true;
   
}
});



function checkAnswer(currentLevel){
    if(GamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length == GamePattern.length){
            setTimeout(function () {
          nextSequence();
        }, 1000);
        }
    }
    else {

      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
         $("body").removeClass("game-over");
      },200);
      $("#level-title").text("Game Over, Press Any Key or touch the screen  to Restart");
       var audio = new Audio("sounds/wrong.mp3")

        audio.play();

        startOver();

    }
    
}
function startOver(){
    level = 0;
    GamePattern = [];
    started = false;

    

}




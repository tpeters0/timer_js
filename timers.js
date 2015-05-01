var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");
var pauseButton = document.querySelector("#pause");

var header = document.getElementById("timer");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", reset);


var num = 0;

function startTimer(){
  header.innerHTML = (num += 1)
}

var count = setInterval(startTimer, 1000);


function stopTimer() {
  clearInterval(count);
}

function reset()
{
  num = 0;
}


// function myTimer() {
//     var d = new Date();
//     document.getElementById("timer").innerHTML = d.toLocaleTimeString();
// }

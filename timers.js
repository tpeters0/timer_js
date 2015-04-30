var startButton = document.querySelector("#start")
var resetButton = document.querySelector("#reset")
var pauseButton = document.querySelector("#pause")

var header = document.getElementById("timer")

startButton.addEventListener("click", startTimer)
pauseButton.addEventListener("click", stopTimer)


function startTimer(){
  nIntervId = setInterval(count,100)

}

function count(){
  // header.style.color = header.style.color == "red" ? "blue" : "red";

  header.innerHTML = ":00"
  var i = 0
  for (var i = 0; i < 59; i++)
  header.innerHTML = i + 1
  // var counting = parseInt(header) + 1
}



function stopTimer() {
  clearInterval(nIntervId);
}

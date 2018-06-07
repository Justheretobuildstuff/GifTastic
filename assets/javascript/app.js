$(document).ready(function() {

    $('#triviaQuestions').hide()
    $('#summary').hide()

$("#start").on("click", function(){
    $('#start').hide()
    $('#triviaQuestions').show()
    startTimer()
});

function startTimer() {
    document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}
}
// starting trivia


  $("#done").on("click", function(){
    $('#triviaQuestions').hide()
    $('#summary').show()
});

});
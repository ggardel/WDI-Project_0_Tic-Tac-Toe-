

//main function to start the game or new game after resst
function playStart() {
  //for loop will restart the board after clear
  for (var i = 1; i<=9; i++){
    clearBoard(i);
  }
  document.getElementByClass = "X";
  //document.winner = null;
}
//if space is empty can play next invoking the function next turn to  switch players
function nextPlay(space) {
  //if (document.winner != null){
    //alert(document.getElementByClass + " was the winner!")
//  }
  if (space.innerText == "") {
    space.innerText = document.getElementByClass;
    nextTurn();
  }
}
//to make sure the player will will switch turn from X to O
function nextTurn() {
  //if (getWinner(document.getElementsByClass)){
      //alert(document.getElementsByClass + "You Win!!!");
      document.winner = document.getElementsByClass;
  /*  } else*/ if (document.getElementByClass == "X"){
    document.getElementByClass = "O";
  }else {
  document.getElementByClass  = "X";
}
}
//clear board and show empty box
function clearBoard(number){
  return document.getElementById('a' + number).innerText ="";

}

//to check line for true result parameter
function checkLine(c, d, e, move){
  var result= false;
  if (checkSpot(c)== move && checkSpot(d) == move && checkSpot(e) == move){
    result = true;
  }
  return result;
}
//checking the possible combinations for winner by columns/row and diagonal
function getWinner(move) {
  var result = false;
  if (checkLine(1, 2, 3, move) ||
      checkLine(4, 5, 6, move) ||
      checkLine(7, 8, 9, move) ||
      checkLine(1, 4, 7, move) ||
      checkLine(2, 5, 8, move) ||
      checkLine(3, 6, 9, move) ||
      checkLine(1, 5, 9, move) ||
      checkLine(3, 5, 7, move)) {
       result = true;
     }
      return result;
}
//identify the box by id..
function checkSpot(number){
  document.getElementById('a'+ number).innerText;
}

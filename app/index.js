//need game class
// player will be 'x' or 'o'
var Board = function(player1, player2){
  this.board = [[0,0,0],
                [0,0,0],
                [0,0,0]];
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = this.player1;
}

Board.prototype.showBoard = function() {
  var consoleBoard = ''
  this.board.forEach(function(curr,i){
    consoleBoard += curr.toString() + '\n';
  })
  return consoleBoard;
}

Board.prototype.playerMove = function(row, col){
  if(this.board[row][col] !== 0){
    console.log('spot taken, try an empty spot') 
  } else {
    this.board[row][col] = this.currentPlayer;
    this.checkWin();
    console.log(this.showBoard());
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    console.log('Player ' + this.currentPlayer + '\'s move next!');
  }
}

Board.prototype.checkWin = function(){

}

var game = new Board('x', 'o');

console.log(game.playerMove(0,0));
console.log(game.playerMove(0,0));

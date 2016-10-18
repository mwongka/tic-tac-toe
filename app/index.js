//need game class

var Board = function(player1, player2){
  this.board = [[0,0,0],
                [0,0,0],
                [0,0,0]];
  this.player1 = player1;
  this.player2 = player2;
  this.turn = 1;
}

Board.prototype.showBoard = function() {
  var consoleBoard = ''
  this.board.forEach(function(curr,i){
    consoleBoard += curr.toString() + '\n';
  })
  return consoleBoard;
}

var game = new Board('x', 'o');

console.log(game.showBoard());

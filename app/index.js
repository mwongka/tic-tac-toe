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
    if(this.checkWin(this.currentPlayer, row, col)){
      console.log('Player ' + this.currentPlayer + ' is the winner!');
    } else {
      console.log(this.showBoard());
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
      console.log('Player ' + this.currentPlayer + '\'s move next!'); 
    }
  }
}

Board.prototype.checkWin = function(player, row, col){
  //can brute force this an iterate through to check if player has won
  if(this.checkHorizontal(player, row, col)){
    return true;
  } else if (this.checkVertical(player, row, col)){
    return true;
  } else if (this.checkDiagonal(player, row, col)){
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkHorizontal = function(player, row, col){
  var winnerFound = true;
  this.board[row].forEach(function(piece){
    if(piece !== player){
      winnerFound = false;
      return winnerFound;
    }
  });
  return winnerFound
}

Board.prototype.checkVertical = function(player, row, col){
  var winnerFound = true;
  this.board.forEach((r, index) => {
    if(this.board[index][col] !== player){
      winnerFound = false;
      return winnerFound;
    }
  })
  return winnerFound;
}

Board.prototype.checkDiagonal = function(player, row, col){
  
}

var game = new Board('X', 'O');

console.log(game.playerMove(0,0));

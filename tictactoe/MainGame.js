/**
 * Created by TTT team.
 */
var board = require('./GameBoard.js');

var TTT = function(){
    this.movements = 5;
    if(arguments.length == 0 )
    {
        if(process.argv[2].length>= this.movements && process.argv[2].length<=9)
        {
            this.moves = process.argv[2];
            this.winner = '';
            this.board = null;
            this.initGame();
            this.gameResults();
        }
        else
        {
            this.error();
        }
    }
    else
    {
        if(arguments[0].toString().length >= this.movements && arguments[0].toString().length<=9)
        {
            this.moves = arguments[0].toString();
            this.winner = '';
            this.board = null;
            this.initGame();
            this.gameResults();
        }
        else
        {
            this.error();
        }
    }

};
TTT.prototype.initGame = function(){
    this.board = board.initGrid();
    this.drawTable();
    this.playerMove(this.moves);
    console.log('');
    this.drawTable();
};

TTT.prototype.error = function(){
    throw new Error('Invalid quantity of movements');
};
TTT.prototype.drawTable = function(){
    console.log(board.grid.join('\n'));
};

TTT.prototype.playerMove = function(moves){
    var mov  = moves.split('');
    for(var i = 0 ; i <= mov.length ; i++) {
        if (i % 2 == 0) {
            board.setValue(mov[i], 'X');
        }
        else if (i % 2 != 0) {
            board.setValue(mov[i], 'O');
        }

        if (i >= 5)
        {
            if (board.checkifWin('XXX')) {
                this.winner = 'Player 1';
                break;
            }
            else if (board.checkifWin('OOO')) {
                this.winner = 'Player 2';
                break;
            }
            else {
                this.winner = 'Tied game!';
            }
        }
    }
};

TTT.prototype.gameResults = function(){
    console.log('The result of the game is:'+this.winner);
    return 'The result of the game is:'+this.winner;
};
//var Game = new TTT();
module.exports = TTT;

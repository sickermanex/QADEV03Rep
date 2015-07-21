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
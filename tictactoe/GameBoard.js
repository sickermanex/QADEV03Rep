/**
 * Created by TTT team.
 */
var Board = function(){
    this.grid = [];
};

Board.prototype.initGrid = function(){
    var clearGrid = 1;
    for(var i = 0 ; i<3 ; i++)
    {
        this.grid[i] = new Array(3);
    }
    for(var i = 0 ; i<3 ; i++)
    {
        for(var j = 0 ; j<3 ; j++)
        {
            this.grid[i][j] = clearGrid.toString();
            clearGrid++;
        }
    }
};
Board.prototype.setValue = function (pos,val) {
    for(var i = 0 ; i<3 ; i++)
    {
        for(var j = 0 ; j<3 ; j++)
        {
            if(this.grid[i][j]==pos)
            {
                this.grid[i][j]=val;
            }
        }
    }
};
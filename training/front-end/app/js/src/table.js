/**
 * Created by ManuelVasquez on 6/22/2015.
 */
var Table = function(size,quantity){
    this.size = size;
    this.ships = [];
    this.tables = [];
    this.grid = [];
    this.quantity = quantity;
    this.initGrid();
    this.initShips();
};

Table.prototype.initGrid = function(){
	var EMPTY_CELL = '0';
	for(var q=0;q<this.quantity;q++)
    {
        for (var i = 0; i < this.size; i++)
        {
            this.grid[i]=new Array(this.size);
        }
        for (var i = 0; i < this.size; i++)
        {
            for (var j = 0; j < this.size; j++)
            {
                this.grid[i][j]=EMPTY_CELL;
            }
        }
        //this.tables.push(this.grid);
    }
};
		
Table.prototype.initShips = function(){
    for(var t=1;t<=4;t++)
    {
        var shipID = t.toString();
        var shipSize = this.getShipRandomSize();
        var ShipPos = this.getShipRandomPos(shipSize); //returns new Axis(4,0);
        var ship = new Ship(shipSize,ShipPos);

        this.ships.push(ship);

        var i = ShipPos.getRow();
        for(var j=ShipPos.getColumn();j<shipSize+ShipPos.getColumn();j++)
        {
            this.grid[i][j] = shipID;
        }
    }
};

Table.prototype.getShipRandomPos = function(shipSize){
    var column;
    var row;
    var i;
    do
    {
        column = parseInt(Math.random() * this.size - shipSize);
        row = parseInt(Math.random() * this.size);
        for(var j=0;j<row;j++)
        {
            for(i = column; i < column + shipSize; i++)
            {
                if(this.grid[j][i] != '0')
                {
                    break;
                }
            }
            if(i == column + shipSize)
            {
                break;
            }
        }
        if(i == column + shipSize)
        {
            break;
        }
    }while(true);
    return new Axis(row,column);
};

Table.prototype.getShipRandomSize = function(){
    return parseInt(Math.random() *3)+1;
};
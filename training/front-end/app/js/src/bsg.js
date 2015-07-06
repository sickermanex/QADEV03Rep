/**
 * Created by ManuelVasquez on 6/25/2015.
 */
var BattleShipGame = function(player, size){
	this.numPlayers = player;
	this.tableSize = size;
	this.players = [];
	this.init();
	this.startGame();
	console.log('Starting the game for ' +player+ ' players');
	
};

BattleShipGame.prototype.init = function(){
	for(var i=1;i<=this.numPlayers;i++)
	{
		var playerName = 'Player '+i;
		var playerTable = new Table(this.tableSize,this.numPlayers);
		var play = new Player(playerName, playerTable);
		this.players.push(play);
	}
};

BattleShipGame.prototype.startGame = function(){
	//Init loop
	this.printTable();
	var row = window.prompt('ROW?');
	var column = window.prompt('Column?');
	this.Shot(row,column);
	//console.log('Shot is row '+ row + '\nColumn: '+column );
	//End loop
};

BattleShipGame.prototype.printTable = function(){
	//Init loop	
	console.log('Table\n' + this.players[0].table.grid.join('\n'));
	//End loop
};

BattleShipGame.prototype.Shot = function(row,column){
	var r = row-1;
	var c = column-1;
	if(this.players[0].table.grid[r][c]!='0' && this.players[0].table.grid[r][c]!='X')
	{
		alert('HIT!');
        this.players[0].table.grid[r][c]='X';
        console.log('Table\n' + this.players[0].table.grid.join('\n'));
		var row = window.prompt('ROW?');
		var column = window.prompt('Column?');
		this.Shot(row,column);
	}
	else
	{
		alert('Miss');
	}
};
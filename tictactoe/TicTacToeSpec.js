/**
 * Created by  on 18/07/2015.
 */
var TicTactoe = require('./MainGame.js');
console.log('hola');

describe('TicTactoe', function(){
    console.log('hola');
    it('should say win player',function(){
        var tictac = new TicTactoe('123456789');
        var actres = tictac.gameResults();
        console.log(actres);
        var expres = 'Player 1';
        expect(actres).toContain(expres);
    });

    it('should say win player',function(){
        var tictac = new TicTactoe('214365879');
        var actres = tictac.gameResults();
        console.log(actres);
        var expres = 'Player 2';
        expect(actres).toContain(expres);
    });

    it('should say tied game',function(){
        var tictac = new TicTactoe('215346789');
        var actres = tictac.gameResults();
        console.log(actres);
        var expres = 'Tied game!';
        expect(actres).toContain(expres);
    });
	
	
	
});

//describe('test set 2',function(){
//	it('test with contain',function(){
//		var tictac = new TicTactoe('123456789');
//		var res = tictac.gameResults();
//		var espec = 'Player 1';
//		expect(res).toContain(espec);
//		
//	});
//	it('test not.toBe',function(){
//		var tictac = new TicTactoe('123456789');
//		var res = tictac.gameResults();
//		var espec = 'Player 2';
//		expect(res).not.toContain(espec);
//		
//	});
//	
//});


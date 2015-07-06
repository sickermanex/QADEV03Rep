/**
 * Created by ManuelVasquez on 6/29/2015.
 */
//Question 1
var WordsInArgs = function(){
    var l = arguments.length;
    var max = 0;
    for(var i=0;i<l;i++)
    {
        if(arguments[i].length>max)
        {
            max = arguments[i].length;
        }
    }
    var secmax = max+4;
    var HeadNTop = '';
    while(HeadNTop.length<secmax)
    {
        HeadNTop+='*';
    }
    console.log(HeadNTop);
    for(var i=0;i<l;i++)
    {
        var space = arguments[i].length+2;
        var maxlimit = secmax-2;
        var underscore = '';
        for(var j=space;j<maxlimit;j++)
        {
            underscore+='_';
        }
        console.log('* '+arguments[i]+underscore+' *\n');
    }
    console.log(HeadNTop);
};

//Question 2
(function(){
    var WORD_POOL = ['Pala','Lima','Mano','Chico','Pescado','Casco','Mosca'];
    var Tries = 10;
    var Points = 0;
    var Position = parseInt(Math.random() * WORD_POOL.length);
    var GuessingWord = WORD_POOL[Position];
    var WordLen = GuessingWord.length;
    var AuxGuess = '';
    var Condition = WordLen*2-1;
    while(AuxGuess.length<Condition)
    {
        if(AuxGuess.length==Condition-1)
        {
            AuxGuess+='_';
        }
        else
        {
            AuxGuess+='_ ';
        }
    }

    console.log('The Word to be guessed is: '+AuxGuess);
    while(Tries>0)
    {
        var Input = window.prompt('Type a letter, you have '+Tries+' more tries');
        for(var i=0;i<WordLen;i++)
        {
            if(Input.toUpperCase()==GuessingWord[i])
            {
                var AuxArr = AuxGuess.split('');
                AuxArr[i*2]=Input.toUpperCase();
                AuxGuess = AuxArr.join('');
                Points++;
            }
            else
            {
                if(Input == GuessingWord[i])
                {
                    var AuxArr = AuxGuess.split('');
                    AuxArr[i*2]=Input;
                    AuxGuess = AuxArr.join('');
                    Points++;
                }
            }
        }
        console.log(AuxGuess);
        if(Points==WordLen)
        {
            break;
        }
        else
        {
            Tries--;
        }
    }
    if(Points==WordLen)
    {
        console.log('You win! The answer is: '+GuessingWord);
    }
    else if(Tries==0)
    {
        console.log('You lose! The answer was: '+GuessingWord);
    }
})();
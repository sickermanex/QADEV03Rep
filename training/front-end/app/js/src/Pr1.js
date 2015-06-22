/**
 * Created by ManuelVasquez on 6/12/2015.
 */
var suma =0;
var maxi = 0;
var av = 0;
var mini = 100000000000000000000000;
//
var Calc = function(){
};

Calc.prototype.sumar = function(){
    console.log(sum(arguments,arguments.length-1));
    suma=0;
};

Calc.prototype.promedio = function(){
    console.log(avg(arguments,arguments.length-1));
    av=0;
};

Calc.prototype.maximo = function(){
    console.log(max(arguments,arguments.length-1));
    maxi=0;
};

Calc.prototype.minimo = function(){
    console.log(min(arguments,arguments.length-1));
    mini=100000000000000000000000;
};
//
var sum = function(num,len) {
    if (len != -1) {
        suma = suma + num[len];
        sum(num, len - 1);
    }
    return suma;
};
//
var avg = function(num,len) {
    if (len != -1) {
        av = av + num[len];
        avg(num, len - 1);
    }
    if(len==0)
    {
        av = av/(num.length);
    }
    return av;
};
//
var max = function(num,len){
    if(len>-1){
        if(num[len] > maxi)
        {
            maxi = num[len];
            max(num,len-1);
        }
        else
        {
            max(num,len-1);
        }
    }
    return maxi;
};
//
var min = function(num,len){
    if(len>-1){
        if(num[len] < mini)
        {
            mini = num[len];
            min(num,len-1);
        }
        else
        {
            min(num,len-1);
        }
    }
    return mini;
};
///*===================================================================*/
////Lab 2
var countWords = function(phrase){
    return 'The phrase "' + phrase +'" has '+ phrase.split(' ').length + ' words';
};
//
var dat = function(){
    var d = new Date();
    var da = d.getDay();
    var days  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var hour = new Number();
    var nn = " AM ";
    hour = d.getHours();

    if(hour>12)
    {
        hour = hour-12;
        nn = ' PM ';
    }
    return 'Today is ' + days[da] +'\nCurrent time is: '+hour+nn+ d.getMinutes()+' : '+ d.getSeconds();
};
/*=======================================================================*/
//Lab3

var init=20;
var end=50;

var getFirstCapicua = function(b,e){
    var nums = [];
    for(var i=b;i<=e;i++)
    {
        var f="";
        var s="";
        for(var j=0;j<i.toString().length;j++)
        {
            f+= i.toString()[j];
        }
        for(var j=i.toString().length-1;j>=0;j--)
        {
            s+= i.toString()[j];
        }
        if(f==s)
        {
            //nums.push(f);
            break;
        }
    }
    return console.log('The first capicua number between',init,' and',end,'is',f);;
};

var getCapicua = function(b,e){
    for(var i=b;i<=e;i++)
    {
        if(numCap(i))
        {
            console.log('The first capicua number between',b,'and',e,'is',i);
            break;
        }
    }
};

var numCap = function(n){
    var ns = n.toString();
    var narr = ns.split('');
    narr = narr.reverse();
    ns = narr.join('');
    var n2 = parseInt(ns);
    if(n2 == n)
    {
        return true;
    }
};

var printOddEven = function(n){
    console.log('The first '+n+' even numbers are: ');
    for(var i=1;i<=n*2;i++)
    {
        if(i%2!=0)
        {
            continue;
        }
        console.log(i);
    }
    console.log('The first '+n+' odd numbers are: ');
    for(var i=1;i<=n*2;i++)
    {
        if(i%2==0)
        {
            continue;
        }
        console.log(i);
    }
};

var fact = function(n){
    var f=1;
    for(var i=1;i<=n;i++)
        f*=i;
    console.log('The factorial of',n,'is',f)
};
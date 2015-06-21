/*Created by Manu on 06/11/2015*/

var sayhello = function(name){
    console.log('Hello ' + name);
};


//Creando clase Person - Opcion 1
//var Person = function(name){    //name parametro que recibe la instancia
//        this.name = name;       //this.name = propiedad de la instancia
//        this.eat  = function(){
//            console.log(this.name +' is Eating...')
//        };
//};

//Creando clase Person - Opcion 2
var Person = function(name){    //name parametro que recibe la instancia
    this.name = name;       //this.name = propiedad de la instancia
};
Person.prototype.eat  = function() {
    console.log(this.name + ' is Eating...');
};

var paco = new Person('Paco'); //nueva instancia de la clase persona
var pepe = new Person('Pepe'); //nueva instancia de la clase persona


//var age ='';
var calculateAge = function(bornYear) {
    age = 2015 - bornYear;  //declarar una variable sin var la crea como global
    return age;
};

var TheBody = function(){
    var url = "D:\\JS_Apps\\QADEV03Rep\\index.html";
    $("#TheBody").load(url);
};
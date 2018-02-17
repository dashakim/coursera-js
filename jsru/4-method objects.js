//Методы у обьектов
var person = {
    name: 'Leo',
    sayAge: function(){
        console.log(this.name );
    }
}
person.sayAge();

var user = {
    name: 'Dashka',
    sayHi: function(){
        console.log('Hello');
    }
}
user.sayHi();

var stairs = {
    step: 0,
    up: function (steps) {
        this.step = this.step + steps;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showstep: function() {
        console.log( this.step);
        return this;
    }
}

stairs.up(5).up(2).up(3).down().showstep();

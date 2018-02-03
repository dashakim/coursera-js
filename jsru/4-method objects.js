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
    up: function () {
        this.step++;
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

stairs.up().up().up().down().showstep();

return {
    up: function () {
        throw Exception;
    },
    down: function() {
        throw Exception;
    },
    showstep: function() {
        throw Exception;
    }
}
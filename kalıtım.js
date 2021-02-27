// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos =function(){
//     console.log("isim:"+this.name+"yaş:"+this.age);
// }
// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;

// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee");
// }

// Employee.prototype.showInfos = function(){
//     console.log("isim:"+this.name+"yaş:"+this.age+"Maaş:"+this.salary);
// }
// const emp = new Employee("Mustafa",25,4000);

// emp.showInfos();


class Person { //SuperClass - BaseClass
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    showInfos(){
        console.log("isim:"+this.name+"yaş:"+this.age);
    }
}

class Employee extends Person{ // DerivedClass - Subclass - ChildClass
    constructor(name,age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary =salary;
    }
    showInfos(){  //Overriding
        console.log("isim:"+this.name+"yaş:"+this.age+"Maaş:"+this.salary);
    }
    toString(){ // Overriding
        console.log("Employee");
    }


    raiseSalary(amount) {
        this.salary = this.salary + amount // = this.salary += amount ;
    }
}

const emp = new Employee("Mustafa",25,4000);
emp.raiseSalary(500);
// console.log(emp);
emp.showInfos();
emp.toString();
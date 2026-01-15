//object
const student={
    fullname:'aditi ranaware',
    age:23,
    marks:8.50,
    printmarks:function(){
        console.log("marks=",this.marks);
    }
};
//prototypes in js

const employee={
    calcTax(){
        console.log("tax is rated 10%");
    },
};

const karanarjun={
    salary:50000,
    calcTax(){

        console.log('tax rate is 20%');
    },
};

const prem={
    salary:6000,
    calcTax(){
        console.log('tax is rated 10%');

    }
}
prem_proto=employee;
karanarjun_proto=employee;

//classes

class toyotacar{
    start(){
        console.log("start");
    }
    stop(){
        consolelog('stop');
    }
    setBrand(Brand){
        this.Brand=Brand;
    }
}
let fortuner=new toyotacar();
fortuner.setBrand("fortuner");
let lexus=new toyotacar();
lexus.setBrand('luxus');

//inheritance

// class person{
//     eat(){
//         console.log("Eating")
//     }
//     sleep(){
//         console.log("sleeping")
//     }
// }

// class engineer extends person{
//     work(){
//         console.log('solve problem,buid somethings')
//     }
// }
// let shrdhaobj=new engineer();

//super keyword

class Person{
    constructor(){
        this.species='homo spaiens'
    }
    eat(){
        console.log('eat');
    }

}
class engineer extends Person{
    constructor(branch){
        super();//to invoke parent class constructor
        this.branch=branch;
    }
    work(){
        console.log('solve the problem,build something');
    }
}

let engObj=new engineer('chemical engg');

//que-1
//you are creating a website for your college.create a class user with 2 propertires,name & email.it also has a method called viewData()that allows user to view website data.
let DATA='secret information';


class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA='some new value';
    }

}
let student1=new User("aditi",'aditi@123');
let student2=new User('shreya','sherya@22');

let teacher1=new User('dean','dean@college.com');

let admin1=new Admin('admin','adimin@123');

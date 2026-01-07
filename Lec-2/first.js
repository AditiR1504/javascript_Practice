// arithmatic operator
let a=5;
let b=2;

console.log("a=",a,"b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);//reminder


// unary oprator
 let c=4;
 let d=3;

 console.log("c=",c,"d=",d);//post
 console.log("c--",c--);
 console.log("c=",c)

 console.log("++d=",++d);//pre
 console.log("d=",d);


//  assigment opeator

let e=7;
let f=8;

e +=4; //e=e+4 e=7+4=11
console.log("e=",e);

e -=2;
console.log('e=',e);//11-2=9

f *=2;
console.log("f=",f);

f %=6;
console.log("f=",f);

f **=2;//square
console.log("f=",f);

//comparision opeator

let g=5;
let h="2";

console.log("a===b",a===b)

let i=3;
let j=4;

console.log("i<=j =",i<=j);
console.log("i>=j =",i>=j);
console.log("i!=j",i!=j)

//logical opeartor

let k=5;
let l=4;

let cond1=k<l;
let cond2=k==4;

console.log("cond1 && cond2",cond1 && cond2);//&&
console.log("cond1||cond2",cond1||cond2);//or
console.log(!(5<4),!(k===5));//not

//condional opeators

//if statement
let age=34;
if(age>=18){
    console.log("you can vote")
}

//if-else statments
let mode='dark';
let color;
if(mode==="dark"){
    color='black';
}else{
    color='white';
}
console.log(color);

//else-if statments
 let weight=35;
 if(weight<15){
    console.log("lower weight")
 }else if(weight>40){
    console.log('perfect weight')
 }else{
      console.log('higher weight');
 }

//ternery opeator

let person_age=18;
const beverage= person_age >=21 ? "Beer" :"juice";
console.log(beverage);

     //practice Questions

//Que-1 GEt a user input a number using prompt("Enter a number")check if the number is multiple of 5 or not
//ans-

let num=prompt("Enter a number");
if(num%5==0){
    console.log(num ," number is divided by 5")
}else{
    console.log(num,"num is not divided by 5")
}

//Que2-write a code which can given grades to students acccording to their scores
//ans-
let score=prompt("Enter your score");
let grade;

if(score>=90 && score<=100){
    grade="A"
}else if(score>=70 && score<=89){
    grade="B"
}else if(score>=60 && score<=69){
    grade="C"
}else if(score>=50 && score<=59){
    grade="D"
}else if(score>=0 && score<=49){
    grade="E"
}
console.log("According to your score,your grade was:",grade);

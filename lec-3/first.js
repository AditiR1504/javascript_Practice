
//for loop
for(let a=1;a<5;a++){
    console.log("Hello js");
}

//Que-calculate the sum of 1 T0 5

 let sum=0;
 for(let b=1;b<=5;b++){
    sum=sum+b;
 }
 console.log("Sum",sum);

 //que-calculate sum of 1 to 100
 let total=0;
 for(let i=1;i<=100;i++){
    total=total+i;
 }
console.log("total of 1 to 100 is ",total);

//while-loop
let j=1;
while(j<=10){
    console.log("hello india");
    j++;
}

//for-of loop - use for character and string
let str="javascript";

let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log("String size=",size);

//for-in loop - use for object
let student={
  Fullname:"Aditi Ranaware",
  age:23,
  cgpa:7.5,
  isPass:true,
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}


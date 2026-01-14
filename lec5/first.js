//function
function myfunction(){
    console.log("Welcome to java script");
}
myfunction();

//parameter-input
function msgfunction(msg){
    console.log(msg);
}
msgfunction("I love js");

//sum of two numbers

function sum(x,y){
    sum=x+y;
    console.log("before return");
    return sum;
}
let val=sum(3,4);
console.log(val);

//mul function
function mul(a,b){
    return a*b;
}

//arrow function
const arromul=(a,b)=>{
    console.log(a*b);

}
//arrow function
const arroadd=(a,b)=>{
    console.log(a+b);
}

//practice qestions
//que-create a function using function keyword that  takes a string as an argument & return the number of vowel in the string

const CountVow=(str)=>{
    let count=0;
    for(const char of str){
        if(
            char==='a'||
            char==='e'||
            char==='i'||
            char==='o'||
            char==='u'
        ){
            count ++;
        }
    }
    return count;

};

//for-each loop in array

let city=['pune','mumbai','goa'];
city.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});

//que-for a given array of number,print the square of each value using the forEach loop

let nums=[4,,5,6,7,8,9];
nums.forEach((num)=>{
    console.log(num*num);
})

// another way to solve
let numbers=[3,4,5,6,7]
let calSquare=(nums)=>{
    console.log(nums*nums);
};
nums.forEach(calSquare);

//Map
 let values=[67,45,76];
 let newArr=values.map((val)=>{
    return val*2;
 });
 console.log(newArr);

 let calsquare=(num)=>{
    console.log(num*num);
};

 //filter

let arr=[1,2,3,4,5,6,7];
let evenarr=arr.filter((val)=>{
    return val%2===0;
});
console.log(evenarr);

//odd num
let series=[23,45,65,89];
let oddarr=series.filter((val)=>{
    return val%5===0;
})
console.log(oddarr);

//reduce method
//find the largest number

let numarr=[5,6,7,8];
const output=numarr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(output);

//practice questions
//que-we are given array of marks of student .filter our of the marks of students that scored 90+.

let marks=[67,90,98,97,45];
let topper=marks.filter((val)=>{
    return  val>90;
});
console.log(topper);
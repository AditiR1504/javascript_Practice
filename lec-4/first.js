//array

let mark=[89,65,35];
let info=['rahul',86,'delhi'];

console.log(mark);
console.log(mark.length)

//loop over an array

//for loop
let heroes=['ironman','halk','thor','batman'];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}


//for-of loop
for(let hero of heroes){
    console.log(hero)
}

//example
let cities=['delhi','pune','mumbai','banglor'];
for(let city of cities){
    console.log(city.toUpperCase());

}

//practice questions
//que1-for a given arry]ay with marks of student-[85,45,67,34,60]fond the avrgrage marks of the entrie class

let marks=[85,65,68,94,69];
let sum=0;
for(let val of marks){
    sum +=val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);

//que-2 for a given array with price of 5 items[260,645,300,900,50]all items have an offer of 10% off on them.change the array to store final price after applying offer.
//using for of loop
let  items=[260,645,300,900,50];

let idx=0;
for(let price of items){
    console.log(`value at index ${idx} = ${price}`);
    let offer=price/10;
    items[idx]=items[idx]-offer;
    console.log(`value after offer = ${price}`);
    idx++;

}

//another way using for loop

let product=[260,645,300,900,50];
for(let i=0;i<product.length;i++){
    let discount=product[i]/10;
    product[i] -=discount;
}
console.log(product);

//array methods
 let fooditems=['potato','chips','apple','lichice']

 fooditems.push('burger','panner');
 console.log(fooditems);
 
 let deleteditem=fooditems.pop();
 console.log(fooditems);
 console.log(deleteditem)
 console.log(fooditems.toString());

 //concat,unsift,shift

 let vegetables=['potato','tomato','cabagge','carrot','beans'];
 let fruit=['apple','banana','kevi','chiku','mango'];

 let grosery=vegetables.concat(fruit);
 console.log(grosery);

  vegetables.unshift('coriender');//add to start
  console.log(vegetables);

  let newfruits=fruit.shift();
  console.log(newfruits);

  //slice,splice
//slice
  let marvelherors=['ironman','halk','thor','batman'];
  console.log(marvelherors.slice(1,3));

//splice

let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
//add element
arr.splice(4,0,103);
//delete element
arr.splice(3,1);
//replace element
arr.splice(3,1,101);


// practice qestions
// que-create an array  to store compaines
// emove the first company from an array
// 2.replce
// 3.add 

//ans-
let compaines=['ola','uber','microsoft','google','amezon'];
compaines.shift();
compaines.splice(1,2,'zepto');
compaines.push('netflix');

console.log(compaines);

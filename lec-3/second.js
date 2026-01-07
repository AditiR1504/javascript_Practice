//template literals
let str="Apna\tcollege";
console.log(str.length);

let specialString=`this is a template literal ${1+2+3}`;
console.log(specialString);

let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of",obj.item,"is",obj.price,"rupees");

//methods
str="Aditi ranaware";
let newStr=str.toUpperCase();
console.log(str);
console.log(newStr);

let lowerstring=str.toLowerCase();
console.log(lowerstring);

let str1="     Apna college    "
console.log(str1.trim());

//methods
let str2='hello';
console.log(str2.slice(3));//slice

let str3='apna';
let str4='college';

let res="i am learing coding from "+ str3 + str4;//concat
console.log(res);

let str5='hey'
console.log(str5.replace('y','i'));

//practice qestions
//prompt the user to enter therir fullname generate a username for them based on their input start username with @,followed by their fullname and ending with fullname length

let fullname=prompt("Enter your fullname with space");
let username="@"+fullname+fullname.length;
console.log(username);
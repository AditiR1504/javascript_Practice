//create a h2 heading element with text "hello javascript",apppend 'from apna college students" to this using js

let h2=document.querySelector("h2");
console.dir(h2.innerHTML);
h2.innerText=h2.innerText + ' From apna college student';

//create 3 divs with common class name 'box'.access them & add some unique text to each of them.

let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}

// practice 

console.dir(document.body.childNodes[1]);
document.body.childNodes[3].innerText;

let ele=document.getElementsByClassName("box");
console.log(ele);
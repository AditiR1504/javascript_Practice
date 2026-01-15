//get and set attributes
let div=document .querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let para=document.querySelector("p");
console.log(para.setAttribute('class','para-class'));

//styling in js
let divs=document.querySelector("div");
div.style.backgroundColor='green';
div.style.fontSize='26px';
div.innerText='hello!'

// insert element
let newbtn=document.createElement("button");
newbtn.innerText='click me';
console.log(newbtn);

let div=document.querySelector("div");
div.after(newbtn);


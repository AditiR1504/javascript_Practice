// let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("handler1");
//     let a=25;
//     a++;
//     console.log(a);//26

// }

// btn1.onclick=()=>{
//  console.log('handler 2')
// }//overridding


///event object

// btn1=onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// btn1=addEventListener('click',()=>{
//     console.log('button1 was clicked-hander1');
// });
// btn1=addEventListener('click',()=>{
//     console.log('button1 was clicked-hander2')
// });

// const hander3=()=>{
//     console.log("button was clicked-hander3");
// }
// btn1=addEventListener("click",hander3);

// btn1.removerEventListener("click",hander3);

//que-create a toggle button that changes the screen to dark-mode when clicked & lightmode when clicked again

let modebtn=document.querySelector("#btn1");
let currmode='light';//dark

modebtn.addEventListener("click", () =>{
   if(currmode==='light'){
    currmode='dark';
   document.querySelector("body").style.backgroundColor="black";
   }else{
    currmode='light'
    document.querySelector('body').style.backgroundColor="white";
   }
   console.log(currmode)
})




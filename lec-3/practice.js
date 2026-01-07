//print all even number from 1 to 100

for(let num=0;num<=100;num++){
if(num%2==0){
    console.log("num",num);
}
}

//print all odd num 1 to 100

for(let num=0;num<=100;num++){
    if(num%2!==0){
        console.log("num",num)
    }
}

//create  a game where you start with any random game number.ask the user to keep guessing the game number util the  user enters correct value

let gamenum=25;
let userNum=prompt("Gess the number:");
while(userNum!=gamenum){
    userNum=prompt("You entered wrong num Gess again");
}
console.log("Congratulations,you entered the right number");



let i=0;
function generatenumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
let usercount=0;
let computercount=0;
 let r;
 r=prompt("how many rounds do you want to play ?");
 if(isNaN(r)){
       r=prompt("invalid input enter a number: ");
 }
    while(i<r){
        let x=generatenumber(1,3);
        let UserChoice=prompt("enter your choice");
        i++
        if (UserChoice.toLocaleLowerCase()==="rock" && x===2){
            console.log("you win this round")
            usercount++
        }
        else if(UserChoice.toLocaleLowerCase()==="paper" &&x===1){
            console.log("computer wins this round")
            computercount++
        }
        else if(UserChoice.toLocaleLowerCase()==="scissors" && x===2){
            console.log("you win this round")
            usercount++
        }
        else if(x===3 && UserChoice.toLocaleLowerCase()==="paper"){
            console.log("you win this round")
            usercount++
        }
        else if(x===1 && UserChoice.toLocaleLowerCase()==="scissors"){
            console.log("computer wins this round")
            computercount++
        }
        else if(UserChoice.toLocaleLowerCase()==="rock" && x===3){
            console.log("computer wins this round")
            computercount++
        }
        else{
            r++
            console.log("invalid input")
        }
     }  
if(usercount>computercount){
            console.log("you win by "+usercount+" over "+computercount)
        }
else if(computercount>usercount){

    console.log("computer wins by "+computercount+" over "+usercount)
}
else{
    console.log("it's a tie "+usercount+"/"+computercount)
}
 



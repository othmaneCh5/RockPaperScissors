//declaration of the result
let container=document.querySelector('#cont');
let result=document.createElement('h3');

//declaring list of computer choices
let list=['rock','paper','scissors'];
let userchoice;
//function of computer's choice



//events
function scissors(){
    let index=Math.round(Math.random()*3);
    let computerchoice=list[index];

    if(computerchoice==='rock'){
        result.textContent='computer wins this round';
        container.appendChild(result);
    }
    else if(computerchoice==='scissors'){
        result.textContent='tie';
        container.appendChild(result);
    }
    else{
        result.textContent='you win this round';
        container.appendChild(result);
    }
    
}
function rock(){
    let index=Math.round(Math.random()*3);
    let computerchoice=list[index];

    if(computerchoice==='scissors'){
        result.textContent='you win this round';
        container.appendChild(result);
    }
    else if(computerchoice==='rock'){
        result.textContent='tie';
        container.appendChild(result);
    }
    else{
        result.textContent='computer wins this round';
        container.appendChild(result);
    }
}
function paper(){
    let index=Math.round(Math.random()*3);
    let computerchoice=list[index];

    if(computerchoice==='scissors'){
        result.textContent='computer wins this round';
        container.appendChild(result);
    }
    else if(computerchoice==='paper'){
        result.textContent='tie';
        container.appendChild(result);
    }
    else{
        result.textContent='you win this round';
        container.appendChild(result);
    }
}
/*play_round function
function play_round(computerchoice,userchoice){
    if(computerchoice==='rock' && userchoice==='paper'){
        result.textContent='you win this round';
        container.appendChild(result);
    }
    else if(computerchoice==='paper' && userchoice==='rock'){
        result.textContent='computer wins this round';
        container.appendChild(result);
    }
    else if(computerchoice==='rock' && userchoice==='scissors'){
        result.textContent='computer wins this round';
        container.appendChild(result);
    }
    else if(computerchoice==='scissors' && userchoice==='rock'){
        result.textContent='you win this round';
        container.appendChild(result);
    }
    else if(computerchoice==='scissors' && userchoice==='paper'){
        result.textContent='computer wins this round';
        container.appendChild(result);
    }
    else if(computerchoice==='scissors' && userchoice==='paper'){
        result.textContent='you win this round';
        container.appendChild(result);
    }
}
play_round(computerchoose,userchoice);
*/

    

// starting page variable start 
let starting=document.getElementById("starting")
let p1name =document.getElementById("p1name")
let btnstart_1 =document.getElementById("btnstart_1")
let nameError_1 =document.getElementById("nameError_1")
// starting variable page end

// player one page variable start 
let player_1=document.getElementById("player_1")
let p1number=document.getElementById("p1number")
let btnplay=document.getElementById("btnplay")
let numbererror_1=document.getElementById("numbererror_1")
// player one variable page end


// player two starting page variable start
let player_2start=document.getElementById("player_2start")
let p2name=document.getElementById("p2name")
let btnstart_2=document.getElementById("btnstart_2")
let nameError_2=document.getElementById("nameError_2")
// player two starting variable page end

// player two guess page variable start
let player_2guess=document.getElementById("player_2guess")
let p2number=document.getElementById("p2number")
let guess_1=document.getElementById("guess_1")
let numbererror_2=document.getElementById("numbererror_2")
// player two guess page variable end

// player three starting page variable start
let player_3start=document.getElementById("player_3start")
let p3name=document.getElementById("p3name")
let btnstart_3=document.getElementById("btnstart_3")
let nameError_3=document.getElementById("nameError_3")
// player three starting page variable end


// player three guess page variable start
let player_3guess=document.getElementById("player_3guess")
let p3number=document.getElementById("p3number")
let guess_2=document.getElementById("guess_2")
let numbererror_3=document.getElementById("numbererror_3")
// player three guess page variable end

// Game over page variable start
let Gameover=document.getElementById("Gameover")
let win=document.getElementById("win")
let PlayerOneResult=document.getElementById("PlayerOneResult")
let PlayerTwoResult=document.getElementById("PlayerTwoResult")
let PlayerThreeResult=document.getElementById("PlayerThreeResult")



// Game over page variable end


// start play button start
btnstart_1.addEventListener("click", ()=>{
    
    if (!p1name.value == "") {
      player_1.classList.remove("hidden") 
      starting.classList.add("hidden") 
 
    }
    else{
    nameError_1.classList.remove("hidden") 
    }
})
// start play button end

// lets play button start
btnplay.addEventListener("click", ()=>{
    
    if (!p1number.value == "") {
       player_2start.classList.remove("hidden") 
      player_1.classList.add("hidden") 
 
    }
    else{
    numbererror_1.classList.remove("hidden") 
    }

})
// lets play button end

// start play button  for player two start
btnstart_2.addEventListener("click", ()=>{
    
    if (!p2name.value == "") {
       player_2guess.classList.remove("hidden") 
      player_2start.classList.add("hidden") 
     
 
    }
    else{
    nameError_2.classList.remove("hidden") 
    }
})
// start play button  for player two end

// guess button  for player two start
guess_1.addEventListener("click", ()=>{
    
    if (!p2number.value == "") {
       player_3start.classList.remove("hidden") 
      player_2guess.classList.add("hidden") 
     
 
    }
    else{
    numbererror_2.classList.remove("hidden") 
    }
})
// guess button  for player two end

// start play button  for player three start
btnstart_3.addEventListener("click", ()=>{
    
    if (!p3name.value == "") {
       player_3guess.classList.remove("hidden") 
      player_3start.classList.add("hidden") 
     
 
    }
    else{
    nameError_3.classList.remove("hidden") 
    }
})
// start play button  for player three end

// guess button  for player three start
guess_2.addEventListener("click", ()=>{
    
    if (!p3number.value == "") {
       Gameover.classList.remove("hidden") 
      player_3guess.classList.add("hidden") 
     
 
    }
    else{
    numbererror_3.classList.remove("hidden") 
    }

let num1 = parseFloat(p1number.value);
let num2 = parseFloat(p2number.value);
let num3 = parseFloat(p3number.value);

if (num1==num2 && num1==num3) {
    
     win.innerHTML = "It's a tie between all players!"
}
else if (num1==num2 && num1 >num3){
   win.innerText= p1name.value + " and " + p2name.value +" "+ "are both winners!"
}
else if (num1==num3 && num1 >num2){
   win.innerText= p1name.value + " and " + p3name.value +" "+ "are both winners!"
}
else if (num2==num3 && num2 >num1){
   win.innerText= p2name.value + " and " + p3name.value +" "+ "are both winners!"
}
else{
   
   if (num1 > num2 && num1 > num3) {
  win.innerHTML = p1name.value + " is the winner";
} else if (num2 > num3) {
  win.innerHTML = p2name.value + " is the winner";
} 
else  {
  win.innerHTML = p3name.value + " is the winner";
}
}


    PlayerOneResult.innerHTML=(p1name.value+" " +"Guess is =" + " "+num1)
    PlayerTwoResult.innerHTML=(p2name.value+" " +"Guess is ="+ " " +num2)
    PlayerThreeResult.innerHTML=(p3name.value+" " +"Guess is ="+ " " +num3)



})
// guess button  for player three end
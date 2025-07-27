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
let playeroneInput=document.getElementById("playeroneInput")
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
let playertwoInput=document.getElementById("playertwoInput")
// player two guess page variable end


// Game over page variable start
let Gameover=document.getElementById("Gameover")
let win=document.getElementById("win")
let PlayerOneResult=document.getElementById("PlayerOneResult")
let PlayerTwoResult=document.getElementById("PlayerTwoResult")
let num1,num2
let attempts = 0;
let maxAttempts = 5;

// Game over page variable end


// start play button start

btnstart_1.addEventListener("click", ()=>{
    
    if (!p1name.value == "") {
      player_1.classList.remove("hidden") 
      starting.classList.add("hidden") 
      playeroneInput.innerHTML=p1name.value
     
    }
    else{
    nameError_1.classList.remove("hidden") 
    }

  
})
// start play button end

// lets play button start
btnplay.addEventListener("click", ()=>{
     num1 = parseFloat(p1number.value);

    if (!p1number.value == "") {

      if (num1>0 && num1<=50) {
        player_2start.classList.remove("hidden") 
      player_1.classList.add("hidden") 
      }
       else{
        alert("Give a number between 1 to 50")
       } 

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
      playertwoInput.innerHTML=p2name.value
 
    }
    else{
    nameError_2.classList.remove("hidden") 
    }
})
// start play button  for player two end

// guess button  for player two start

guess_1.addEventListener("click", () => {
  let num2 = parseFloat(p2number.value);

  if (p2number.value === "") {
    numbererror_2.classList.remove("hidden");
    return;
  }

  if (num2 === num1) {
    win.innerText = p2name.value + " is the winner!";
    Gameover.classList.remove("hidden");
    player_2guess.classList.add("hidden");
  } else {
    attempts++; // ← global counter
    if (attempts < maxAttempts) {
      alert("Wrong guess! Attempts left: " + (maxAttempts - attempts));
      p2number.value = "";
    } else {
      win.innerText = p1name.value + " is the winner!";
      Gameover.classList.remove("hidden");
      player_2guess.classList.add("hidden");
    }
  }
  PlayerOneResult.innerHTML=p1name.value+" "+"given number is ="+" "+ num1
 PlayerTwoResult.innerHTML=p2name.value+" "+"guess is ="+" "+num2
});
// guess button  for player two end

    







const letters = Array.from(document.querySelectorAll(".letter"));
const bar = document.getElementById("bar");
const enter = document.getElementsByClassName("enter")[0];
const animal_btn = document.getElementsByClassName('animal')[0];
const city_btn = document.getElementsByClassName('city')[0];
const food_btn = document.getElementsByClassName('food')[0];
const secret = document.getElementsByClassName("secret_word")[0];
const reset = document.getElementById('reset');
const rope = document.getElementById('rope');
const head = document.getElementById('head');
const torso = document.getElementById('torso');
const rightarm = document.getElementById('rightarm');
const leftarm = document.getElementById('leftarm');
const rightleg = document.getElementById('rightleg');
const leftleg = document.getElementById('leftleg');
const bg = document.getElementsByClassName('display')[0]
let secretword = 0;

let secretwordarray = [];
let user_guess = 0;
let chances = 8;
let joined = '';

alert("Hello, and welcome to hangman, to start the game you must pick a topic: animals, cities or foods; once you do all that's left is to guess the word before the man gets hanged. Good luck!")

function computer_chooses(){
    computer_choice = Math.floor(Math.random()*animals.length)
    return computer_choice
}

function updateswa(){
    secret.innerHTML = secretwordarray;
}

animal_btn.addEventListener('click', function(){
    secretword = animals[computer_chooses()]
    populate();
    updateswa()
    secret_arr = Array.from(secretword)
    city_btn.disabled = true;
    food_btn.disabled = true;
})

city_btn.addEventListener('click', function(){
    secretword = cities[computer_chooses()]
    populate();
    updateswa()
    secret_arr = Array.from(secretword)
    animal_btn.disabled = true;
    food_btn.disabled = true;
})

food_btn.addEventListener('click', function(){
    secretword = foods[computer_chooses()]
    populate();
    updateswa();
    secret_arr = Array.from(secretword)
    city_btn.disabled = true;
    animal_btn.disabled = true;
})

function populate(){
    for(i=0; i < secretword.length; i++){
       secretwordarray.push("_")
   }
}

letters.forEach((letter) =>{
    letter.addEventListener('click', function(){
        user_guess = letter.innerHTML;
        check_for_match(user_guess)
        check_for_winner()
    })
})

enter.addEventListener("click", function(){
    user_guess = bar.value;
    
    check_for_match(user_guess)
    bar.value = "";
    check_for_winner()
})

function check_for_winner(){
   join()
   if(joined == secretword && chances > 0){
        alert('You saved him')
   } else if(joined != secretword && chances == 0){
       alert('you lose this time')
       secret.innerHTML = "he's dead now shame on you."
   }
}

function join(){
   joined = secretwordarray.join('');
}

function check_for_match(value){
    if(secret_arr.includes(value)){
        let match = secret_arr.indexOf(value)
        secretwordarray[match] = value
        secret_arr[match] = '_'
        updateswa()
    } else {
        chances -= 1;
        console.log(chances)
        check_chances(chances)
    }
}

function check_chances(chance){
    switch(chance) {
        case chance = 7:
        rope.innerHTML = "|"
        break;
        case chance = 6:
        head.innerHTML = 'o'
        break;
        case chance = 5:
        torso.innerHTML = '|'
        break;
        case chance = 4:
        rightarm.innerHTML = '/'
        break;
        case chance = 3:
        leftarm.innerHTML = '\\'
        break;
        case chance = 2:
        rightleg.innerHTML = '/'
        break;
        case chance = 1:
        leftleg.innerHTML = '\\'
        break;
        case chance = 0:
        bg.style.backgroundImage = "url('https://i.pinimg.com/originals/ba/d3/41/bad3410097d7e5e6ab7e1859b7081650.jpg')";
        break;

        default:
          console.log("ya")
      }
}

reset.addEventListener('click', function(){
    chances = 8;
    secretword = '';
    secretwordarray = [];
    bg.style.backgroundImage = "url()";
    animal_btn.disabled = false;
    food_btn.disabled = false;
    city_btn.disabled = false;
    rope.innerHTML = ""
    head.innerHTML = ""
    torso.innerHTML = ""
    rightarm.innerHTML = ""
    leftarm.innerHTML = ""
    rightleg.innerHTML = ""
    leftleg.innerHTML = ""
    secret.innerHTML = "";
})
















const foods = ['HAMBURGER', 'SANDWICH', 'SPAGHETTI', 'SAUSAGES', 'PIZZA', 'TORTILLAS', 'TOMATOES', 'POTATOES', 'MUSHROOMS', 'CABAGE']
const animals = ['PARROT', 'LIZARD', 'CHICKEN', 'SNAKE', 'MONKEY', 'HUMAN', 'ANTEATER', 'CAPYBARA', 'FENNECK', 'TARANTULA']
const cities = ['LONDON', 'ALGERIS', 'BARCELONA', 'DUBLIN', 'AUSTIN', 'RALEIGH', 'DURHAM', 'NEWCASTLE', 'MANCHESTER', 'LEEDS']
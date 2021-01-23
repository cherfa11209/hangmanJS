const letters = Array.from(document.querySelectorAll(".letter"));
const bar = document.getElementById("bar");
const enter = document.getElementsByClassName("enter")[0];
const animal_btn = document.getElementsByClassName('animal')[0];
const city_btn = document.getElementsByClassName('city')[0];
const food_btn = document.getElementsByClassName('food')[0];
const secret = document.getElementsByClassName("secret_word")[0];
const rope = document.getElementById('rope');
const head = document.getElementById('head');
const torso = document.getElementById('torso');
const rightarm = document.getElementById('rightarm');
const leftarm = document.getElementById('leftarm');
const rightleg = document.getElementById('rightleg');
const leftleg = document.getElementById('leftleg');
let secretword = 0;
let secretwordarray = [];
let user_guess = 0;

function computer_chooses(){
    computer_choice = Math.floor(Math.random()*animals.length)
    return computer_choice
}

animal_btn.addEventListener('click', function(){
    secretword = animals[computer_chooses()]
    populate();
    secret.innerHTML = secretwordarray;
    console.log(secretword)
})

city_btn.addEventListener('click', function(){
    secretword = cities[computer_chooses()]
    populate();
    secret.innerHTML = secretwordarray;
})

food_btn.addEventListener('click', function(){
    secretword = foods[computer_chooses()]
    populate();
    secret.innerHTML = secretwordarray;
    console.log(secretword)
})


function populate(){
    for(i=0; i <= secretword.length; i++){
       secretwordarray.push("_")
   }
}

letters.forEach((letter) =>{
    letter.addEventListener('click', function(){
        user_guess = letter.innerHTML;
        secret_arr = Array.from(secretword)
        check_for_match(user_guess)
    })
})

function check_for_match(value){
    if(secret_arr.includes(value)){
        console.log(secret_arr[value])
    }
}



















const foods = ['hamurger', 'sandwich', 'spaghetti', 'sausages', 'pizza', 'tortillas', 'tomatoes', 'potatoes', 'mushrooms', 'cabage']
const animals = ['parrot', 'lizard', 'chicken', 'snake', 'monkey', 'human', 'anteater', 'capybara', 'fenneck', 'tarantula']
const cities = ['london', 'algeirs', 'barcalona', 'dublin', 'austin', 'raleigh', 'durham', 'newcastle', 'manchester', 'leeds']
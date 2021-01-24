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
const bg = document.getElementsByClassName('display')[0]
let secretword = 0;
let secretwordarray = [];
let user_guess = 0;
let chances = 8;

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
    console.log(secretword)
})

city_btn.addEventListener('click', function(){
    secretword = cities[computer_chooses()]
    populate();
    updateswa()
})

food_btn.addEventListener('click', function(){
    secretword = foods[computer_chooses()]
    populate();
    updateswa()
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
        console.log(secret_arr)
        let match = secret_arr.indexOf(value)
        secretwordarray[match] = value
        secret_arr[match] = '_'
        updateswa()
    } else {
        chances -= 1;
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
        head.innerHTML = '|'
        break;
        case chance = 4:
        head.innerHTML = '/'
        break;
        case chance = 3:
        head.innerHTML = '\''
        break;
        case chance = 2:
        head.innerHTML = '/'
        break;
        case chance = 1:
        head.innerHTML = '\~'
        break;
        case chance = 0:
        hea
        break;

        default:
          console.log("ya")
      }
}


















const foods = ['hamurger', 'sandwich', 'spaghetti', 'sausages', 'pizza', 'tortillas', 'tomatoes', 'potatoes', 'mushrooms', 'cabage']
const animals = ['parrot', 'lizard', 'chicken', 'snake', 'monkey', 'human', 'anteater', 'capybara', 'fenneck', 'tarantula']
const cities = ['london', 'algeirs', 'barcalona', 'dublin', 'austin', 'raleigh', 'durham', 'newcastle', 'manchester', 'leeds']
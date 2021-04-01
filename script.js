let rope = document.getElementById('rope')
let head = document.getElementById('head')
let torso = document.getElementById('torse')
let rightarm = document.getElementById('rightarm')
let leftarm = document.getElementById('leftarm')
let rightleg = document.getElementById('rightleg')
let leftleg = document.getElementById('leftleg')

let secret = document.getElementById('secret')
let wronglist = document.getElementById('wrong-letter-list')
let city = document.getElementById('city')
let animal = document.getElementById('animal')
let food = document.getElementById('food')

let bar = document.getElementById('bar')
let enter = document.getElementById('enter')
let reset = document.getElementById('reset')

let secretword = 0;
let secretwordarray = [];
let user_guess = 0;
let chances = 8;
let joined = '';

function computer_chooses(){
    computer_choice = Math.floor(Math.random()*animals.length)
    return computer_choice
}

function updateswa(){
    secret.innerHTML = secretwordarray;
}

function populate(){
    for(i=0; i < secretword.length; i++){
       secretwordarray.push("_")
   }
   console.log(secretwordarray)
}

animal.addEventListener('click', function(){
    secretword = animals[computer_chooses()].toLocaleLowerCase()
    console.log(secretword)
    populate();
    updateswa()
    secret_arr = Array.from(secretword)
    city.disabled = true;
    food.disabled = true;
})


city.addEventListener('click', function(){
    secretword = cities[computer_chooses()].toLocaleLowerCase()
    populate();
    updateswa()
    secret_arr = Array.from(secretword)
    animal.disabled = true;
    food.disabled = true;
})

food.addEventListener('click', function(){
    secretword = foods[computer_chooses()].toLocaleLowerCase()
    populate();
    updateswa();
    secret_arr = Array.from(secretword)
    city.disabled = true;
    animal.disabled = true;
})

enter.addEventListener("click", function(){
    user_guess = bar.value.toLocaleLowerCase();
    
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
         let wrongItem = document.createElement('li')
         wrongItem.innerHTML = value
         wronglist.appendChild(wrongItem);
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
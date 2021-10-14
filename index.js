let elementHere = document.getElementById("element-here")
// determines path for element here.

let descHere = document.getElementById("desc-here")
// determines path for description here

let rarity = 0
// sets starting rarity

let commonElement = 0
// sets starting element

let rareElement = 0
// sets starting element

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// randomNumber(1, 20)
// Random number generator. change min and max. returns whole numbers.



// Common are water, fire, wind, earth, and healing. Rare elements are nature, ice, poison, lightening, shadow, and light.
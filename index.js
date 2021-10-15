let elementHere = document.getElementById("element-here")
// determines path for element here.

let descHere = document.getElementById("desc-here")
// determines path for description here

let roll = document.getElementById("roll")
// determines path for roll attempt count

let attempts = 0
// sets starting attempts count

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

function rollIncrease() {
    attempts += 1
    roll.innerText = attempts
}

// 

function commonRoll() {
    commonElement = randomNumber(1, 5)
    if (commonElement == 5) {
        elementHere.innerText = "Healing"
        descHere.innerText = "An element that lets you heal most wounds through magic."
    }
    else if (commonElement == 4) {
        elementHere.innerText = "Earth"
        descHere.innerText = "A broad element that lets you be in tune with raw minerals. Rocks, gems, dirt, sand."
    }
    else if (commonElement == 3) {
        elementHere.innerText = "Wind"
        descHere.innerText = "An airborn dragon's best friend. Lets you fly, or maybe you'd rather push people down with a gust of wind."
    }
    else if (commonElement == 2) {
        elementHere.innerText = "Water"
        descHere.innerText = "An element that lets you manipulate liquids. Swimming is improved."
    }
    else if (commonElement == 1) {
        elementHere.innerText = "Fire"
        descHere.innerText = "A destrcutive element. Has potential to cause a lot of damage. Lets you be resistant to more extreme temperatures."
    }
    else {
        elementHere.innerText = "Error"
        descHere.innerText = "Error"
    }
}

function rareRoll() {
    rareElement = randomNumber(1, 7)
    if (rareElement == 7) {
        elementHere.innerText = "Light"
        descHere.innerText = "An element that lets you create lightsources, and illusions."
    }
    else if (rareElement == 6) {
        elementHere.innerText = "Shadow"
        descHere.innerText = "An element that lets you create shadowpuppets, manifest items, etc."
    }
    else if (rareElement == 5) {
        elementHere.innerText = "Metal"
        descHere.innerText = "Ability to create and control processed minerals."
    }
    else if (rareElement == 4) {
        elementHere.innerText = "Electric"
        descHere.innerText = "Zap zap. Ability to create electricity."
    }
    else if (rareElement == 3) {
        elementHere.innerText = "Poison"
        descHere.innerText = "Ability to create toxic gas, liquid, etc. Can be quite lethal. Better resistance to poison and diseases."
    }
    else if (rareElement == 2) {
        elementHere.innerText = "Ice"
        descHere.innerText = "Ability to control ice and cold. Better resistance to cold."
    }
    else if (rareElement == 1) {
        elementHere.innerText = "Nature"
        descHere.innerText = "Magically summon plants to help you. Naturally better gardener. Use magic to give your crops a boost!"
    }
    else {
        elementHere.innerText = "Error"
        descHere.innerText = "Error"
    }
}

function rarityCheck() {
    rarity = randomNumber(1, 20)
    if (rarity == 20) {
        rareRoll()
        elementHere.style.color = "var(--rare-color)"
    }
    else {
        commonRoll()
        elementHere.style.color = "var(--common-color)"
    }
    rollIncrease()
}

// function test() {
//     rarity = randomNumber(1, 20)
//     descHere.innerText = rarity
// }

// Common are water, fire, wind, earth, and healing. Rare elements are nature, ice, poison, lightening, shadow, and light.
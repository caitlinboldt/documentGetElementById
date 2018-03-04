// Playing with js <3

document.getElementById("hello").innerHTML = "Hello World! :)"

function favAnimal() {
    var userAnimal = document.getElementById("inputanimal")
    console.log(userAnimal.value)
    document.getElementById("output").innerHTML = userAnimal.value
}

var trees = ["birch", "elm", "willow", "redwood", "maple"]

for( i = 0; i < trees.length; i++) {
    console.log(trees[i])
}

var animal = {
    name: "White tiger",
    color: "Black and white",
    type: "Carnivore"
}
console.log(animal.name)
console.log(animal.color)
console.log(animal.type)

document.getElementById("name").innerHTML = "Name: " + animal.name
document.getElementById("color").innerHTML = "Color: " + animal.color
document.getElementById("type").innerHTML = "Type: " + animal.type

var flowerTypes = [
    {
        name: "Larkspur",
        colour: "Red, pink, violet and white",
        scientific: "Delphinium"
    },
    {
        name: "Tulip",
        colour: "Red, yellow and white",
        scientific: "Tulipa"
    },
    {
        name: "Bleeding Heart",
        colour: "Rose-pink and white",
        scientific: "Lamprocapnos spectabilis"
    }
]



for(var i = 0; i < flowerTypes.length; i++) {
    console.log(flowerTypes[i])
}
document.body.style.color = "purple"

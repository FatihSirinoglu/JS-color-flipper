//we try this with 4 colors first.Then we try hex version.
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //get a random number between 0-3
    const randomNumber = getRandomNumber();
    //if we want to see which number gives us with randomNumber function than we can write ;
    //console.log(randomNumer);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNumber() {
    //math.getRandomNumber always gives us a float number between 0. and 0.9999 due to we multiple with the lengt of 'colors'
    return Math.floor(Math.random() * colors.length);
}
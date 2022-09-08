// Game Constant & Variable
let direction = {x: 0, y: 0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('game-over.mp3');
const musicSound = new Audio('background.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food = {x: 6, y: 7};






// Game Functions
function Main(ctime){
    window.requestAnimationFrame(Main);
    console.log(ctime);
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    // Part 1: Updating the Snake array and Food
    




    // Part 2: Display the Snake and Food
    // Display the Snake
        board.innerHTML = "";
        snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if (index === 0){
            snakeElement.classList.add('head');
        }
        board.appendchild(snakeElement);
    });

    // Display the Snake
    board.innerHTML = "";
        snakeArr.forEach((e, index)=>{
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendchild(foodElement);
}

// Main Logics started here
    window.requestAnimationFrame(Main);
    window.addEventListener('keydown', e=>{
        musicSound.play();
        switch (e.key) {
            case "Arrowup":
            console.log("ArrowUp");
            break;
        }
        switch (e.key) {
            case "ArrowDown":
            console.log("ArrowDown");
            break;
        }
        switch (e.key) {
            case "ArrowLeft":
            console.log("ArrowLeft");
            break;
        }
        switch (e.key) {
            case "ArrowRight":
            console.log("ArrowRight");
            break;

            default:
            break;
        }
    });

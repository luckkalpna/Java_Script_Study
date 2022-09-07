// Game Constant & Variable
let direction = {x: 0, y: 0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('game-over.mp3');
const musicSound = new Audio('background.mp3');
let speed = 2;
lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]






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
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.classList.add('food');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        board.appendchild(snakeElement);
    })


}










// Main Logics started here

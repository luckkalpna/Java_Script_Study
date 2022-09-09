// Game Constant & Variable
let inputDir = {x: 0, y: 0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('game-over.mp3');
const musicSound = new Audio('background.mp3');
let speed = 2;
let score = 0;
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
function isCollide(sarr){
    // If you bump into yourself
    for(let i = 1; i < snakeArr.length; i++){
        if(snake[i].x === snake[0].y && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0){
        return true;
    }
    return true;
}

function gameEngine(){
    // Part 1: Updating the Snake array and Food
    if (isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over. Press any key to play continue.");
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        scoreBox += 1;
        score.innerHTML = "Score:" + score; 
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
    }

    // Moving the snake
    for(let i = snakeArr.length - 2; i>=0; i--){
        const element = snakeArr[i];
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the Snake and Food
    // Display the Snake
        board.innerHTML = "";
        snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
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
};

// Main Logics started here
    window.requestAnimationFrame(Main);
    window.addEventListener('keydown', e=>{
        inputDir = {x: 0, y: 1}
        musicSound.play();
        switch (e.key) {
            case "Arrowup":
            inputDir.x = 0;
            inputDir.y = -1;
            console.log("ArrowUp");
            break;
        
            case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            console.log("ArrowDown");
            break;
        
            case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            console.log("ArrowLeft");
            break;
        
            case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            console.log("ArrowRight");
            break;

            default:
            break;
        }
    });

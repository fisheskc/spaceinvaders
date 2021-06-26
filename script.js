const btn_start = document.querySelector(".startButton");
const myShip = document.querySelector(".myShip");
const container = document.querySelector(".container");
const fireme = document.querySelector(".fireme");
const scoreOutput = document.querySelector(".score");
// the container element in position to the viewport
let containerDim = container.getBoundingClientRect();
btn_start.addEventListener("click", startGame);
let player = {
    score: 0,
    speed: 5,
    gameOver: true,
    fire: false,
    alienSpeed: 5
}

// let keyV = {};

// document.addEventListener("DOMContentLoaded",handleKeyPress)

const allowKey = {
    37:"left",
    39:"right",
    32:"space",
    38:"up"
}

document.addEventListener("keydown",function(e){
    if (e.defaultPrevented) {
        return; // Do nothing if event already handled
       }
    console.log(e.code)
    switch(e.code) {
    // case "left":
    case "allowKey[37]":
    case "ArrowLeft":
         handleKeyPress("left");
         break;

    //  case "right":
    case "allowKey[39]":
    case "ArrowRight":
    handleKeyPress("right");
    break;

    //  case "up":
    case "allowKey[38]":
    case "ArrowUp":
    handleKeyPress("up");
    break;

    //  case "down":
    case "allowKey[32]":
    case "spacebar":
    handleKeyPress("spacebar");
    break;

        }
    }, true)

    document.addEventListener("keyup", function (e) {
        if (e.defaultPrevented) {
            return; // Do nothing if event already handled
           }
            if (e.code === "allowKey[37]" &&  e.code === "ArrowLeft") {
                allowKey.left = false;
            }
            else if (e.code === "allowKey[39]" &&  e.code === "ArrowRight") {
                allowKey.right = false;
            }
            console.log(allowKey);
    }, true)

    function handleKeyPress(key) {
        console.log(key);
        if(key === "right") {
            allowKey.right = true;
        }
        if(key === "left") {
            allowKey.left = true;
        }
        if(key === "spacebar" || key === "ArrowUp") {
            player.fire = true;
        }
        console.log(allowKey);
    
    }

    function startGame() {
        console.log("start game");
    }
const btn_start = document.querySelector(".startButton");
        const myShip = document.querySelector(".myShip");
        const container = document.querySelector(".container");
        const fireme = document.querySelector(".fireme");
        const scoreOutput = document.querySelector(".score");
        const containerDim = container.getBoundingClientRect();
        btn_start.addEventListener("click", startGame);
        let player = {
            score: 0,
            speed: 5,
            gameOver: true,
            fire: false,
            alienSpeed: 5
        };
        let keyV = {};
        document.addEventListener("keydown", function (e) {
            let key = e.code;
            console.log(key);
            if (key === 37) {
                keyV.left = true;
            }
            else if (key === 39) {
                keyV.right = true;
            }
            else if (key === 38 || key === 32) {
                if(!player.fire) {
                    addShoot()
                }
            }
            console.log(keyV);
        })
        document.addEventListener("keyup", function (e) {
            let key = e.code;
            if (key === 37) {
                keyV.left = false;
            }
            else if (key === 39) {
                keyV.right = false;
            }
            console.log(keyV);
        })

        // adds player shooting here
        function addShoot() {
            player.fire = true;
            fireme.classList.remove("hide");
            //where it is located on the screen (myShip.offSetLeft)
            // halfway positioning of where X is on screen
            fireme.xpos = (myShip.offSetLeft + (myShip.offSetWidth/2))
            // halfway positioning of where Y is on screen
            fireme.ypos = myShip.offSetTop - 10;
            // X position of fire psoition
            fireme.style.left = fireme.xpos + "px";
            fireme.style.top = fireme.ypos + "px";

        }

        function startGame() {
            if(player.gameOver) {
                player.gameOver = false;
                btn_start.style.display = "none";
                player.alienSpeed = 5;
                setupAliens(5);
                console.log("start game");
                player.animFrame = requestAnimationFrame(update);
            }
        }

        function setupAliens(num) {
            // dynamic width so it changes all the time
            let lastCol = containerDim.width -200;
            // position of the Aliens object values
            let row = {
                x:(lastCol % 100)/2,
                y: 50
            }
            let tempWidth = 100;
            // will show the number of aliens
            for(let x = 0; x < num; x++) {
                if(row.x > (lastCol - tempWidth)) {
                    row.y += 70;
                    row.x = (lastCol % 100/2);
                };
                // updating of the positions before alien is created
                alienMaker(row,tempWidth);
            }
        }
        function alienMaker(row, tempWidth) {
            // this value of row
            console.log(row)
        }


        function update() {
            //this returns the number of pixels offSetLeft, for upper left corner, current element
            // gets your left position a pixel value
            let tempPos = myShip.offSetLeft;

            if(player.fire) {
                if(fireme.ypos > 0) {
                // changes the y position here
                  fireme.ypos -= 15;
                  fireme.style.top = fireme.ypos + "px";
                } else {
                    // resets the fire position back again and allows the player to shoot
                    player.fire = false
                    fireme.classList.add("hide");
                    fireme.ypos = containerDim.height + 100;
                }
                
            }

            if(keyV.left && tempPos > containerDim.left) {
                tempPos -= player.speed;
            }
            // calculates ships myShip.offsetWidth from the right side
            // restricts the boundary of the ship in the container
            if(keyV.right && (tempPos + myShip.offsetWidth) < containerDim.right) {
                tempPos += player.speed;
            }
            myShip.style.left = tempPos + "px";
            // this will constantly up this func
            player.animFrame = requestAnimationFrame(update);
        }
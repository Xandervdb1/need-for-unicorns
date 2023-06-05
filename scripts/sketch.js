//ARRAYS
let roadMarking = [];
let unicorns = [];
let obstacles =[];

//GAME VARS
let score = 0;
let level = 1;
let lives = 3;
let gameOver = false;

//PLAYER
let player = new Motorcycle(90,400,3);
let playerLane = 2;
let scrollSpeed = 3;

//BACKGROUND + SOUND
let bgImg;
let imgx1 = 0;
let imgx2 = 960;
let hitsound;
let unmuted = false;

function preload(){
    hitsound = loadSound("assets/hit_marker_sound.mp3");
    bgImg = loadImage("assets/houses-final.png");
    pressStartFont = loadFont("assets/pressStartFont.ttf");
}

function setup(){
    createCanvas(960, 540);
}

//1ste keer wegmarkeringen + starten van obstakels en eenhoorns te maken
makeRoadArray();
unicornIntervalLevel1 = setInterval(makeUnicornObstacleArray, 2000);

function draw(){
    //kleur lucht
    background("#87ceeb");

    //text bovenaan
    strokeWeight(1);
    fill(0);
    textSize(20);
    textFont(pressStartFont);
    text("Score: "+score, 50, 35);
    text("Level: "+level, 380, 35);
    text("Lives: "+lives, 750,35);

    //game mechanics & logica
    moveBackground();
    displayUnicorns();
    displayObstacles();
    player.display();
    hitDetection();
    
    //game-over scherm wanneer gameOver true is
    if (gameOver == true) {
        textSize(50);
        fill(255,0,0);
        text("Game Over!", 230, 400);
        textSize(30);
        text("Hit Space to retry", 210,500);
    }
}
/*                                                                                                                
                                        INCREASE SPEED
                                                                                                                  */
//snelheid omhoog laten gaan per x-aantal eenhoorns geraakt te hebben//
function updateSpeed(){
    switch (score) {
        /* Bij 5 eenhoorns geraakt te hebben: scrollspeed en level omhoog, arrays leegmaken voor eenhoorns, obstakels en wegmarkeringen, oude interval clearen en nieuw 
        array voor eenhoorns en obstakels maken met hogere snelheid, wegmarkeringen opnieuw tonen aan hogere snelheid en achtergrond resetten (voorkomen dat er een gap
        tussen de twee afbeeldingen komt) */
        case 5:
            //snellere scroll + level omhoog
            scrollSpeed = 5;
            level = 2;

            //trager interval gaat uit
            clearInterval(unicornIntervalLevel1);

            //arrays leeg
            unicorns.length = 0;
            roadMarking.length = 0;
            obstacles.length = 0;

            //interval versnelt
            unicornIntervalLevel2 = setInterval(makeUnicornObstacleArray, 1500);

            //een nieuwe wegmarkering array + achtergrond wordt opnieuw gezet zodat er geen gap komt bij versnelling
            makeRoadArray();
            imgx1 = 0;
            imgx2 = 960;
            break;
        //idem case 5, maar bij 20 eenhoorns
        case 20:
            scrollSpeed = 8;
            level = 3;

            clearInterval(unicornIntervalLevel2);

            unicorns.length = 0;
            roadMarking.length = 0;
            obstacles.length = 0;

            unicornIntervalLevel3 = setInterval(makeUnicornObstacleArray, 800);

            makeRoadArray();
            imgx1 = 0;
            imgx2 = 960;
            break;
        //idem case 5, maar bij 60 eenhoorns
        case 60:
            scrollSpeed = 10;
            level = 4;

            clearInterval(unicornIntervalLevel3);

            unicorns.length = 0;
            roadMarking.length = 0;
            obstacles.length = 0;

            unicornIntervalLevel4 = setInterval(makeUnicornObstacleArray, 700);

            makeRoadArray();
            imgx1 = 0;
            imgx2 = 960;
            break;
        //idem case 5, maar bij 100 eenhoorns
        case 100:
            scrollSpeed = 12;
            level = 5;

            clearInterval(unicornIntervalLevel4);

            unicorns.length = 0;
            roadMarking.length = 0;
            obstacles.length = 0;

            unicornIntervalLevel5 = setInterval(makeUnicornObstacleArray, 500);

            makeRoadArray();
            imgx1 = 0;
            imgx2 = 960;
            break;        
    }
}
/*                                                                                                                
                                        COLLISION DETECTION
                                                                                                                  */
//de game controleert heel de tijd of er collision is tussen speler en eenhoorns of speler en obstakel
function hitDetection(){
    //eenhoorns - speler: bij hit wordt eenhoorn niet meer getoond + score omhoog + gecheckt of speed en level omhoog moeten
    for (let i = 0; i < unicorns.length; i++) {
    //kijkt of de motor collide met een unicorn EN of de unicorn op hetzelfde baanvak staat als de speler
        if (collideRectPoly(unicorns[i].x-50,unicorns[i].y-45,70,40,polyMotorcycle) && unicorns[i].y == 310 && playerLane == 1) {
            //speelt enkel een sound wanneer de game niet gemute is
            if (unmuted == true) {
                hitsound.play();                
            }

            //unicorn verdwijnt
            unicorns.shift();

            //score omhoog
            score ++;

            //kijkt of de game moet versnellen
            updateSpeed();
        } else if (collideRectPoly(unicorns[i].x-50,unicorns[i].y-45,70,40,polyMotorcycle) && unicorns[i].y == 400 && playerLane == 2) {
            if (unmuted == true) {
                hitsound.play();                
            }
            unicorns.shift();
            score ++;
            updateSpeed();
        } else if (collideRectPoly(unicorns[i].x-50,unicorns[i].y-45,70,40,polyMotorcycle) && unicorns[i].y == 490 && playerLane == 3) {
            if (unmuted == true) {
                hitsound.play();                
            }
            unicorns.shift();
            score ++;
            updateSpeed();
        }
    }
    
    //obstakels - speler: bij hit wordt obstakel niet meer getoond + leven omlaag + gecheckt of levens op 0 staan
    for (let i = 0; i < obstacles.length; i++) {
    //kijkt of de motor collide met een obstakel EN of het obstakel op hetzelfde baanvak staat als de speler
        if (collideRectPoly(obstacles[i].x-30,obstacles[i].y-30,80,45,polyMotorcycle) && obstacles[i].y == 310 && playerLane == 1) {
            //obstakel verdwijnt
            obstacles.shift();

            //leven eraf
            lives --;

            //kijkt of levens op 0 staat
            checkGameOver();
        } else if (collideRectPoly(obstacles[i].x-30,obstacles[i].y-30,80,45,polyMotorcycle) && obstacles[i].y == 400 && playerLane == 2) {
            obstacles.shift();
            lives --;
            checkGameOver();
        } else if (collideRectPoly(obstacles[i].x-30,obstacles[i].y-30,80,45,polyMotorcycle) && obstacles[i].y == 490 && playerLane == 3) {
            obstacles.shift();
            lives --;
            checkGameOver();
        }
    }
}
/*                                                                                                                
                                        GAME OVER
                                                                                                                  */

//levens op 0? toon game over scherm + alle arrays leegmaken + intervallen clearen + motor laten verdwijnen + scroll op 0 (gamestate terug naar default)
function checkGameOver(){
    if (lives == 0) {
        gameOver = true;
        scrollSpeed = 0;

        //lege arrays
        obstacles.length = 0;
        unicorns.length = 0;
        roadMarking.length = 0;

        //motor verdwijnt
        player.disappear();

        //kijkt op welk level er game over is gebeurd, en cleart de respectievelijke interval
        switch (level) {
            case 2:
                clearInterval(unicornIntervalLevel2);
                break;
            case 3:
                clearInterval(unicornIntervalLevel3);
                break;
            case 4:
                clearInterval(unicornIntervalLevel4);
                break;
            case 5:
                clearInterval(unicornIntervalLevel5);
                break;
        }
    }
}
/*                                                                                                                
                                        ARRAYS
                                                                                                                  */

//eenhoorns + obstakels array
function makeUnicornObstacleArray(){
    //random banen kiezen voor eenhoorn en obstakel
    let unicornLane = randomInteger(3,1);
    let obstacleLane = randomInteger(3,1);

    //checken of eenhoorn op zelfde baan als obstakel staat, indien true opnieuw een lane kiezen
    if (unicornLane == obstacleLane) {
        makeUnicornObstacleArray();
    } else {
        /*maak een eenhoorn naargelang de random baan + in array zetten 
        ALS het baanvak voor unicorn 1 is DAN is y 310, anders ALS baanvak 2 DAN y 400, anders ALS baanvak 3 DAN y 490*/
        if (unicornLane == 1) {
            let unicornLane1 = new Unicorn(1000, 310, scrollSpeed, color(randomInteger(255,0),randomInteger(255,0),randomInteger(255,0)))
            unicorns.push(unicornLane1);
        } else if (unicornLane == 2) {
            let unicornLane2 = new Unicorn(1000, 400, scrollSpeed, color(randomInteger(255,0),randomInteger(255,0),randomInteger(255,0)))
            unicorns.push(unicornLane2);
        } else if (unicornLane == 3) {
            let unicornLane3 = new Unicorn(1000, 490, scrollSpeed, color(randomInteger(255,0),randomInteger(255,0),randomInteger(255,0)))
            unicorns.push(unicornLane3);
        }
        //op level 1 komen geen obstakels, spawnen links van de canvas, 1 pixel voor ze despawnen
        if (level == 1) {
            if (obstacleLane == 1) {
                let obstacleLane1 = new Obstacle(-19, 310, scrollSpeed)
                obstacles.push(obstacleLane1);
            } else if (obstacleLane == 2) {
                let obstacleLane2 = new Obstacle(-19, 400, scrollSpeed)
                obstacles.push(obstacleLane2);
            } else if (obstacleLane == 3) {
                let obstacleLane3 = new Obstacle(-19, 490, scrollSpeed)
                obstacles.push(obstacleLane3);
            }
        /*obstakel aanmaken naargelang de random baan + in array zetten 
        ALS het baanvak voor obstakel 1 is DAN is y 310, anders ALS baanvak 2 DAN y 400, anders ALS baanvak 3 DAN y 490*/
        } else {
            if (obstacleLane == 1) {
                let obstacleLane1 = new Obstacle(randomInteger(1300,1100), 310, scrollSpeed)
                obstacles.push(obstacleLane1);
            } else if (obstacleLane == 2) {
                let obstacleLane2 = new Obstacle(randomInteger(1300,1100), 400, scrollSpeed)
                obstacles.push(obstacleLane2);
            } else if (obstacleLane == 3) {
                let obstacleLane3 = new Obstacle(randomInteger(1300,1100), 490, scrollSpeed)
                obstacles.push(obstacleLane3);
            }
        }
    }

}

//wegmarkeringen in een array zetten
function makeRoadArray(){
    let marking = new RoadMarking();
    //wegmarkering wordt herhaald op x-as en in een array gezet
    for (marking.x = 0; marking.x < 960; marking.x += 58) {
        let markingTop = new RoadMarking(marking.x, 356.25, 20, 7.5, "#EEFF33", scrollSpeed);
        let markingBottom = new RoadMarking(marking.x, 446.25, 20, 7.5, "#EEFF33", scrollSpeed);
        roadMarking.push(markingTop);
        roadMarking.push(markingBottom);
    }
}

/*                                                                                                                
                                            VISUALS
                                                                                                                  */

/*toon wegmarkeringen en de weg + achtergrond + beweging 
Voor de scrollende background heb ik geraadpleegd:
https://editor.p5js.org/chjno/sketches/ByZlypKWM*/
function moveBackground(){
    //background wordt klaargezet
    image(bgImg, imgx1, 23, width, 270);
    image(bgImg, imgx2, 23, width, 270);

    //background beweegt naar links
    imgx1 -= scrollSpeed;
    imgx2 -= scrollSpeed;

    //wanneer background links uit beeld is, net uit beeld rechts plaatsen
    if (imgx1 < -955) {
        imgx1 = 960;
    }
    if (imgx2 < -955) {
        imgx2 = 960;
    }

    //straat tekenen
    noStroke();
    fill(75);
    rect(0, 270, width, 270);

    //wegmarkeringen tekenen
    for (let i = 0; i < roadMarking.length; i++) {
        //als wegmarkering links uit beeld is, rechts net uit beeld plaatsen
        if (roadMarking[i].x <= -20) {
            roadMarking[i].x = 960;
        }
        //wegmarkeringen tekenen
        else {
           roadMarking[i].display(); 
        }
    }
}

//toon obstakels + laat verdwijnen wanneer uit beeld
function displayObstacles(){
    for (let i = 0; i < obstacles.length; i++) {
        //waneer obstakel uit beeld is, laten verdwijnen zodat het geen geheugen in beslag neemt
        if (obstacles[i].x <= -20) {
            obstacles.shift();
        }
    }

    for (let i = 0; i < obstacles.length; i++) {
        //hele array obstakels wordt getoond
        obstacles[i].display();
    }
}

//toon eenhoorns + laat verdwijnen wanneer uit beeld
function displayUnicorns(){
    for (let i = 0; i < unicorns.length; i++) {
        //wanneer unicorn uit beeld is, laten verdwijnen zodat het geen geheugen in beslag neemt
        if (unicorns[i].x <= -20) {
            unicorns.shift();
        }
    }

    for (let i = 0; i < unicorns.length; i++) {
        //hele array unicorns wordt getoond
        unicorns[i].display(); 
    }
}

/*                                                                                                                
                                        CONTROLS
                                                                                                                  */
/*Wanneer de speler pijltjes toetsen omlaag en omhoog indrukken, gaat de brommer respectievelijk omlaag of omhoog
De functie werkt doet niets wanneer de brommer op het hoogste of laagste baanvak staat, en de speler respectievelijk omhoog of omlaag wil bewegen, uit de voorziene baanvakken
Dit is ook iets waarvoor ik eerst heb opgezocht hoe toetsen indrukken werkt met p5js
https://editor.p5js.org/2sman/sketches/rkGp1alib */
function keyPressed(){
    if (keyCode == UP_ARROW && playerLane == 2) {
        player.y = 310;
        playerLane = 1;
    } else if (keyCode == DOWN_ARROW && playerLane == 2) {
        player.y = 490;
        playerLane = 3;
    } else if (keyCode == UP_ARROW && playerLane == 3) {
        player.y = 400;
        playerLane = 2;
    } else if (keyCode == DOWN_ARROW && playerLane == 1) {
        player.y = 400;
        playerLane = 2;
    }
    /*om te restarten wanneer game-over is, spatie drukken (dit refresht de pagina) 
    https://www.quackit.com/javascript/javascript_refresh_page.cfm#:~:text=In%20JavaScript%2C%20you%20refresh%20the,server%20(instead%20of%20cache).*/
    if (keyCode == 32 && gameOver ==true) {
        location.reload();
    }
}

/*                                                                                                                
                                        BUTTON
                                                                                                                  */
/* omdat google chrome het niet toestaat om geluid af te spelen zonder dat er interactie is, laat ik de game muted starten
wanneer de gebruiker op de knop klikt kan hij/zij het geluid toggelen */
let mutebtn = document.querySelector(".mutebtn")

mutebtn.addEventListener("click", sound);

function sound() {
    if (unmuted == false) {
        unmuted = true;
        mutebtn.src = "assets/unmuted.png"
    } else {
        unmuted = false;
        mutebtn.src = "assets/muted.png"
    }
}

/*                                                                                                                
                                        RANDOM NUMBER
                                                                                                                  */
/*omdat de random functie van p5.js niet overal in het script wilt werken (zoals bevonden in de feedbacksessie is dit omdat ik de random functie aanroep
voor de setup functie aangeroepen wordt) heb ik een externe functie gebruikt om random gehele getallen tussen 2 getallen te maken
https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript */
function randomInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
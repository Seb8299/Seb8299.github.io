let shapes = [];

let food;

let WIDTH = 800;
let HEIGHT = 800;

let pSize = 40;

let gameState = 3;

let deltaTime;

let points;

let pX;
let pY;

function setup() {
    
    let WIDTH = 800;
    let HEIGHT = 800;
    
    createCanvas(WIDTH, HEIGHT);

    shapes = [];

    shapes.push(new Shape(WIDTH/2+cos(TWO_PI*1/5)*WIDTH/3, HEIGHT/2+sin(TWO_PI*1/5)*HEIGHT/3, "CIRCLE"));
    shapes.push(new Shape(WIDTH/2+cos(TWO_PI*2/5)*WIDTH/3, HEIGHT/2+sin(TWO_PI*2/5)*HEIGHT/3, "BOX"));
    shapes.push(new Shape(WIDTH/2+cos(TWO_PI*3/5)*WIDTH/3, HEIGHT/2+sin(TWO_PI*3/5)*HEIGHT/3, "RECTANGLE2"));
    shapes.push(new Shape(WIDTH/2+cos(TWO_PI*4/5)*WIDTH/3, HEIGHT/2+sin(TWO_PI*4/5)*HEIGHT/3, "RECTANGLE"));
    shapes.push(new Shape(WIDTH/2+cos(TWO_PI*5/5)*WIDTH/3, HEIGHT/2+sin(TWO_PI*5/5)*HEIGHT/3, "TRIANGLE"));

    deltaTime = millis();

    points = 0;
    
    noCursor();

    food = new Food()
    
}

function drawPlayer() {
    pX = mouseX;
    pY = mouseY;

    if (mouseX < 0+pSize/2) {
        pX = 0+pSize/2;
    } 
    else if (mouseX > WIDTH-pSize/2) {
        pX = WIDTH-pSize/2;
    } 
    if (mouseY < 0+pSize/2) {
        pY = 0+pSize/2;
    } 
    else if (mouseY > WIDTH-pSize/2) {
        pY = WIDTH-pSize/2;
    } 

    let c = color(255, 204, 0);
    fill(c);
    circle(pX, pY, pSize);
}

function draw() {
    background(55,55,64);
    noStroke();
    let highscore = localStorage.getItem("score");
    if (highscore == null) {
        highscore = 0;
    }

    if (gameState == -2) {

        console.log(highscore);

        if (highscore < points) {

            localStorage.setItem("score", points);
        }

        let c = color(255, 255, 255);
        fill(c);
        textSize(50);
        textAlign(CENTER);
        text("HIGHSCORE:", WIDTH/2, HEIGHT/2-200);
        textAlign(CENTER);
        text(points, WIDTH/2, HEIGHT/2-140);


        c = color(255, 255, 255);
        fill(c);
        textSize(50);
        textAlign(CENTER);
        text("BEST:", WIDTH/2, HEIGHT/2-70);
        textAlign(CENTER);
        text(highscore, WIDTH/2, HEIGHT/2);

        cursor();
        
        c = color(31,31,51);
        fill(c);
        rect(WIDTH/2-100, HEIGHT/2+70, 200, 70, 10);
        c = color(255, 255, 255);
        fill(c);
        textSize(40);
        textAlign(CENTER);
        text("Restart", WIDTH/2, HEIGHT/2+120);

        return;
    }

    if (gameState >= 0) {
        
        stroke(255, 255, 255);
        noFill();
        circle(WIDTH/2, HEIGHT/2, 250);
        noStroke();
        
        drawPlayer();

        let c = color(255, 255, 255);
        fill(c);
        textSize(100);
        textAlign(CENTER);
        text(gameState, WIDTH/2, HEIGHT/2);

        if (millis() - deltaTime >= 1000) {
            
            gameState -= 1;
            deltaTime = millis();
        }

        return;
    }
    
    drawPlayer();
    food.draw();

    if (food.collision()) {
        points += 1;
        food.newPos();
    }

    shapes.forEach(shape => {
        shape.update();

        if (shape.collision()) {

            gameState = -2;
            return;
        }
    });

    shapes.forEach(shape => {
        shape.draw();
    });

    let c = color(255, 255, 255);
    fill(c);
    textSize(40);
    textAlign(CENTER);
    text(points + " / " + highscore, WIDTH/2, 50);
}


function mouseClicked() {
    if (gameState == -2) {
        if (mouseX > WIDTH/2-100 && mouseX < WIDTH/2+100 &&
        mouseY > HEIGHT/2+70 && mouseY < HEIGHT/2+140) {
            gameState = 3;
            setup();
        }
    }
    
  }
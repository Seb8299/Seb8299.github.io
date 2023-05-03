class Shape{


    constructor(posX, posY, shape) {
        this.x = posX;
        this.y = posY;
        let r = Math.random()*TWO_PI;
        this.mX = Math.cos(r);
        this.mY = Math.sin(r);
        this.shape = shape;


        this.speed = 2;

        if (this.shape == "CIRCLE"){
            this.width = 150;
            this.height = 150;
        }
        else if (this.shape == "BOX") {
            this.width = 200;
            this.height = 200;
        }
        else if (this.shape == "RECTANGLE") {
            this.width = 300;
            this.height = 100;
        }
        else if (this.shape == "RECTANGLE2") {
            this.width = 100;
            this.height = 300;
        }
        else if (this.shape == "TRIANGLE") {
            this.width = 200;
            this.height = 200*Math.sqrt(3)/2;
        }

    }

    update() {
        this.speed = (points/20)+2;
        this.x += this.mX*this.speed;
        this.y += this.mY*this.speed;

        if (this.x < 0+this.width/2) {
            this.mX *= -1;
        } 
        else if (this.x > WIDTH-this.width/2) {
            this.mX *= -1;
        } 
        else if (this.y < 0+this.height/2) {
            this.mY *= -1;
        } 
        else if (this.y > WIDTH-this.height/2) {
            this.mY *= -1;
        } 
    }

    collision() {
        if (this.shape == "CIRCLE"){
            // console.log("collision");
            return (dist(pX, pY, this.x, this.y) < this.width/2+pSize/2);
        }
        else if (this.shape == "BOX") {
            // console.log("BOX");
            return (pX > this.x-this.width/2-pSize/2 && pX < this.x-this.width/2+this.width+pSize/2 &&
            pY > this.y-this.height/2-pSize/2 && pY < this.y-this.height/2+this.height+pSize/2);
        }
        else if (this.shape == "RECTANGLE") {
            // console.log("RECTANGLE");
            return (pX > this.x-this.width/2-pSize/2 && pX < this.x-this.width/2+this.width+pSize/2 &&
            pY > this.y-this.height/2-pSize/2 && pY < this.y-this.height/2+this.height+pSize/2);
        }
        else if (this.shape == "RECTANGLE2") {
            // console.log("RECTANGLE2");
            return (pX > this.x-this.width/2-pSize/2 && pX < this.x-this.width/2+this.width+pSize/2 &&
            pY > this.y-this.height/2-pSize/2 && pY < this.y-this.height/2+this.height+pSize/2);
        }
        else if (this.shape == "TRIANGLE") {
            let x1 = this.x-this.width/2;
            let y1 = this.y+this.height/2;
            let x2 = this.x+this.width/2;
            let y2 = this.y+this.height/2;
            let x3 = this.x;
            let y3 = this.y-this.height/2;

            let areaOrig = Math.abs( (x2-x1)*(y3-y1) - (x3-x1)*(y2-y1) );

            let area1 =    Math.abs( (x1-pX)*(y2-pY) - (x2-pX)*(y1-pY) );
            let area2 =    Math.abs( (x2-pX)*(y3-pY) - (x3-pX)*(y2-pY) );
            let area3 =    Math.abs( (x3-pX)*(y1-pY) - (x1-pX)*(y3-pY) );

            if (area1 + area2 + area3 == areaOrig) {
                return true;
            }
            return false;
        
            console.log("TRIANGLE");
            // return (pX > this.x-pSize && pX < this.x+this.width+pSize &&
            // pY > this.y-pSize && pY < this.y+this.height+pSize);
        }
    }

    draw() {
        if (this.shape == "CIRCLE"){
            let c = color(255,69,0);
            fill(c);
            circle(this.x, this.y, this.width);
        }
        else if (this.shape == "BOX") {
            let c = color(124,252,0);
            fill(c);
            rect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        }
        else if (this.shape == "RECTANGLE") {
            let c = color(0,191,255);
            fill(c);
            rect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        }
        else if (this.shape == "RECTANGLE2") {
            let c = color(0,0,205);
            fill(c);
            rect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        }
        else if (this.shape == "TRIANGLE") {
            let c = color(139,0,139);
            fill(c);
            triangle(
                this.x-this.width/2, this.y+this.height/2, 
                this.x+this.width/2, this.y+this.height/2, 
                this.x, this.y-this.height/2
                );
        }

    }

}
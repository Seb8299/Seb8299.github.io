class Food{


    constructor() {
        
        this.size = 40;
        
        this.speed = 2;
        this.x = 0;
        this.y = 0;
        
        this.newPos();
    }

    newPos() {
        
        this.x = random(WIDTH-this.size*2)+this.size;
        this.y = random(HEIGHT-this.size*2)+this.size;
    }

    collision() {
        return (dist(pX, pY, this.x, this.y) < this.size/2+pSize/2);
    }

    draw() {
        circle(this.x, this.y, this.size);
    }

}
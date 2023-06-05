class Obstacle{
    constructor(xCoord, yCoord, speed){
        this.x = xCoord;
        this.y = yCoord;
        this.v = speed;
    }

    display(){
        fill(225);
        strokeWeight(1);
        stroke(0);

        beginShape();
            vertex(this.x -25, this.y -20);
            vertex(this.x -20, this.y -20);
            vertex(this.x -25, this.y +20);
            vertex(this.x -30, this.y +20);
        endShape(CLOSE);

        beginShape();
            vertex(this.x -20, this.y -20);
            vertex(this.x -15, this.y -20);
            vertex(this.x -10, this.y +10);
            vertex(this.x -15, this.y +10);
        endShape(CLOSE);

        beginShape();
            vertex(this.x +10, this.y -20);
            vertex(this.x +15, this.y -20);
            vertex(this.x +20, this.y +20);
            vertex(this.x +15, this.y +20);
        endShape(CLOSE);

        beginShape();
            vertex(this.x +15, this.y -20);
            vertex(this.x +20, this.y -20);
            vertex(this.x +25, this.y +10);
            vertex(this.x +20, this.y +10);
        endShape(CLOSE);

        fill(0);

        beginShape();
            vertex(this.x -30, this.y -30);
            vertex(this.x +20, this.y -20);
            vertex(this.x +20, this.y -10);
            vertex(this.x -30, this.y -20);
        endShape(CLOSE);

        beginShape();
            vertex(this.x -30, this.y -10);
            vertex(this.x +20, this.y);
            vertex(this.x +20, this.y +10);
            vertex(this.x -30, this.y);
        endShape(CLOSE);

        this.x -= this.v;
    }
}
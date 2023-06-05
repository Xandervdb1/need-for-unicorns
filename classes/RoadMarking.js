class RoadMarking{
    constructor(xCoord, yCoord, width, height, color, speed){
        this.x = xCoord;
        this.y = yCoord;
        this.w = width;
        this.h = height;
        this.c = color;
        this.v = speed;
    }

    display(){
        noStroke();
        fill(this.c);
        rect(this.x, this.y, this.w, this.h);
        this.x -= this.v;
    }
}
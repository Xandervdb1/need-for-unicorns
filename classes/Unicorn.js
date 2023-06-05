let polyUnicorn = [];

class Unicorn{
    constructor(xCoord, yCoord, speed, color){
        this.x = xCoord;
        this.y = yCoord;
        this.v = speed;
        this.c = color;
    }

    display(){
        fill(this.c);
        stroke(0);
        strokeWeight(3);
        beginShape();  
            vertex(this.x+15,this.y-15);
            vertex(this.x+20,this.y-10);
            vertex(this.x+20,this.y+5);
            vertex(this.x+15,this.y+15);
            vertex(this.x+15,this.y+30);
            vertex(this.x+10,this.y+30);
            vertex(this.x+10,this.y+15);
            vertex(this.x+2.5,this.y+5);
            vertex(this.x+5,this.y+10);
            vertex(this.x-7.5,this.y+10);
            vertex(this.x-5,this.y+5);
            vertex(this.x-15,this.y+25);
            vertex(this.x-15,this.y+30);
            vertex(this.x-20,this.y+30);
            vertex(this.x-20,this.y+25);
            vertex(this.x-17.5,this.y+15);
            vertex(this.x-20,this.y+5);
            vertex(this.x-25,this.y-5);
            vertex(this.x-25,this.y-20);
            vertex(this.x-35,this.y-22.5);
            vertex(this.x-45,this.y-20);
            vertex(this.x-50,this.y-25);
            vertex(this.x-45,this.y-30);
            vertex(this.x-35,this.y-35);
            vertex(this.x-45,this.y-45);
            vertex(this.x-42.5,this.y-32.5);
            vertex(this.x-25,this.y-40);
            vertex(this.x-25,this.y-35);
            vertex(this.x-15,this.y-25);
            vertex(this.x-10,this.y-15);
        endShape(CLOSE);

        fill(255,0,0);
        noStroke();
        circle(this.x-30, this.y-30,5);
        stroke(0);
        strokeWeight(3);
        line(this.x-35, this.y-30, this.x-30, this.y-32.5);

        this.x -= this.v
    }
}
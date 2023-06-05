let polyMotorcycle = [];

class Motorcycle{
    constructor (xCoord, yCoord, speed) {
        this.x = xCoord;
        this.y = yCoord;
        this.v = speed;
    }


    display(){
        noStroke();
        fill("#adadad");
        circle(this.x +(65*(2/3)), this.y +(20*(2/3)), (50*(2/3)));
        circle(this.x -(60*(2/3)), this.y +(20*(2/3)), (50*(2/3)));
        noFill();
        stroke(0);
        strokeWeight(10);
        circle(this.x +(65*(2/3)), this.y +(20*(2/3)), (60*(2/3)));
        circle(this.x -(60*(2/3)), this.y +(20*(2/3)), (60*(2/3)));
        strokeWeight(5);
        fill("#BD162C");
            polyMotorcycle[0] = createVector(this.x -(60*(2/3)), this.y -(40*(2/3)));
            polyMotorcycle[1] = createVector(this.x -(60*(2/3)), this.y -(30*(2/3)));
            polyMotorcycle[2] = createVector(this.x -(30*(2/3)), this.y -(10*(2/3)));
            polyMotorcycle[3] = createVector(this.x -(15*(2/3)), this.y +(30*(2/3)));
            polyMotorcycle[4] = createVector(this.x +(25*(2/3)), this.y +(30*(2/3)));
            polyMotorcycle[5] = createVector(this.x +(30*(2/3)), this.y);
            polyMotorcycle[6] = createVector(this.x +(40*(2/3)), this.y -(10*(2/3)));
            polyMotorcycle[7] = createVector(this.x +(65*(2/3)), this.y +(25*(2/3)));
            polyMotorcycle[8] = createVector(this.x +(75*(2/3)), this.y +(15*(2/3)));
            polyMotorcycle[9] = createVector(this.x +(50*(2/3)), this.y -(20*(2/3)));
            polyMotorcycle[10] = createVector(this.x +(55*(2/3)), this.y -(25*(2/3)));
            polyMotorcycle[11] = createVector(this.x +(55*(2/3)), this.y -(40*(2/3)));
            polyMotorcycle[12] = createVector(this.x +(40*(2/3)), this.y -(35*(2/3)));
            polyMotorcycle[13] = createVector(this.x +(30*(2/3)), this.y -(55*(2/3)));
            polyMotorcycle[14] = createVector(this.x +(5*(2/3)), this.y -(55*(2/3)));
            polyMotorcycle[15] = createVector(this.x, this.y -(50*(2/3)));
            polyMotorcycle[16] = createVector(this.x +(20*(2/3)), this.y -(45*(2/3)));
            polyMotorcycle[17] = createVector(this.x +(30*(2/3)), this.y -(30*(2/3)));
            polyMotorcycle[18] = createVector(this.x +(5*(2/3)), this.y -(20*(2/3)));
            polyMotorcycle[19] = createVector(this.x -(20*(2/3)), this.y -(45*(2/3)));
        beginShape();
            for(let i = 0; i < polyMotorcycle.length; i++){
                vertex(polyMotorcycle[i].x, polyMotorcycle[i].y);
            }
        endShape(CLOSE);
    }

    disappear(){
        this.x = -100;
        this.y = -100;
    }
}
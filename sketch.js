function setup(){
    createCanvas(600, 600)
    //background(20, 200, 200)
}
let posX = 300
let posY = 300
function draw(){
    background(20, 200, 200)
    ellipse(posX, posY, 100, 100)
    posX++; 
    posY--;
}



if (posX <= 30, posY <= 30) {
    posX++;
    posX--;
    
}else { 
    posX--;
    posY++;
} 


// if (posX < 300){
    posX++
    posX--
}

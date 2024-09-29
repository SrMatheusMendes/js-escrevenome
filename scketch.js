function setup() {
    createCanvas(500, 500);
     background("blue");
  }
  
  function draw() {
  
    stroke("yellow");
    fill("red");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 35);
    }
  }
  
function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent ("sketch-parent");
    rectMode(CENTER);
    noCursor();
  }
  
  function draw() {
    background(255, 255, 255);
    
    noStroke();
  
    fill(200, mouseY, mouseX);
    rect(mouseX, mouseY, mouseX, mouseX);
    
    fill(255, 255, 255)
    ellipse(mouseX, mouseY, 10, 10);
    }

    function windowResized() {
        resizeCanvas(innerWidth, innerHeight);
    }
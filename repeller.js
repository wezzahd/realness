class Repeller {
  constructor(x, y) {
    this.power = 0;
    this.position = createVector(x, y);
    this.min = 0;//00;
    this.max =  20;//700;

  }

  display() {
    stroke(255);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 32, 32);
  }

  repel(p) {
    let dir = p5.Vector.sub(this.position, p.position); // Calculate direction of force
    var sine = 1 * sin(TWO_PI * frameCount / 600);
        this.power = map(sine,-1,1, this.min, this.max);

    if (mouseIsPressed) {
        sine = 0;
        this.power = 0;
      }




    let d = dir.mag(); // Distance between objects
    dir.normalize(); // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    d = constrain(d, 5, 100); // Keep distance within a reasonable range
    let force = 1 * this.power / (d * d); // Repelling force is inversely proportional to distance
    dir.mult(force); // Get force vector --> magnitude * direction
    return dir;
  }
};

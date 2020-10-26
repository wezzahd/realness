let particlecount;

class ParticleSystem {
  constructor(position, img_) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle(x, y, rand, img, devWidth, devHeight, touchTime) {
    if (x !== undefined && y !== undefined) {
      this.particles.push(new Particle(x, y, rand, img, devWidth, devHeight, touchTime));
      particlecount = this.particles.length;
    } else {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    }
  }

  run() {
    for (let particle of this.particles) {
      particle.run();
    }

    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }

  applyForce(f) {
    for (let particle of this.particles) {
      particle.applyForce(f);
    }
  }

  intersection() {

    let boundary = new Rectangle(0, 0, width, height);
    let qtree = new QuadTree(boundary, 4);

    for (let particle of this.particles) {
      let point = new Point(particle.position.x, particle.position.y, particle);
      qtree.insert(point);


      let range = new Rectangle(particle.position.x, particle.position.y,
        particle.size_v2 * 2, particle.size_v2 * 2);
      let points = qtree.query(range);

      for (let point of points) {
        let other = point.userData;


        if (particle !== other && particle.intersects(other)) {
          particle.intersectForce();
          // stroke(particle.c);
          // strokeWeight(0.5);
          // //fill(255,40);
          // beginShape(LINES);
          //
          // //if (particle.history.length > 290) {
          // //  let d = dist(particle.position.x, particle.position.x, particle.history[89].x, particle.history[89].y);
          // //  if (d < height) {
          // //    vertex(particle.history[50].x, particle.history[50].y);
          // //  vertex(particle.history[289].x, particle.history[289].y);
          // //  }
          // vertex(particle.position.x, particle.position.y);
          // vertex(other.position.x, other.position.y);
          // //  }
          // endShape(CLOSE);


        }
      }
    }
  }


  behaviors() {
    for (let particle of this.particles) {
      particle.behaviors(mouseX, mouseY);

    }
  }


  return_home() {
    for (let particle of this.particles) {
      particle.velocity.x = 0.0;
      particle.velocity.y = 0.0;
      particle.acceleration.x = -0.1 * (particle.position.x - particle.home.x);
      particle.acceleration.y = -0.1 * (particle.position.y - particle.home.y);
    }
  }

  applyRepeller(r) {
    for (let particle of this.particles) {
      if (particle.local_force == true) {
        let force = r.repel(particle);
        particle.applyForce(force);
      }
    }

  }

}

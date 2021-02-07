class Particle {
    constructor(x, y, r) {
      var options = {
        density:0.5,
        restitution: 0.4,
      };
     
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.x=x;
      this.y=y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y, 10, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(this.x,this.y,20,20);
      pop();
    }
}
class Particle {
    position
    velocity
    
    constructor(x,y,speed,direction){
        this.position = new Vector(x,y)
        this.velocity = new Vector(0,0)
        this.velocity.setLength(speed)
        this.velocity.setAngle(direction)
    }
}
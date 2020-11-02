import Vector from './vectors'
class Particle {
    position
    velocity
    gravity
    
    constructor(x,y,speed,direction,grav = 0){

        this.position = new Vector(x,y)
        this.velocity = new Vector(0,0)
        this.gravity = new Vector(0,grav)

        this.velocity.setLength(speed)
        this.velocity.setAngle(direction)
    }

    accelerate(accel){
        this.velocity.addTo(accel)
    }

    update(){
        this.velocity.addTo(this.gravity)
        this.position.addTo(this.velocity)
    }
}

export default Particle
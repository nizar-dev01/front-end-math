import Vector from './vectors'
class Particle {
    position
    velocity
    gravity
    mass = 1
    
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

    anlgeTo(p2){
        const
            tp = this.position,
            pp = p2.position
        return Math.atan2(pp.getY() - tp.getY(), pp.getY() - tp.getY())
    }

    distanceTo(p2){
        const
            dx = p2.position.getX() - this.position.getX(),
            dy = p2.position.getY() - this.position.getY()
        return Math.sqrt(dx * dx + dy * dy)
    }

    gravitateTo(p2){
        const
            grav = new Vector(0,0),
            dist = this.distanceTo(p2)
        grav.setLength(p2.mass / (dist * dist))
        grav.setAngle(this.anlgeTo(p2))

        this.velocity.addTo(grav)
    }
}

export default Particle
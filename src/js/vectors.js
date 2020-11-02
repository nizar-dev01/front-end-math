class Vector {
    x = 1
    y = 0

    constructor(x,y){
        this.setX(x)
        this.setY(y)
    }

    setX(v){
        this.x = v
    }
    getX(){
        return this.x
    }

    setY(v){
        this.y = v
    }
    getY(){
        return this.y
    }

    setAngle(angle){
        const length = this.getLength()
        this.y = Math.sin(angle) * length
        this.x = Math.cos(angle) * length
    }
    getAngle(){
        return Math.atan2(this.y,this.x)
    }

    setLength(length){
        const angle = this.getAngle()
        this.y = Math.sin(angle) * length
        this.x = Math.cos(angle) * length
    }
    getLength(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    add(v2){
        return new Vector(this.x + v2.getX(), this.y + v2.getY())
    }
    substract(v2){
        return new Vector(this.x - v2.getX(), this.y - v2.getY())
    }
    multiply(v2){
        return new Vector(this.x * v2.getX(), this.y * v2.getY())
    }
    divide(v2){
        return new Vector(this.x / v2.getX(), this.y / v2.getY())
    }

    
    addTo(v2){
        this.x += v2.getX()
        this.y += v2.getY()
    }
    substractFrom(v2){
        this.x -= v2.getX()
        this.y -= v2.getY()
    }
    multiplyBy(val){
        this.x *= val
        this.y *= val
    }
    divideBy(val){
        this.x /= val
        this.y /= val
    }
}
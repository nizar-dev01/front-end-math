import Vector from './vectors'
import Particle from './particles'

window.addEventListener('load',function(){
    initCanvas(canvas)
});



function initCanvas(c){
    const
        width = c.width = window.innerWidth,
        height = c.height = window.innerHeight,
        ctx = c.getContext('2d'),
        p = new Particle(
            100,
            height - 50,
            10,
            -Math.PI/2
        ),
        accel = new Vector(0.1,0.1)
    
    render()
    
    function render(){
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillRect(0,0,width,height)
        ctx.fillStyle = 'rgba(0,0,0,1)'
        // Animation Code
        p.position.addTo(p.velocity)
        p.accelerate(accel)
        const
            px = p.position.getX(),
            py = p.position.getY(),
            startY = 0,
            startX = 0,
            rd = 30
        // Draw
        ctx.beginPath()
        ctx.arc(p.position.getX(),p.position.getY(),rd,0,Math.PI*2,false)
        ctx.fill()
        // Edges
        if(px>=width - rd || px <= startX + rd) p.velocity.setX(-p.velocity.getX())
        if(py>=height - rd || py <= startY + rd) p.velocity.setY(-p.velocity.getY())
        //////////////////////
        requestAnimationFrame(render)
    }
}

new Particle()

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
        sun = new Particle(width/2, height/2, 0, 0),
        planet = new Particle(width/2 + 200, height/2, 10, Math.PI/2)

    sun.mass = 20000

    update()

    function update(){
        ctx.clearRect(0,0,width,height)
        planet.gravitateTo(sun)
        planet.update()

        ctx.beginPath()
        ctx.fillStyle = '#ffff00'
        ctx.arc(sun.position.getX(),sun.position.getY(),20,0,Math.PI * 2,false)
        ctx.fill()
        

        ctx.beginPath()
        ctx.fillStyle = '#00ffff'
        ctx.arc(planet.position.getX(),planet.position.getY(),5,0,Math.PI * 2,false)
        ctx.fill()
        
        requestAnimationFrame(update)
    }
}
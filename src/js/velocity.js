import Vector from './vectors'
import Particle from './particles'


window.addEventListener('load',function(){
    initCanvas(canvas)
});



function initCanvas(c){
    const
        width = c.width = window.innerWidth,
        height = c.height = window.innerHeight,
        ctx = c.getContext('2d')
    
    const
        particles = [],
        particleNum = 100
    for(let i = 0; i<particleNum; i++){
        particles.push(new Particle(
            10,
            10,
            Math.random() * 2+ 1,
            Math.PI * Math.random() * 2
        ))
    }
    
    render()
    
    function render(){
        ctx.fillStyle = 'rgba(225,225,225,1)'
        ctx.fillRect(0,0,width,height)
        ctx.fillStyle = 'rgba(0,0,0,1)'
        particles.forEach(p=>{
            p.position.addTo(p.velocity)
            const
                px = p.position.getX(),
                py = p.position.getY(),
                startY = 0,
                startX = 0,
                rd = 3

            ctx.beginPath()
            ctx.arc(p.position.getX(),p.position.getY(),rd,0,Math.PI*2,false)
            ctx.fill()
            if(px>=width - rd || px <= startX + rd) p.velocity.setX(-p.velocity.getX())
            if(py>=height - rd || py <= startY + rd) p.velocity.setY(-p.velocity.getY())
        })
        requestAnimationFrame(render)
    }
}

new Particle()

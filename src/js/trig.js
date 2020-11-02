import Vector from './vectors'
import Particle from './particles'

window.addEventListener('load',function(){
    initCanvas(canvas)
});



function initCanvas(c){
    const
        width = c.width = window.innerWidth,
        height = c.height = window.innerHeight,
        ct = c.getContext('2d'),
        sAgnle = 0,
        eAngle = Math.PI * 2
  
    let
        centerX = width * 0.5,
        centerY = height * 0.5,
        radius = 300,
        angle = 0,
        count = 10,
        slice = Math.PI * 2 / count,
        velocity = -0.01,
        displacement = 0
 
    render()
    
    function render(){
        const
            acw = false
            ct.fillStyle = `rgba(225,225,225,0.1)`
            ct.fillRect(0,0,width,height)
            for(let i = 0; i<count; i++){
                angle = i * slice + displacement;
                const
                    x =  centerX + Math.sin(angle) * radius,
                    y =  centerY + Math.cos(angle) * radius
                ct.beginPath()
                ct.arc(
                    x,
                    y,
                    30,
                    sAgnle,
                    eAngle,
                    acw
                )
                ct.fillStyle = `#000000`
                ct.fill()
        }
        displacement += velocity
        requestAnimationFrame(render)
    }
}

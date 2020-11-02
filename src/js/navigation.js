window.addEventListener('load',function(){
    initCanvas(canvas)
});



function initCanvas(c){
    const
        width = c.width = window.innerWidth,
        height = c.height = window.innerHeight,
        ctx = c.getContext('2d')
        p = new Particle(
            100,
            height - 50,
            0,
            0
        ),
        thrust = new Vector(0,0)

        document.addEventListener('keydown',function(e){
            console.log(e.keyCode)
            switch(e.keyCode){
                case 38: // up
                    thrust.setY(-0.1)
                    break
                case 40: // down
                    thrust.setY(0.1)
                    break
                case 37: // left
                    thrust.setX(-0.1)
                    break
                case 39: // right
                    thrust.setX(0.1)
                    break
            }
        });

        
        document.addEventListener('keyup',function(e){
            console.log(e.keyCode)
            switch(e.keyCode){
                case 38: // up
                    thrust.setY(0)
                    break
                case 40: // down
                    thrust.setY(0)
                    break
                case 37: // left
                    thrust.setX(0)
                    break
                case 39: // right
                    thrust.setX(0)
                    break
            }
        });
    
    render()
    
    function render(){
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillRect(0,0,width,height)
        ctx.fillStyle = 'rgba(0,0,0,1)'
        // Animation Code
        p.update()
        p.accelerate(thrust)
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
        if(px>=width + rd) p.position.setX(-rd)
        if(px <= -rd) p.position.setX(width + rd)
        if(py >= height + rd) p.position.setY(-rd)
        if(py <= -rd) p.position.setY(height + rd)
        // if(px>=width - rd || px <= startX + rd) p.velocity.setX(-p.velocity.getX())
        // if(py>=height - rd || py <= startY + rd) p.velocity.setY(-p.velocity.getY())
        //////////////////////
        requestAnimationFrame(render)
    }
}

new Particle()

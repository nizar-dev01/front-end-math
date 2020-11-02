window.addEventListener('load',function(){
    initCanvas(canvas)
});



function initCanvas(c){
    const
        width = c.width = window.innerWidth,
        height = c.height = window.innerHeight,
        ctx = c.getContext('2d')
    
    let particles = makeFire(500)

    function makeFire(count,x = width/2,y = height/2){
        const particles = []
        for(let i = 0; i<count; i++){
            particles.push(new Particle(
                x,
                y,
                Math.random() * 5 + 2,
                Math.PI * Math.random() * 2,
                0.1
            ))
        }
        return particles
    }
    document.body.addEventListener('click',function(e){
        particles = makeFire(500,e.x,e.y)
    })
    render()
    
    function render(){
        ctx.fillStyle = 'rgba(255,255,255,0.4)'
        ctx.fillRect(0,0,width,height)
        ctx.fillStyle = 'rgba(0,0,0,1)'
        particles.forEach((p,i)=>{
            // draw
            const
                px = p.position.getX(),
                py = p.position.getY(),
                startY = 0,
                startX = 0,
                rd = 3
            ctx.beginPath()
            ctx.arc(p.position.getX(),p.position.getY(),rd,0,Math.PI*2,false)
            ctx.fill()
            // update
            p.update()
        })
        requestAnimationFrame(render)
    }
}

new Particle()

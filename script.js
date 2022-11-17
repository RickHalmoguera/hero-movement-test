window.addEventListener("load", ()=>{

    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext("2d")
    canvas.width = 200
    canvas.height = 300
    
    let fps = 60
    let frameTimer = 0
    let frameInterval = 5000/fps
    let gameFrame = 0
    let maxFrame = 9
    const heroImage = new Image()
    heroImage.src = "./images/Idle.png"

    class Hero {
        
        constructor(canvasWidth, canvasHeight, newMAxFrame){
            this.canvasWidth = canvasWidth
            this.canvasHeight = canvasHeight
            this.image = heroImage 
            this.spriteWidth = 126
            this.spriteHeight = 126
            this.width =  this.spriteWidth
            this.height = this.spriteHeight
            this.scale = 2
            this.x = this.canvasWidth/2 - this.width * this.scale/1.8
            this.y = this.canvasHeight/2 - this.height * this.scale/2
            this.minFrame = 0
            this.maxFrame = newMAxFrame
            this.frameX = 0
            this.frameY = 0
        }

        draw(context){
            context.drawImage(this.image,  this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
            this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width * this.scale, this.height * this.scale)
 
        }
        update(deltaTime){
            
            if( frameTimer > frameInterval){
                    if(this.frameX < maxFrame) this.frameX++
                    else this.frameX = 0
                    frameTimer = 0
                }else{
                    frameTimer += deltaTime
                }
        
        }

    }

    let hero = new Hero(canvas.width, canvas.height, maxFrame)
    
    let lastTime = 0
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        hero.draw(ctx)
        hero.update(deltaTime)
        gameFrame++
        requestAnimationFrame(animate)
    }

    animate(0)

    const idle = document.getElementById("idle")
    idle.addEventListener("click", ()=>{
        heroImage.src = "./images/Idle.png"
        maxFrame = 9
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const run = document.getElementById("run")
    run.addEventListener("click", ()=>{
        heroImage.src = "./images/Run.png" 
        maxFrame = 7
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const attack1 = document.getElementById("attack1")
    attack1.addEventListener("click", ()=>{
        heroImage.src = "./images/Attack1.png"
        maxFrame = 6
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const attack2 = document.getElementById("attack2")
    attack2.addEventListener("click", ()=>{
        heroImage.src = "./images/Attack2.png"
        maxFrame = 5
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const attack3 = document.getElementById("attack3")
    attack3.addEventListener("click", ()=>{
        heroImage.src = "./images/Attack3.png"
        maxFrame = 8
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const down = document.getElementById("down")
    down.addEventListener("click", ()=>{
        heroImage.src = "./images/Going Down.png"
        maxFrame = 2
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const up = document.getElementById("up")
    up.addEventListener("click", ()=>{
        heroImage.src = "./images/Going Up.png"
        maxFrame = 2
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const takeHit = document.getElementById("takeHit")
    takeHit.addEventListener("click", ()=>{
        heroImage.src = "./images/Take Hit.png"
        maxFrame = 2
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })

    const death = document.getElementById("death")
    death.addEventListener("click", ()=>{
        heroImage.src = "./images/Death.png"
        maxFrame = 10
        hero = new Hero(canvas.width, canvas.height, maxFrame)
        
    })
})


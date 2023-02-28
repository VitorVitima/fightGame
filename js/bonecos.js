class Jogador{
    constructor(ctx, teclas, canvas){
        this.ctx = ctx
        this.teclas = teclas
        this.canvas = canvas
        
        this.xAxis = 0
        this.yAxis = this.canvas.height - 150
        this.sizeW = 100
        this.sizeH = 150
        this.velocidade = 10

        this.img = new Image()
        this.img.src='./imgs/martial/Idle.png'


        this.puloAltura= 100
        this.pulando = false

        
        this.atacando = false
        
        this.alcance = 200
        
        this.vida = 100
        this.dano = 10

        this.numSprite = 0
        this.parado = true
        this.correndo = false

        this.bonecoParado()
        this.run()
    }
    desenho(){
        this.ctx.fillStyle='transparent'
        this.ctx.drawImage(this.img, 200*this.numSprite, 0, 200, 200, this.xAxis - 160, this.yAxis - 125, 450, 450)
        this.ctx.fillRect(this.xAxis, this.yAxis, this.sizeW, this.sizeH)
    }
    andar(){
        if(this.teclas.esquerda){
            if(this.xAxis != 0){
                this.xAxis -= this.velocidade
            }
        }
        if(this.teclas.direita){
            if(this.xAxis < this.canvas.width - 100){
                this.xAxis += this.velocidade
            }
        }
        if(this.teclas.cima){
            this.pulo()
        }
    }
    pulo(){
        if(this.pulando == false){
            this.parado = false
            this.pulando = true
            this.yAxis -= this.puloAltura
            setTimeout(()=>{
                this.yAxis += this.puloAltura
                this.pulando = false
                this.parado = true
            }, 200)
        }
    }
    attack(){
        if(this.teclas.space && this.atacando == false){
            this.atacando = true
            this.ctx.fillStyle = '#ff0000'
            this.ctx.fillRect(this.xAxis, this.yAxis + 50, this.alcance, 50)
            setTimeout(()=>{
                this.atacando = false
            }, 90)
        }
    }
    colidiu(xBot, yBot){
        if(this.xAxis + this.alcance + 10 > xBot && this.xAxis < xBot + this.sizeW && this.yAxis + this.sizeH > yBot && this.yAxis < yBot + this.sizeH){
            return true
        }else {
            return false

        }
    }
    bonecoParado(){
        setInterval(()=>{
            if(this.parado){
                this.numSprite++
                if(this.numSprite > 7){
                    this.numSprite = 0
                }
            }
        }, 200)
    }
    run(){
        setInterval(()=>{
            if(this.correndo){
                this.numSprite++
                if(this.numSprite > 7){
                    this.numSprite = 0
                }
            }
        }, 200)
    }
}
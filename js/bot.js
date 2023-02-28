class Bot{
    constructor(ctx, teclas2, canvas){
        this.ctx = ctx
        this.teclas = teclas2
        this.canvas = canvas
        this.xAxis = 500
        this.yAxis = this.canvas.height - 200
        this.sizeW = 100
        this.sizeH = 200
        this.velocidade = 10


        this.puloAltura= 100
        this.pulando = false

        this.atacando = false

        this.alcance = 200

        this.numSprite = 0
        this.parado = true
        this.correndo = false

        this.img = new Image()

        
        this.srcCorrendo = './imgs/fantasy/Run.png'
        this.srcParado = './imgs/fantasy/Idle.png'
        this.img.src=this.srcParado
        
        this.vida = 100
        this.dano = 10
    }
    desenho(){
        this.ctx.fillStyle='transparent'
        this.ctx.drawImage(this.img, 162*this.numSprite, 0, 200, 200, this.xAxis - 160, this.yAxis - 28, 450, 450)
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
            this.pulando = true
            this.yAxis -= this.puloAltura
            setTimeout(()=>{
                this.yAxis += this.puloAltura
                this.pulando = false
            }, 200)
        }
    }
    attack(){
        if(this.teclas.space && this.atacando == false){
            this.atacando = true
            this.ctx.fillStyle = '#ff0000'
            this.ctx.fillRect(this.xAxis - this.alcance, this.yAxis + 50, this.alcance, 50)
            setTimeout(()=>{
                this.atacando = false
            }, 90)
        }
    }
    colidiu(xJ, yJ){
        if(this.xAxis + this.alcance + 10 > xJ && this.xAxis < xJ + this.sizeW && this.yAxis + this.sizeH > yJ && this.yAxis < yJ + this.sizeH){
            return true
        }else {
            return false

        }
    }
}
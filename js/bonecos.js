class Jogador{
    constructor(ctx, teclas, canvas){
        this.ctx = ctx
        this.teclas = teclas
        this.canvas = canvas
        
        this.xAxis = 0
        this.yAxis = this.canvas.height - 200
        this.sizeW = 100
        this.sizeH = 200
        this.velocidade = 10


        this.puloAltura= 100
        this.pulando = false

        this.atacando = false

        this.alcance = 200

        this.vida = 100
        this.dano = 10
    }
    desenho(){
        this.ctx.fillStyle='#fff'
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
        //if(this.teclas.baixo){
        //    this.yAxis += this.velocidade
        //}
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
}
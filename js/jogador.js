class Personagem1{
    constructor(ctx, teclado, canvas){
        this.ctx=ctx
        this.teclado=teclado
        this.canvas=canvas
        this.xAxis=-49
        this.yAxis=0
        this.velocidade=5
        this.imgAnimacao = 0
        this.press = false

        this.imageWidth = 128
        this.imageHeight = 150
        this.personagem = new Image()
        this.personagem.src='imgs/personagem1/boneco/walk/Walk.png'
        this.personagem.addEventListener('load', ()=>{
            this.desenhar()
        })
    }
    gerenciar(){
        if(this.teclado.esquerda){
            if(this.xAxis > -49){
                this.xAxis -= this.velocidade
            }
        }
        if(this.teclado.direita){
            if(this.xAxis < this.canvas.width - (this.imageWidth - 50)){
                this.xAxis += this.velocidade
            }
        }
        if(this.teclado.cima){
            if(this.yAxis > 0 ){
                this.yAxis -= this.velocidade
            }
        }
        if(this.teclado.baixo){
            if(this.yAxis < this.canvas.width - (this.imageHeight - 82)){
                this.yAxis += this.velocidade
            }
        }
    }
    desenhar(){
        this.gerenciar()
        this.ctx.drawImage(this.personagem, 128*this.imgAnimacao, 61, 128, 150, this.xAxis, this.yAxis, this.imageWidth, this.imageHeight)

    }
    andarAnimacao(){
        this.imgAnimacao++
        if(this.imgAnimacao > 5){
            this.imgAnimacao = 0
        }
    }
    loopAnimacao(){
            if(this.press){
                this.andarAnimacao()
            }
    }
}
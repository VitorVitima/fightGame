const lifes = document.querySelectorAll('.life')
const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')
const teclas = {
    esquerda: false,
    direita: false,
    cima: false, 
    baixo: false,
    space: false
}
const teclas2 = {
    esquerda: false,
    direita: false,
    cima: false, 
    baixo: false,
    space: false
}
const jogador = new Jogador(ctx, teclas, canvas)
const bot = new Bot(ctx, teclas2, canvas)
jogador.desenho()
window.addEventListener('keydown', (e)=>{
    const xbot = bot.xAxis
    const ybot = bot.yAxis
    jogador.parado = false
    jogador.correndo = true
    if(e.key == 'a'){
        teclas.esquerda = true
    }
    if(e.key == 'd'){
        teclas.direita = true
    }
    if(e.key == 'w'){
        teclas.cima = true
    }
    if(e.key == 's'){
        teclas.baixo = true
    }
    if(e.key == ' '){
        teclas.space=true
        if(jogador.colidiu(xbot, ybot)){
            bot.vida-= jogador.dano
        }
    }
    jogador.andar()
})
window.addEventListener('keyup', ()=>{
    jogador.parado = true
    jogador.correndo = false
    if(teclas.esquerda){
        teclas.esquerda = false
    }
    if(teclas.direita){
        teclas.direita = false
    }
    if(teclas.cima){
        teclas.cima = false
    }
    if(teclas.baixo){
        teclas.baixo = false
    }
    if(teclas.space){
        teclas.space=false
        
    }
})
window.addEventListener('keydown', (e)=>{
    const xJ = jogador.xAxis
    const yJ = jogador.yAxis
    
    if(e.key == 'ArrowLeft'){
        teclas2.esquerda = true
    }
    if(e.key == 'ArrowRight'){
        teclas2.direita = true
    }
    if(e.key == 'ArrowUp'){
        teclas2.cima = true
    }
    if(e.key == 'ArrowDown'){
        teclas2.baixo = true
    }
    if(e.key == 'p'){
        teclas2.space=true
        if(jogador.colidiu(xJ, yJ)){
            jogador.vida-= bot.dano
        }
    }
    bot.andar()
    
})
window.addEventListener('keyup', ()=>{
    
    if(teclas2.esquerda){
        teclas2.esquerda = false
    }
    if(teclas2.direita){
        teclas2.direita = false
    }
    if(teclas2.cima){
        teclas2.cima = false
    }
    if(teclas2.baixo){
        teclas2.baixo = false
    }
    if(teclas2.space){
        teclas2.space=false
    }
})
const animacao = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    jogador.desenho()
    jogador.attack()

    bot.desenho()


    lifes[1].children[0].style.width = `${bot.vida}%`
    lifes[0].children[0].style.width = `${jogador.vida}%`
    requestAnimationFrame(animacao)
}
animacao()
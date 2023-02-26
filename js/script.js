const canvas = document.querySelector('#personagem1')
const ctx = canvas.getContext('2d')
const teclas = {
    esquerda:false, 
    direita:false, 
    cima:false, 
    baixo:false
}
const jogador = new Personagem1(ctx, teclas, canvas)
const loop=()=>{
    const intervalo = setInterval(()=>{
        jogador.andarAnimacao()
    }, 1000)
    if(jogador.press == false){
        clearInterval(intervalo)
    }
}
window.addEventListener('keydown', (e)=>{
    if(e.key == 'd'){
        teclas.direita=true
    }
    if(e.key == 'a'){
        teclas.esquerda=true
    }
    if(e.key == 'w'){
        teclas.cima=true
    }
    if(e.key == 's'){
        teclas.baixo=true
    }
    jogador.press=true
    loop()
})
window.addEventListener('keyup', ()=>{
    if(teclas.direita){
        teclas.direita=false
    }
    if(teclas.esquerda){
        teclas.esquerda=false
    }
    if(teclas.cima){
        teclas.cima=false
    }
    if(teclas.baixo){
        teclas.baixo=false
    }
    jogador.press=false
    loop()
})
const Andarndo = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    jogador.desenhar()
    requestAnimationFrame(Andarndo)
}

Andarndo()

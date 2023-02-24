const canvas = document.querySelector('#personagem1')
const ctx = canvas.getContext('2d')
let px = 0
const incrementoAndEncremento = 10
let volta = false
function animacao(){
    ctx.clearRect(0, 0, 400, 400)
    ctx.fillStyle='#fff'
    ctx.fillRect(px, 0, 50, 50)
    if(volta == false){
        px+= incrementoAndEncremento
        if(px >= 350){
            volta = true
        }
    } else{
        px-= incrementoAndEncremento
        if(px == 0){
            volta = false
        }
    }
    requestAnimationFrame(animacao)
}
animacao()
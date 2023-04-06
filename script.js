const fundo1 = document.querySelector('.fundo1')
const fundo2 = document.querySelector('.fundo2')
const btnYes = document.querySelector('.btnSim')
const btnConfirmar = document.querySelector('.btnConfirmar')
const p = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const imgsFundo2 = document.querySelector('.imgsFundo2')
const pMomentos1 = document.querySelector('.pMomentos1')
const audio = new Audio('imagens/musica.mp3')

const frases = [
'Bom, vamos lá...', 
'Desde que eu te conheci...', 
'Minha vida mudou completamente...',
'Você é a minha motivação...',
'A minha força diária...',
'E o meu amor...',
'Fiz esse pequeno presente...',
'Pra te mostrar...',
'O quanto você é importante pra mim...'
]

const frases2 = [
   'Primeira vez no estádio do Corinthians',
   'Quando saimos pra comer', 
   'Quando se vimos pela primeira vez', 
]

const imgs = ['imagens/tela2.png', 'imagens/tela3.png', 'imagens/tela4.jpg']



let i = 0;
function abrirFundo(){
   audio.play()
   p.style.opacity = 0;
   fundo1.classList.add('ativo')
   fundo1.style.opacity = 1;
   setTimeout((item) => {
      p.textContent = frases[i]
      i++
      if(i > frases.length){
         clearTimeout()
         btnConfirmar.classList.add('ativo')
         pMomentos1.classList.add('ativo')
      }
      p.style.opacity = 1;
      clearInterval()
   },5500)
}

let i2 = 0

function abrirFundo2(){
   p2.style.opacity = 0;
   imgsFundo2.style.opacity = 0;
   fundo2.classList.add('ativo')
   fundo2.style.opacity = 1;
   setTimeout((item) => {
      p2.textContent = frases2[i2]
      imgsFundo2.src = imgs[i2]
      i2++
      if(i2 > frases2.length && i2 > imgs.length){
         clearTimeout()
         imgsFundo2.classList.add('remover')
      }
      p2.style.opacity = 1;
      imgsFundo2.style.opacity = 1;
      clearInterval()
   },1200)
}

btnYes.addEventListener('click', () => {
   abrirFundo()
   setInterval(abrirFundo, 4500)
})

btnConfirmar.addEventListener('click', () => {
   abrirFundo2()
   setInterval(abrirFundo2, 6000)
})



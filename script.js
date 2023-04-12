const fundo1 = document.querySelector('.fundo1')
const fundoIniciar = document.querySelector('.iniciar')
const fundo2 = document.querySelector('.fundo2')
const fundo3= document.querySelector('.fundo3')
const fundo4 = document.querySelector('.fundo4')
const fundo5 = document.querySelector('.fundo5')
const fundoVideo= document.querySelector('.fundoVideo')
const askBianca= document.querySelector('.askBianca')
const btn = document.querySelector('.btn')
const comecar = document.querySelector('.comecar')
const btnYes = document.querySelector('.btnSim')
const btnNo = document.querySelector('.btnNo')
const btnNaoEstou = document.querySelector('.btnNaoEstou')
const imgInitial = document.querySelector('.imgInitial')
const btnConfirmar = document.querySelector('.btnConfirmar')
const btnConfirmar2 = document.querySelector('.btnConfirmar2')
const p = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const p6 = document.querySelector('.p6');
const pFinal = document.querySelector('.pFinal');
const quatorzeFrases = document.querySelector('.quatorze-frases')
const imgsFundo2 = document.querySelector('.imgsFundo2')
const imgsFundo3 = document.querySelector('.imgsFundo3');
const pMomentos1 = document.querySelector('.pMomentos1')
const audio = new Audio('imagens/musica.mp3')
const audio2 = new Audio('imagens/musica.mp3')
const video = document.querySelector('video')

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
   'As primeiras vezes que fui na sua casa', 
   'Seu aniversário de 18 anos', 
   'Primeiro casamento que fomos', 
   'Primeira vez no estádio do Corinthians',
   'Primeiro almoço num boteco KKK', 
   'Halloween que pegamos bastante doce', 
   'Quando comemos 1kg de coração hehe', 
   'Volêizinho', 
   'Piscininha', 
   'Parque de diversão com roupa combinando', 
   'Praia', 
   'Primeira festa juntos', 
   'Comendo como sempre', 
   'E pra fechar a linda tomando água de cocô', 
]

const frases3 = [
   '14 frases...',
   '14 fotos...',
   'E 3 anos com você'
]

const frases4 = [
   'As vezes é difícil imaginar...', 
   'Como alguém pode entrar em nossa vida...', 
   'e mudar tudo.', 
   'Como alguém pode nos animar...',
   'mesmo nos nossos piores dias.', 
   'Como alguém pode ser tão fiel..', 
   'em um mundo tão infiel.', 
   'As pessoas dizem que...', 
   'Todo mundo tem pelo menos 1 grande sorte na vida...', 
   'E eu acho que a minha já aconteceu...', 
   'quando encontrei você.', 
   'Te agradeço por cada momento...', 
   'Por cada conselho...', 
   'Por cada ensinamento...', 
   'por tudo.', 
   'Prometo te fazer feliz e cuidar de você...', 
   'No sol ou na chuva...', 
   'Juntos ou separados...', 
   'te amarei infinitamente Bianca.', 
]

const imgs = ['imagens/img13.jfif','imagens/img1.jfif', 'imagens/img2.jfif', 'imagens/img12.jfif', 'imagens/img6.jfif', 'imagens/img4.jfif', 'imagens/img3.jfif', 'imagens/img7.jfif', 'imagens/img5.jfif', 'imagens/img8.jfif', 'imagens/img10.jfif', 'imagens/img11.jfif', 'imagens/img9.jfif', 'imagens/agua-de-coco.jfif']

const imgs2 = [
'imagens/img1.jfif',
'imagens/img1.jfif', 
'imagens/print.jfif', 
'imagens/img2.jfif', 
'imagens/pessoalmente.jfif', 
'imagens/img12.jfif',
'imagens/primeira-foto.jfif',
'imagens/primeira-foto.jfif',
'imagens/ligacao.jfif',
'imagens/ligacao.jfif',
'imagens/ligacao.jfif',
'imagens/ligacao.jfif',
]

const frasesFundo3 = [
   'E só de lembrar...',
   'De quando te conheci...',
   'De quando te conheci2',
   'Da nossa primeira conversa pessoalmente',
   'Da nossa primeira conversa pessoalmente2',
   'Da nossa primeira foto',
   'Da nossa primeira foto2',
   'Da primeira ligação',
   'Da primeira ligação2',
   'E só de pensar...',
   'o quanto ainda vamos viver...',
   'É de arrepiar.',
]

const frasesFinal = [
   'Obrigado por estar comigo.'
]

function iniciar(){
   audio.play()
   fundoIniciar.classList.add('ativo')
   fundoIniciar.style.opacity = 1
}


let i = 0;
function abrirFundo(){
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
   },5000)
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
         btnConfirmar2.classList.add('ativo')
         quatorzeFrases.classList.add('ativo')
      }
      p2.style.opacity = 1;
      imgsFundo2.style.opacity = 1;
      clearInterval()
   },5000)
}

let i3 = 0

function abrirFundo3(){
   p4.style.opacity = 0;
   imgsFundo3.style.opacity = 0;
   fundo3.classList.add('ativo')
   fundo3.style.opacity = 1;
   setTimeout((item) => {
      if(i3 == 0){
         imgsFundo3.classList.add('absolute')
      }
      else if(i3 == 1){
         imgsFundo3.classList.add('absolute')
      } 
      else if(i3 == 2){
         p4.classList.add('absolute')
         imgsFundo3.classList.remove('absolute')
      } 
      else if(i3 == 3){
         imgsFundo3.classList.add('absolute')
         p4.classList.remove('absolute')   
      }
      else if(i3 == 4){
         p4.classList.add('absolute')
         imgsFundo3.classList.remove('absolute')
      }
      else if(i3 == 5){
         imgsFundo3.classList.add('absolute')
         p4.classList.remove('absolute')
      }
      else if(i3 == 6){
         p4.classList.add('absolute')
         imgsFundo3.classList.remove('absolute')
      }
      else if(i3 == 7){
         imgsFundo3.classList.add('absolute')
         p4.classList.remove('absolute')
      }
      else if(i3 == 8){
         p4.classList.add('absolute')
         imgsFundo3.classList.remove('absolute')
      }
      else if(i3 == 9){
         imgsFundo3.classList.add('absolute')
         p4.classList.remove('absolute')
      }
      else if(i3 == 10){
         imgsFundo3.classList.add('absolute')
         p4.classList.remove('absolute')
      } 
      else if(i3 == 11){
         imgsFundo3.classList.add('absolute')
         p4.classList.remove('absolute')
      } else{
         p4.classList.remove('absolute')
         p4.textContent = frasesFundo3[i3]
         imgsFundo3.src = imgs2[i3]
      }
      p4.textContent = frasesFundo3[i3]
      imgsFundo3.src = imgs2[i3]
      i3++
      if(i3 > frasesFundo3.length && i3 > imgs2.length){
         clearTimeout()
         abrirFundo4()
         imgsFundo3.classList.add('remover')
      }
      p4.style.opacity = 1;
      imgsFundo3.style.opacity = 1;
      clearInterval()
   },5000)
}

let i4 = 0;
function abrirFundo4(){
   p5.style.opacity = 0;
   fundo4.classList.add('ativo')
   fundo4.style.opacity = 1;
   setTimeout((item) => {
      p5.textContent = frases4[i4]
      i4++
      if(i4 > frases4.length){
         abrirFundoVideo()
         clearTimeout()
         clearInterval()
      }
      p5.style.opacity = 1;
   },5000)
}

let i5 = 0
function abrirFundo5(){
   p6.style.opacity = 0
   fundo5.classList.add('ativo')
   fundo5.style.opacity = 1
   setTimeout((item) => {
      p6.textContent = frasesFinal[i5]
      i5++
      if(i5 > frasesFinal.length){
         clearInterval()
         clearTimeout()
         pFinal.classList.add('ativo')
      }
      p6.style.opacity = 1;
   },5000)
}

function abrirFundoVideo(){
   fundoVideo.classList.add('ativo')
   video.play()
   audio.pause()
}

video.addEventListener('ended', () =>  {
   video.pause()
   video.muted = true
   audio2.currentTime = 89;
   audio2.play();
   fundoVideo.classList.remove('ativo')
   abrirFundo5()
   setInterval(abrirFundo5, 4000)
});

btnYes.addEventListener('click', iniciar)

comecar.addEventListener('click', () => {
   abrirFundo()
   setInterval(abrirFundo, 4000)
})

btnNo.addEventListener('click', () => {
   askBianca.classList.add('ativo')
   askBianca.innerText = 'Então o que você está fazendo aqui seu tarado(a)?'
   imgInitial.classList.add('ativo')
   imgInitial.src = 'imagens/emoji-desconfiado.png'
   btn.classList.add('ativo')
})

btnNaoEstou.addEventListener('click', () => {
   alert('Tente recarregar o site ou troque o navegador.')
})

btnConfirmar.addEventListener('click', () => {
   abrirFundo2()
   setInterval(abrirFundo2, 4000)
})

btnConfirmar2.addEventListener('click', () => {
   abrirFundo3();
   setInterval(abrirFundo3, 4000)
})




const fundo1 = document.querySelector('.fundo1')
const fundo2 = document.querySelector('.fundo2')
const fundo3= document.querySelector('.fundo3')
const btnYes = document.querySelector('.btnSim')
const btnConfirmar = document.querySelector('.btnConfirmar')
const btnConfirmar2 = document.querySelector('.btnConfirmar2')
const p = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p4 = document.querySelector('.p4');
const quatorzeFrases = document.querySelector('.quatorze-frases')
const imgsFundo2 = document.querySelector('.imgsFundo2')
const imgsFundo3 = document.querySelector('.imgsFundo3');
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
   'Seu aniversário de 18 anos', 
   'As primeiras vezes que fui na sua casa', 
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

const imgs = ['imagens/img1.jfif', 'imagens/img13.jfif', 'imagens/img2.jfif', 'imagens/img12.jfif', 'imagens/img6.jfif', 'imagens/img4.jfif', 'imagens/img3.jfif', 'imagens/img7.jfif', 'imagens/img5.jfif', 'imagens/img8.jfif', 'imagens/img10.jfif', 'imagens/img11.jfif', 'imagens/img9.jfif', 'imagens/agua-de-coco.jfif']

const listaFundo3 = [
   {
     frase: "E só de lembrar de quando te conheci",
     imagem: "imagens/img1.jfif"
   },
   {
      frase: "Da nossa primeira conversa",
      imagem: "imagens/img1.jfif"
   },
   {
      frase: "Do nosso primeiro beijo",
      imagem: "imagens/img1.jfif"
   }
 ];


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
let i3 = 0
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
   },5500)
}

let indice = 0
 // Função para exibir a próxima frase e imagem na lista
 function abrirFundo3() {
   fundo3.classList.add('ativo')
   // Seleciona o próximo objeto na lista
   const item = listaDeConteudo[indice];
   // Exibe a frase correspondente
   p4.textContent = item.frase;
   // Define um atraso de 4 segundos antes de exibir a imagem correspondente
   setTimeout(() => {
     imgsFundo3.src = item.imagem;
     // Atualiza o índice para o próximo item na lista
     indice = (indice + 1) % frases3.length;
     // Chama a função exibirProximo() novamente após um atraso de 4 segundos
     setTimeout(abrirFundo3, 4000);
   }, 5500);
 }

btnYes.addEventListener('click', () => {
   abrirFundo()
   setInterval(abrirFundo, 4500)
})

btnConfirmar.addEventListener('click', () => {
   abrirFundo2()
   setInterval(abrirFundo2, 4500)
})

btnConfirmar2.addEventListener('click', () => {
   abrirFundo3();
})




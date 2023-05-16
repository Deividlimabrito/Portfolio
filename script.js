let titulo = document.querySelector('.digitando')

function ativaLetreiro(elemento) {
  let arrTexto = elemento.innerHTML.split('')
  elemento.innerHTML = '';
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 120 * i)
  });
}

function loopLetreiro() {
  ativaLetreiro(titulo)
  setTimeout(loopLetreiro, 5000); // espera 5 segundos antes de repetir
}

loopLetreiro();

let ativaMenu = document.querySelector('.fa-bars')
let navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click', ()=>{
  ativaMenu.classList.toggle('fa-x')
  navMenu.classList.toggle('ativado')
})

// let titulo = document.querySelector('.digitando');

// function ativaLetreiro(elemento){
//     let arrTexto = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     arrTexto.forEach((Letra, i)=>{
//         setTimeout(()=>{
//             elemento.innerHTML += Letra;
//         }, 120 * i)
//     });
// }
// ativaLetreiro(titulo);
let titulo = document.querySelector('.digitando');

function ativaLetreiro(elemento) {
  let arrTexto = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 120 * i)
  });
}

function loopLetreiro() {
  ativaLetreiro(titulo);
  setTimeout(loopLetreiro, 5000); // espera 5 segundos antes de repetir
}

loopLetreiro();

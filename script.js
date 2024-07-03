/*const openCalculer = document.querySelector('.calculeModal');
const closeModalButton = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');
const fade = document.querySelector('.fade');
*/

document.addEventListener('DOMContentLoaded', () => {
  const calcularBtn = document.querySelector('.calcule');
  const modal = document.querySelector('.modal');
  const resultadoIMC = document.querySelector('.h1-IMC')
  const closeBtn = document.querySelector('.closeModal');
  const pesoInput = document.querySelector('#peso');
  const alturaInput = document.querySelector('#altura');
  const boxShadow = document.querySelector('.box1')
  const errorMessage = document.querySelector('.error-message');

  function validadeInput(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value === '') {
  errorMessage.classList.remove('hide');
} else {
  errorMessage.classList.add('hide');
}
  }
  pesoInput.addEventListener('input', validadeInput);
  alturaInput.addEventListener('input', validadeInput);

calcularBtn.addEventListener('click', () => {
  const peso = parseInt(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura)) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);
  resultadoIMC.innerText = `Seu IMC é de ${imc}`;
  boxShadow.style.filter = "brightness(0.5)";
  modal.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('hide');
  boxShadow.style.filter = "brightness(1)";

  // pesoInput.addEventListener('input', validateInput);
  // alturaInput.addEventListener('input', validateInput);
});

})

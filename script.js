const form = document.querySelector('form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');
const mensagem = document.querySelector('#mensagem');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function() {
  if (campoB.value > campoA.value) {
    mensagem.textContent = 'Formulário válido';
    mensagem.style.color = 'green';
    form.submit();
  } else {
    mensagem.textContent = 'Formulário inválido';
    mensagem.style.color = 'red';
  }
});

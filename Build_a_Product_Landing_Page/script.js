document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('form');
const success = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.querySelectorAll('input').forEach((input) => (input.hidden = true));
  form.querySelector('h3').hidden = true;
  form.querySelector('p:not(.form-success)').hidden = true;
  success.hidden = false;
});

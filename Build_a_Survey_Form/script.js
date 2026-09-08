const form = document.getElementById("survey-form");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.hidden = true;
  thankYou.hidden = false;
});

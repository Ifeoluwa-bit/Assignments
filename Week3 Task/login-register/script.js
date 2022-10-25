var card = document.getElementById("card");
var success = document.getElementByClassName("success");

function openRegister() {
  card.style.transform = "rotateY(0deg)";
}
function openLogin() {
  card.style.transform = "rotateY(-180deg)";
}

function openSuccess() {
  card.style.transform = "rotateY(-270deg)";
}

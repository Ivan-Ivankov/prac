const button = document.getElementById("sub");
const hidden = document.getElementById("hidden");
const closes = document.getElementById("close");

button.onclick = function() {
    hidden.style.display = "block";
}

closes.onclick = function() {
    hidden.style.display = "none";
}
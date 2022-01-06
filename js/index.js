const button = document.getElementById("sub");
const hidden = document.getElementById("hidden");
const closes = document.getElementById("close");
const arrow = document.getElementById("arrow")

button.onclick = function() {
    hidden.style.display = "block";
    arrow.style.display = "none";
}

closes.onclick = function() {
    hidden.style.display = "none";
    arrow.style.display = "block";
}
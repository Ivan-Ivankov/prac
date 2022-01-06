const button = document.querySelector(".sub");
const hidden = document.querySelector(".hidden");
const close = document.querySelector(".close");
const arrow = document.querySelector(".arrow")

button.onclick = function() {
    hidden.style.display = "block";
    arrow.style.display = "none";
}

close.onclick = function() {
    hidden.style.display = "none";
    arrow.style.display = "block";
}
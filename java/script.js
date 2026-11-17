console.log("Javascript is linked")
const more = document.querySelector("#more");
const more2 = document.querySelector("#more2");

more2.addEventListener("click", function () {
    more2.classList.toggle("visible");
});
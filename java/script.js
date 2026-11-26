console.log("Javascript is linked")
const more = document.querySelector("#more");
const more2 = document.querySelector("#more2");

more.addEventListener("click", function () {
    more2.classList.toggle("visible");
})

$("#message").text("Hello!");


const images = document.querySelectorAll('.image1');
const infoBox = document.getElementById('info-box');
const infoText = document.getElementById('info-text');

images.forEach(image => {
    image.addEventListener('click', function () {
        const extraInfo = image.getAttribute('image-info');
        
        infoText.textContent = extraInfo;
        infoBox.classList.toggle('more2');
    });
});
;
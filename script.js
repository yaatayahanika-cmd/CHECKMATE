const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {

    nav.classList.add("active");
    closeBtn.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    nav.classList.remove("active");
    closeBtn.classList.remove("active");

});

const images =
document.querySelectorAll(".gallery-img");

const modal =
document.getElementById("modal");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.getElementById("closeModal");

images.forEach((image) => {

    image.addEventListener("click", () => {

        modal.classList.add("active");

        modalImage.src = image.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});
const fades =
document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    fades.forEach((fade) => {

        const position =
        fade.getBoundingClientRect().top;

        const screen =
        window.innerHeight;

        if(position < screen - 100){

            fade.classList.add("show");

        }

    });

});

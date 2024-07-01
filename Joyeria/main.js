const fDer = document.querySelector(".flecha-der");
const container = document.querySelector(".productos-container");


fDer.addEventListener("click", deslizarDer);



console.log(container);



function deslizarDer() {
    container.classList.add("des-der");
    container.addEventListener("animationend", () => {
        container.classList.remove("des-der");
        container.classList.add("mantener-der");
    }, { once: true });
}

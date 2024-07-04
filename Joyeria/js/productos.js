import { productos } from './prods.js'; //Importamos los datos de los productos

let container = document.querySelector(".productos-container");//Contenedor(section) en productos.html

/* Creación de productos individuales Grandes */
productos.map((el) => {
    /* Producto */
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

    let imgtarjeta = document.createElement("img");
    let titulotarjeta = document.createElement("h2");
    let preciotarjeta = document.createElement("span");
    let descripciontarjeta = document.createElement("p");

    /* Botones de tarjeta */
    let btnstarjeta = document.createElement("div");
    btnstarjeta.classList.add("btns-tarjeta");

    let btnFavtarjeta = document.createElement("img");
    let btnVerMastarjeta = document.createElement("button");

    btnFavtarjeta.src = "./svg/fav.svg";
    btnVerMastarjeta.innerText = "Ver Más..."

    btnstarjeta.appendChild(btnFavtarjeta);
    btnstarjeta.appendChild(btnVerMastarjeta);


    /* Texto/Ruta para las etiquetas creadas anteriormente */
    imgtarjeta.src = el.img;
    titulotarjeta.innerText = el.titulo;
    preciotarjeta.innerText = `$${el.precio}`;
    descripciontarjeta.innerText = el.descripcion;

    /* Agregar todo a la tarjeta */
    tarjeta.appendChild(imgtarjeta);
    tarjeta.appendChild(titulotarjeta);
    tarjeta.appendChild(preciotarjeta);
    tarjeta.appendChild(descripciontarjeta);
    tarjeta.appendChild(btnstarjeta);

    /* Y luego al contenedor principal */
    container.appendChild(tarjeta)

    /* Evento cambio de color Boton Favorito */
    let Favoritos = false;

    /* Funcion para evento */
    function HandleShowBtnRed() {
        btnFavtarjeta.src = './svg/fav-red.svg';
        Favoritos = true;
        btnFavtarjeta.style.opacity = '1'
    }
    function HandleShowBtnWhite(){
        btnFavtarjeta.src = './svg/fav.svg';
        Favoritos = false;
        btnFavtarjeta.style.opacity = '1'
    }

    btnFavtarjeta.addEventListener("click", () => {
        if (!Favoritos) {
            btnFavtarjeta.style.opacity = '0';
            setTimeout(HandleShowBtnRed, 500)

        } else {
            btnFavtarjeta.style.opacity = '0';
            setTimeout(HandleShowBtnWhite , 500)
        }
    })


})





























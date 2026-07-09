const roles = [
    "Editor de video",
    "Diseño gráfico",
    "Diseño web",
];

const rol = document.getElementById("rol");

let i = 0;

function cambiarRol(){

    rol.classList.add("wipe");

    setTimeout(() => {

        i = (i + 1) % roles.length;
        rol.textContent = roles[i];

    },400);

    setTimeout(() => {
        rol.classList.remove("wipe");
    },800);

}

setInterval(cambiarRol,3000);

// -------------------------
// LIGHTBOX
// -------------------------

const imagenes = document.querySelectorAll(".proyecto_imagenes img");

if (imagenes.length > 0) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cerrar = document.querySelector(".cerrar");

    imagenes.forEach(img => {

        img.addEventListener("click", () => {
            lightbox.classList.add("activo");
            lightboxImg.src = img.src;
        });

    });

    cerrar.addEventListener("click", () => {
        lightbox.classList.remove("activo");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove("activo");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.classList.remove("activo");
        }
    });

}

const menu__mobile = document.querySelector("#menu__mobile");
const menu__close = document.querySelector("#modal__close");
const modal = document.querySelector("#modal");

function openMenu(){
    modal.classList.add("active");
}
function closeMenu(){
    modal.classList.remove("active");
}


menu__mobile.addEventListener("click", openMenu);
menu__close.addEventListener("click", closeMenu);


const burger = document.querySelector(".burger")
const nav = document.querySelector("nav")

function navbar() {
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("visible")
    })
}
navbar()



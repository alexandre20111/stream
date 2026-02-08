
const p = document.querySelector("p")
const username = document.querySelector(".username")
const password = document.querySelector(".password")
const button = document.querySelector("button")
let user = "admin"
let pass = "1234"

button.addEventListener("click", ()=>{

	if(username.value == user && password.value == pass){
		window.location.href = "contenue.html"
	}else{
		p.textContent = `Error!`
	}
})




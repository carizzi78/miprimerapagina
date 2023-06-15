function showAlert() { alert("¡Hola esta es una alerta desde JacaScript!");}


const form = document.getElementById("myForm")

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const input = document.getElementById('email')
    const inputValue = input.value

    if (!validateEmail(inputValue)) {
        alert('por favor ingrese un correo electronico valido')
    } else {
        alert('correo electronico enviado correctamente')
    }

}


form.addEventListener('submit', function(event) {
    event.preventDefault()
    validateForm();
})

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
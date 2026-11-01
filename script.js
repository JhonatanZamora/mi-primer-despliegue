
const button = document.getElementById("messageButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent =
        "¡Excelente! JavaScript está funcionando correctamente.";
    
    button.textContent = "¡Funcionó!";
});

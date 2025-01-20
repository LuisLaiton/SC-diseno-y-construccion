// Mensaje de WhatsApp
document.getElementById("boton-WhatsApp").addEventListener("click", () => {
    const phoneNumber = "573143372543";
    const message = "Hola, me gustaría obtener más información.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});




(function () {
    emailjs.init("67o_9CHBWxM8xNJ_o"); // Reemplaza con tu User ID de EmailJS
})();

function sendEmail(event) {
    event.preventDefault(); // Previene que la página se recargue

    // Capturar los datos del formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Preparar los datos para la plantilla
    const templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
    };

    // Configuración de EmailJS
    const serviceID = "service_6kp9tnu"; // Reemplaza con tu Service ID
    const templateID = "template_cgt6ly8"; // Reemplaza con tu Template ID

    // Enviar el correo
    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert("Correo enviado correctamente.");
            document.getElementById("contactForm").reset(); // Reinicia el formulario
        })
        .catch((error) => {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un error al enviar el correo. Inténtalo nuevamente.");
        });
}
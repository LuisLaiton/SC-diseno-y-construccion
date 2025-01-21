document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("miModal");
    const cerrar = document.getElementById("cerrarModal");

    // Mostrar el modal
    modal.style.display = "flex";

    // Cerrar el modal al hacer clic en la "X"
    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Mensaje de WhatsApp
const $CALLTOACTION = document.getElementById("callToAction");
const $BTNWA1 = document.getElementById("btnWA1");

function mensajeWP() { // Envia un mensaje por WhatsApp
    const phoneNumber = "573143372543";
    const message = "¡Hola! Estoy interesado en trabajar con SC Diseño y Construcción. ¿Cómo podemos empezar a planear mi proyecto?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

$CALLTOACTION.addEventListener("click", mensajeWP);
$BTNWA1.addEventListener("click", mensajeWP);

// Correo electronico
(function () {
    emailjs.init("pjbmETWvCWvxzJI4Y");
})();

function sendEmail(event) {

    textoBtn(); // Texto del envio

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
    const serviceID = "service_3qdo6o1";
    const templateID = "template_8zn63ox";

    // Enviar el correo
    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert("Correo enviado correctamente.");
            document.getElementById("contactForm").reset(); // Reinicia el formulario
        })
        .catch((error) => {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un error al enviar el correo. También puedes contactarnos por WhatsApp.");
        })
        .finally(() => textoBtn()); // Texto del envio
}

// Cambia el texto que se esta mostrando en el boton de envio
function textoBtn() {
    const $TEXTO_BTN = document.getElementById("btn-texto");
    const $ENVIANDO_BTN = document.getElementById("btn-enviando");
    $TEXTO_BTN.classList.toggle("d-none"); 
    $ENVIANDO_BTN.classList.toggle("d-none");
}
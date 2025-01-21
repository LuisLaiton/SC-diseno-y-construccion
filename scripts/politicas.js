// Mensaje de WhatsApp
const $BTNWA2 = document.getElementById("btnWA2");

function mensajeWP() { // Envia un mensaje por WhatsApp
    const phoneNumber = "573143372543";
    const message = "¡Hola! Estoy interesado en trabajar con SC Diseño y Construcción. ¿Cómo podemos empezar a planear mi proyecto?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

$BTNWA2.addEventListener("click", mensajeWP);

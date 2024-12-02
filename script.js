// Seleccionamos los elementos necesarios
const galleryImages = document.querySelectorAll('.gallery .image img');
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeModal = document.getElementById('closeModal');

// Agregamos eventos a las imágenes de la galería
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    fullscreenModal.style.display = 'flex';
    fullscreenImage.src = image.src;
  });
});

// Cerramos el modal al hacer clic en la 'X'
closeModal.addEventListener('click', () => {
  fullscreenModal.style.display = 'none';
});

// Cerramos el modal si hacemos clic fuera de la imagen
fullscreenModal.addEventListener('click', (event) => {
  if (event.target === fullscreenModal) {
    fullscreenModal.style.display = 'none';
  }
});
// Fecha del próximo evento: Halloween 2024
const eventDate = new Date('October 31, 2024 00:00:00').getTime();

// Función para actualizar la cuenta atrás
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        // Cálculo de días, horas, minutos y segundos restantes
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Actualización del contenido HTML
        document.getElementById('countdown').innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // Si la cuenta atrás llega a cero
        document.getElementById('countdown').innerHTML = "¡Evento en curso!";
    }
}

// Actualización cada segundo
setInterval(updateCountdown, 1000);

// Llamada inicial
updateCountdown();

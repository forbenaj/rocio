const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");
const carouselImages = document.querySelector(".carousel-images");
const imageWidth = carouselImages.children[0].offsetWidth;

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * imageWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.children.length - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

const studyCards = document.querySelectorAll('.study-card');
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado
    const targetId = this.getAttribute('href'); // Obtiene el ID del objetivo
    const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start'      // Alinea el elemento en la parte superior de la ventana
      });
    }
  });
});


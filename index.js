
  document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.slider');
    let currentSlide = 0;
    const slideCount = sliders.length;

    function showSlide(n) {
      sliders.forEach(slider => {
        slider.style.display = "none";
      });
      sliders[n].style.display = "block";
      sliders[n].classList.add("slide-in-left");
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      showSlide(currentSlide);
    }

    // Initial call to show the first slide
    showSlide(currentSlide);

    // Auto slide change every 3 seconds
    setInterval(nextSlide, 3000);
  });


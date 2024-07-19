<script type="text/javascript">
    let currentIndex = 0;

const slider = document.getElementById('sliders');
const slides = slider.children;
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  slider.style.transform = `translateX(${-currentIndex * 310}px)`;
}

setInterval(showNextSlide, 3000);
</script>

    
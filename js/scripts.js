/**
 * 
 Reset slides (return to first slide)

 */
const cardsReset = document.querySelector(".cards-reset")
const imageCards = document.querySelectorAll(".card-image")

const slides = document.querySelectorAll(".slides")

function resetCards() {
  for (let i = 0; i < imageCards.length; i++) {
    if (imageCards[i].classList.contains("hide")) {
      imageCards[i].classList.remove("hide")
    }
  }
}

cardsReset.addEventListener("click", () => {
  resetCards()
  currentSlide(1)
})

/**
  Slideshow
 */

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

const previousSlide = document.querySelector(".slides-prev")
previousSlide.addEventListener("click", e => {
  e.preventDefault()
  plusSlides(-1)
})

const nextSlide = document.querySelector(".slides-next")
nextSlide.addEventListener("click", e => {
  e.preventDefault()
  plusSlides(1)
})

function showSlides(n) {
  let i

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide")
    slides[i].classList.remove("show")
  }

  slides[slideIndex - 1].classList.add("show")
  slides[slideIndex - 1].classList.remove("hide")

  const slideNumber = document.querySelector(".slide-number")
  slideNumber.textContent = n
  const slidesTotal = document.querySelector(".slide-total")
  slidesTotal.textContent = slides.length

  /**
   * Disappear prev button on slide 1 and next button on slide last
   */

  const previousButton = document.querySelector(".previous")
  if (n === 1) {
    previousButton.setAttribute("disabled", "true")
    previousButton.classList.add("slides-button-disabled")
  } else {
    previousButton.removeAttribute("disabled")
    previousButton.classList.remove("slides-button-disabled")
  }

  const nextButton = document.querySelector(".next")
  if (n >= slides.length) {
    nextButton.setAttribute("disabled", "true")
    nextButton.classList.add("slides-button-disabled")
  } else {
    nextButton.removeAttribute("disabled")
    nextButton.classList.remove("slides-button-disabled")
  }

  // Only show 'Reset' button after slide 2
  if (n > 1) {
    cardsReset.style.display = "block"
  } else {
    cardsReset.style.display = "none"
  }
}

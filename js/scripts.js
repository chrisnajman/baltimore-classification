/**
  Flashcards - flip the cards
 */

document.addEventListener("click", e => {
  if (!e.target.matches(".card-toggle")) return

  e.preventDefault()

  const cardBox = e.target.closest("[data-flashcards-wrapper]")

  const cardDescription = cardBox.querySelector(".card-description")
  cardDescription.classList.toggle("show")

  const cardImage = cardBox.querySelector(".card-image")
  cardImage.classList.toggle("hide")
})

/**
 * 
 Reset flashcards - return them all to non-flipped state

 */
const cardsReset = document.querySelector(".cards-reset")
const allTextCards = document.querySelectorAll(".card-description")
const allImageCards = document.querySelectorAll(".card-image")

const slides = document.querySelectorAll(".slides")

function resetCards() {
  for (let i = 0; i < allTextCards.length; i++) {
    if (allTextCards[i].classList.contains("show")) {
      allTextCards[i].classList.remove("show")
    }
  }

  for (let i = 0; i < allImageCards.length; i++) {
    if (allImageCards[i].classList.contains("hide")) {
      allImageCards[i].classList.remove("hide")
    }
  }
}

// cardsReset.addEventListener("click", resetCards)
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

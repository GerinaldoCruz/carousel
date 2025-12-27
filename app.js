const slides = document.querySelectorAll('[data-js="carousel__item"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const body = document.body

const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0

const minipulateSlidesClasses = correctSlideIndex => {
   slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
   slides[correctSlideIndex].classList.add('carousel__item--visible')
}

const updateBackgroundImage = correctSlideIndex => {
   const backgroundURL = slides[correctSlideIndex].children[0].getAttribute('src')   
   body.style.setProperty('--bg-image', `url(".${backgroundURL}")`)
}

prevButton.addEventListener('click', () => {
   const correctSlideIndex = currentSlideIndex === 0 
      ? currentSlideIndex = lastSlideIndex 
      : --currentSlideIndex
   
   minipulateSlidesClasses(correctSlideIndex)
   updateBackgroundImage(correctSlideIndex)
})

 nextButton.addEventListener('click', () => {
   const correctSlideIndex = currentSlideIndex === lastSlideIndex
      ? currentSlideIndex = 0
      : ++currentSlideIndex
   
   minipulateSlidesClasses(correctSlideIndex)
   updateBackgroundImage(correctSlideIndex)
 })

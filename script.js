const mobileBurger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const vegetarianButton = document.getElementById('vegetarian-button');
const veganButton = document.getElementById('vegan-button');
const meatButton = document.getElementById('meat-button');
const vegetarianSection = document.getElementById('vegetarian');
const veganSection = document.getElementById('vegan');
const meatSection = document.getElementById('meat');

mobileBurger.addEventListener('click', () => {
  mobileNav.classList.toggle('hide');
})

function transformBurgerToX(el) {
  el.classList.toggle('transform');
}


vegetarianButton.addEventListener('click', () => {
  vegetarianSection.classList.remove('hide');
  veganSection.classList.add('hide');
  meatSection.classList.add('hide');
})
veganButton.addEventListener('click', () => {
  veganSection.classList.remove('hide');
  vegetarianSection.classList.add('hide');
  meatSection.classList.add('hide');
})
meatButton.addEventListener('click', () => {
  meatSection.classList.remove('hide');
  veganSection.classList.add('hide');
  vegetarianSection.classList.add('hide');
})
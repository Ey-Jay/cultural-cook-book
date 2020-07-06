const mobileBurger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const vegetarianButton = document.getElementById('vegetarian-button');
const veganButton = document.getElementById('vegan-button');
const meatButton = document.getElementById('meat-button');
const vegetarianSection = document.getElementById('vegetarian');
const veganSection = document.getElementById('vegan');
const meatSection = document.getElementById('meat');

const recipes = [{
  id: 1001,
  name: 'Curry',
  img: 'assets/dish.jpg',
  country: 'Colombia',
  category: 'Meat',
  ingredients: [{
    meat: '500g'
  }, {
    onions: '2'
  }, {
    'curry-powder': '50g'
  }],
  instructions: 'Add this together and then This and then this and there it is'

}]

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
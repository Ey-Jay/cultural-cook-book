const mobileBurger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const vegetarianButton = document.getElementById('vegetarian-button');
const veganButton = document.getElementById('vegan-button');
const meatButton = document.getElementById('meat-button');
const vegetarianSection = document.getElementById('vegetarian');
const veganSection = document.getElementById('vegan');
const meatSection = document.getElementById('meat');
const shareButton = document.getElementById('share-button');
const shareModal = document.querySelector('.share-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButton = document.getElementById('close-share');

mobileBurger.addEventListener('click', () => {
  mobileNav.classList.toggle('hide');
})

function transformBurgerToX(el) {
  el.classList.toggle('transform');
}

if (vegetarianButton) {
  vegetarianButton.addEventListener('click', () => {
    vegetarianSection.classList.remove('hide');
    veganSection.classList.add('hide');
    meatSection.classList.add('hide');
  })
}

if (veganButton) {
  veganButton.addEventListener('click', () => {
    veganSection.classList.remove('hide');
    vegetarianSection.classList.add('hide');
    meatSection.classList.add('hide');
  })
}

if (meatButton) {
  meatButton.addEventListener('click', () => {
    meatSection.classList.remove('hide');
    veganSection.classList.add('hide');
    vegetarianSection.classList.add('hide');
  })
}

if (shareButton) {
  shareButton.addEventListener('click', () => {
    modalOverlay.classList.toggle('hide');
    shareModal.classList.toggle('hide');
    shareButton.classList.add('hide');
  })
  modalCloseButton.addEventListener('click', () => {
    modalOverlay.classList.toggle('hide');
    shareModal.classList.toggle('hide');
    shareButton.classList.remove('hide');
  })
}


if (modalOverlay) {
  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.toggle('hide');
    shareModal.classList.toggle('hide');
    shareButton.classList.remove('hide');
  })
}
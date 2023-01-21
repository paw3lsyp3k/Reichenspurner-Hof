const sections = document.querySelectorAll('.wrapper');
const products = document.querySelectorAll('.products-menu-item');

const options = {
  root: null,
  threshold: 0.4,
  rootMargin: '-100px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle(entry.isIntersecting);
    if (entry.target === sections[0]) {
      products[0].classList.toggle('prod-active');
    }
    if (entry.target === sections[1]) {
      products[1].classList.toggle('prod-active');
    }
    if (entry.target === sections[2]) {
      products[2].classList.toggle('prod-active');
    }
    if (entry.target === sections[3]) {
      products[3].classList.toggle('prod-active');
    }
    if (entry.target === sections[4]) {
      products[4].classList.toggle('prod-active');
    }
    if (entry.target === sections[5]) {
      products[5].classList.toggle('prod-active');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// places menu

const placesBtn = document.querySelector('.navigation-places-btn');
const placesContainer = document.querySelector('.navigation-places-list');

placesBtn.addEventListener('click', () => {
  placesBtn.classList.toggle('places-btn-active');
  placesContainer.classList.toggle('places-list-active');
});

//mobile menu

const burgerBtn = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-active');
  navigation.classList.toggle('navigation-active');
});

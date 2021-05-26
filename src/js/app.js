const hamburgerButton = document.querySelector('.site-nav__hamburger');
const nav = document.querySelector('.site-nav__items');
const navItems = document.querySelectorAll('.site-nav__items > li');
const subMenuToggle = document.querySelector('.site-nav__sub');

hamburgerButton.addEventListener('click', function() {
  console.log('click test blah')
  nav.classList.toggle('site-nav__items--visible');
})

// navItems.forEach((item) => {
//   if (item.querySelector('.site-nav__dropdown')) {
//     item.addEventListener('click', toggleDropdown, false);
//   }
// })

// function toggleDropdown() {

// }

subMenuToggle.addEventListener('touchstart', function() {
  console.log('touch start')
  this.parentElement.classList.toggle('sub-active');
})


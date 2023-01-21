'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with--menu');
  } else {
    document.body.classList.remove('page__body--with--menu');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('contact-us-form').addEventListener(
  'submit', stopDefAction, false
);

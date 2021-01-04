"use strict";

(function () {
  var DOM = {
    toggle: document.getElementById('pricecheck'),
    price: document.querySelectorAll('.pricing__item--is-pricetag')
  };
  DOM.toggle.addEventListener('click', function () {
    for (var i = 0; i < DOM.price.length; i++) {
      DOM.price[i].classList.toggle('is-hidden');
    }
  });
})();
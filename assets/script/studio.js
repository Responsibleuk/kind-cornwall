/* jshint esversion: 8 */

// Accordian for expanding boxes on studios page
const accordion_items_elms = document.querySelectorAll('.accordion .accordion-item');
accordion_items_elms.forEach(accordionItem => {
  accordionItem.querySelector('.accordion-item-head').addEventListener('click', (e) => {
    accordionItem.classList.toggle('open');
  });

});

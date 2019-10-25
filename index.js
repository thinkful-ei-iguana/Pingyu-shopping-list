'use strict';

$('form').on('submit', ele => {
    ele.preventDefault();
    let val = $('input:input').val();
    if (val !== '') {
        $('ul').append(`<li>
  <span class="shopping-item">${val}</span>
  <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
<span class="button-label">check</span>
</button>
      <button class="shopping-item-delete">
<span class="button-label">delete</span>
</button>
  </div>
</li>`);
    }
});

$('.shopping-list').on('click', '.shopping-item-toggle', e => {
    $(e.target).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', e => {
    $(e.target).closest('li').remove();
});
import $ from 'jquery';

(function () {
  if (!$('.js-tabs').length) return;

  $('.js-tabs').each((i, tabs) => {
    $(tabs).find('.js-tab-item').eq(0).addClass('is-active');
    $(tabs).find('.js-tab-trigger > *').eq(0).addClass('is-active');

    $(tabs).find('.js-tab-trigger > *').on('click', function() {
      $(tabs).find('.js-tab-trigger > *').removeClass('is-active');

      const clickedTriggerIndex = $(this).index();
      $(tabs).find('.js-tab-trigger > *').eq(clickedTriggerIndex).addClass('is-active');
      $(tabs).find('.js-tab-item').removeClass('is-active');
      $(tabs).find('.js-tab-item').eq(clickedTriggerIndex).addClass('is-active');
    });
  });
}());

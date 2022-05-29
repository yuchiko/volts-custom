import $ from 'jquery';

(function () {
  initMainFormTabSwitcher();

  function initMainFormTabSwitcher() {
    $('.js-form-tab-item').on('click', function () {
      const formTargetId = $(this).data('main-form');
      const mainFormVariants = $('.js-main-form-variant');
      $('.js-form-tab-item').removeClass('is-active');
      $(this).addClass('is-active');

      mainFormVariants.each((i, item) => {
        $(item).addClass('hide');
      });
      $('#' + formTargetId).removeClass('hide');
    });
  }
}());

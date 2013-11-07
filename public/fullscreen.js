var fullscreenPages = function () {
  var cssAttribute = 'min-height';

  resizeWrappers();

  $(window).on('resize', function() {
    resizeWrappers();
  });

  function resizeWrappers() {
    $('.page').css(cssAttribute, $(window).height());
  }
}

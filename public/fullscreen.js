var fullscreenPages = function () {
  var cssAttribute = 'min-height';

  resizeWrappers();

  $(window).on('resize', function() {
    resizeWrappers();
  });

  function resizeWrappers() {
    $('.page-cube').css(cssAttribute, $(window).height());
    $('.page').css(cssAttribute, $(window).height());
  }
}

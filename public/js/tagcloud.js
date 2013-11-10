var initTagCloud = function () {
  $.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: 'pt'},
    color: {start: '#cde', end: '#f52'}
  };
  $('.lang-cloud a').tagcloud();
}

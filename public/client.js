window.onload = function() {
  _currentPageNumber = 1;

  var ws = new WebSocket('ws://10.0.1.4:3702');
	ws.onmessage = function (event) {
    console.log(event.data);
  }

  fullscreenPages();

  initTimeline();
  initWink();
  initTagCloud();
  initParticleAnimation();

  $('a.anchor-link').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
  });

  $('.page').waypoint(function () {
    var pageNumber = $(this).attr('data-page-id');
    if (pageNumber === undefined)
      return;
    _currentPageNumber = pageNumber;
  });

  $('#hire').mouseover(function () {
    $(this).addClass('animated tada');
  }).mouseout(function() {
    $(this).removeClass('animated tada');
  });

  $(window).keydown(function(e){
    e.preventDefault();

    if (e.keyCode === 40) {}
      // Key down
    if (e.keyCode === 38) {}
      // Key up

    console.log(_currentPageNumber);

    var targetPage;
    $('.page').each(function() {
      console.log($(this).attr('data-page-id'));
      if ( $(this).attr('data-page-id') == _currentPageNumber + 1 ) {
        targetPage = $(this);
        console.log('asodjkaskdjks');
      }
    });

    $('html, body').animate({
      scrollTop: $(targetPage).offset().top
    }, 1000);

  });

  cubeInitialized = false;
  $('#simple-hack').waypoint(function() {
    initCube();
  });

}

window.onload = function() {
  _currentPageNumber = 1;

  var ws = new WebSocket('ws://10.0.1.4:3702');
	ws.onmessage = function (event) {
    console.log(event.data);
  }

  cubeInitialized = false;

  fullscreenPages();

  initDonut();
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
    _currentPageNumber = parseInt(pageNumber);
  });

  $('#hire').mouseover(function () {
    $(this).addClass('animated tada');
  }).mouseout(function() {
    $(this).removeClass('animated tada');
  });

  $(window).keydown(function(e){
    e.preventDefault();
    var targetPageNumber;

    if (e.keyCode === 40)
      targetPageNumber = _currentPageNumber + 1;
    else if (e.keyCode === 38)
      targetPageNumber = _currentPageNumber - 1;
    else
      return;

    var targetPage;
    $('.page').each(function() {
      if ( $(this).attr('data-page-id') == targetPageNumber ) {
        targetPage = $(this);
      }
    });

    $('html, body').animate({
      scrollTop: $(targetPage).offset().top
    }, 1000);

  });


  var hideDialog = function(){
    $('.app-dialog').fadeOut(300);
  }

  var showDialog = function(){
    $('.app-dialog').fadeIn(300);
  }

  $('#simple-hack').waypoint(function() {
    // initCube();
    //showDialog();
  });

  var ws = new WebSocket('ws://10.0.1.4:3702');
  ws.onmessage = function (event) {
    // console.log(event.data);
    var data = event.data;
    console.log(data);
    if(data == 'Phone connected'){
      console.log('should init cube');
      hideDialog();
      initCube();
    }else if(data == 'Phone disconnected'){
      console.log('should tear down cube');
      destroyCube();
      showDialog();
    }
  }

}

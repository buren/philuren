window.onload = function() {
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

  $('#hire').mouseover(function () {
    $(this).addClass('animated tada');
  }).mouseout(function() {
    $(this).removeClass('animated tada');
  });

  $(window).keydown(function(e){
    console.log(e.keyCode());
  });

  cubeInitialized = false;
  $('#simple-hack').waypoint(function() {
    initCube();
  });

}

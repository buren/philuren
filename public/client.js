window.onload = function() {
  var ws = new WebSocket('ws://10.0.1.4:3702');
	ws.onmessage = function (event) {
    console.log(event.data);
  }

  fullscreenPages();
  initTimeline();
  initWink();

  $('a.anchor-link').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
  });


  particlesAnimated = false;
  $('#particle-animation-trigger').waypoint(function() {
    if (particlesAnimated)
      return;
    var wave = document.querySelector(".particles");
    wave.setAttribute("class", "particles animate");

    particlesAnimated = true;
  });

  cubeInitialized = false;
  $('#simple-hack').waypoint(function() {
    initCube();
  });

}

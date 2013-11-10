window.onload = function() {

  cubeInitialized = false;



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

  $.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: 'pt'},
    color: {start: '#cde', end: '#f52'}
  };
  $('.lang-cloud a').tagcloud();

  $('#hire').mouseover(function () {
    $(this).addClass('animated tada');
  }).mouseout(function() {
    $(this).removeClass('animated tada');
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

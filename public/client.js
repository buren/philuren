window.onload = function() {
  var ws = new WebSocket('ws://10.0.1.4:3702');
	ws.onmessage = function (event) {
    console.log(event.data);
  }

  var initWink = function () {

  }


  fullscreenPages();
  initTimeline();
  initWink();

  setInterval(function() {
    var profileImage = $('#phifflarn-profile');
    profileImage.attr('src', profileImage.attr('data-wink'));
    setTimeout(function() {
      profileImage.attr('src', profileImage.attr('data-src'));
    }, 200);
  }, 3000);

  setInterval(function() {
    var profileImage = $('#buren-profile');
    profileImage.attr('src', profileImage.attr('data-wink'));
    setTimeout(function() {
      profileImage.attr('src', profileImage.attr('data-src'));
    }, 200);
  }, 5000);

  cubeInitialized = false;
  $('#simple-hack').waypoint(function() {
    initCube();
  });

}

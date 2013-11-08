window.onload = function() {
  var ws = new WebSocket('ws://10.0.1.4:3702');
	ws.onmessage = function (event) {
    console.log(event.data);
  }

  fullscreenPages();
  initTimeline();

  cubeInitialized = false;
  $('#cube').waypoint(function() {
    initCube();
  });

}

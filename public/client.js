window.onload = function() {
  _currentPageNumber = 1;

 //  var ws = new WebSocket('ws://10.0.1.4:3702');
	// ws.onmessage = function (event) {
 //    console.log(event.data);
 //  }

  cubeInitialized = false;

  fullscreenPages();

  initDonut();
  initTimeline();
  initWink();
  initTagCloud();
  initParticleAnimation();

  initAnimatedCheckboxes();

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

  var checkedBoxes = false;
  $('#who-we-are').waypoint(function() {
    if (checkedBoxes)
      return;
    var checkDelay = 400;
    $('.ac-custom input').each(function(index, element) {
      var inputTarget = $('#' + element.id);
      if(inputTarget.attr('checked') == true)
        return;
      setTimeout(
        function() {
          inputTarget.trigger('click');
        },
        checkDelay*index);
    });
    checkedBoxes = true;
  });



  $('#hire').mouseover(function () {
    $(this).addClass('animated tada');
  }).mouseout(function() {
    $(this).removeClass('animated tada');
  });

  var numberOfPages = $('.page').length;

  $(window).keydown(function(e){
    e.stopPropagation();

    var targetPageNumber;

    if (e.keyCode === 40)
      targetPageNumber = _currentPageNumber + 1;
    else if (e.keyCode === 38)
      targetPageNumber = _currentPageNumber - 1;
    else
      return;

    if ( targetPageNumber > numberOfPages )
      targetPageNumber = numberOfPages;

    if ( targetPageNumber < 1 )
      targetPageNumber = 1;


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

  var parseData = function(data){
    var components = data.split(',');
    if(components[0] == "s"){
      rotationX += parseInt(components[1]);
      rotationY += parseInt(components[2]);
    }
    else if(components[0] == "z"){
      console.log('ZOOOOOOOOM');
    }
    // console.log(components);
  }

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
    // console.log(data);
    if(data == 'Phone connected'){
      console.log('should init cube');
      hideDialog();
      initCube();
    }else if(data == 'Phone disconnected'){
      console.log('should tear down cube');
      destroyCube();
      showDialog();
    }
    else{
      parseData(data);
    }
  }

}

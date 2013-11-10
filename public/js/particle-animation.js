var initParticleAnimation = function() {
  particlesAnimated = false;
  $('#particle-animation-trigger').waypoint(function() {
    if (particlesAnimated)
      return;
    var wave = document.querySelector(".particles");
    wave.setAttribute("class", "particles animate");

    particlesAnimated = true;
  });
}

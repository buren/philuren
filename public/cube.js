var rotationX = 0;
var rotationY = 0;

var totalRotationX = 0;
var totalRotationY = 0;
var initCube = function () {

  $('#webgl-container').fadeIn(300);

  if (cubeInitialized)
    return;
  cubeInitialized = true;


  if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var sphere, uniforms, attributes;

    var vc1;

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

      camera = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 1, 10000 );
      camera.position.z = 300;

      scene = new THREE.Scene();

      attributes = {

        size: { type: 'f', value: [] },
        ca:   { type: 'c', value: [] }

      };

      uniforms = {

        amplitude: { type: "f", value: 1.0 },
        color:     { type: "c", value: new THREE.Color( 0xffffff ) },
        texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "textures/sprites/disc2.png" ) },

      };

      uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

      var shaderMaterial = new THREE.ShaderMaterial( {

        uniforms:     uniforms,
        attributes:     attributes,
        vertexShader:   document.getElementById( 'vertexshader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
        transparent:  true

      });


      var radius = 100;
      var geometry = new THREE.CubeGeometry( 0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10 );

      cube = new THREE.ParticleSystem( geometry, shaderMaterial );

      cube.dynamic = true;
      cube.sortParticles = true;


      var vertices = cube.geometry.vertices;
      var values_size = attributes.size.value;
      var values_color = attributes.ca.value;

      for( var v = 0; v < vertices.length; v++ ) {
        values_size[ v ] = 10;
        values_color[ v ] = new THREE.Color( 0xffffff );
      }

      scene.add( cube );
      renderer = new THREE.WebGLRenderer( { alpha: true } );
      renderer.setSize( WIDTH, HEIGHT );
      var container = document.getElementById( 'webgl-container' );
      container.appendChild( renderer.domElement );
      window.addEventListener( 'resize', onWindowResize, false );
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
      requestAnimationFrame( animate );
      render();
      // stats.update();
    }

    var rotWorldMatrix;

    function rotateAroundWorldAxis(object, axis, radians) {
      rotWorldMatrix = new THREE.Matrix4();
      rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

    // old code for Three.JS pre r54:
    //  rotWorldMatrix.multiply(object.matrix);
    // new code for Three.JS r55+:
      rotWorldMatrix.multiply(object.matrix);                // pre-multiply

      object.matrix = rotWorldMatrix;

    // old code for Three.js pre r49:
    // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
    // new code for Three.js r50+:
      object.rotation.setFromRotationMatrix(object.matrix);
    }

    var xAxis;
    var yAxis;

    function render() {
      if(xAxis === undefined && yAxis === undefined){
        xAxis = new THREE.Vector3(0,1,0);
        yAxis = new THREE.Vector3(1,0,0);
      }
      rotationX *= 0.95;
      rotationY *= 0.95;
      if(Math.abs(rotationX) < 1){
        rotationX = 0;
      }
      if(Math.abs(rotationY) < 1){
        rotationY = 0
      }
      // var time = Date.now() * 0.005;
      // cube.rotation.y = 1 + (0.0002 ) * time + rotationY;
      // console.log(cube.rotation.y);
      totalRotationX -= rotationX/100;
      //cube.rotation.y = 0.001 * totalRotationX;
      totalRotationY += rotationY/100;

      // rotateAroundWorldAxis(cube, xAxis, 0.001 * totalRotationX * Math.PI / 180);
      rotateAroundWorldAxis(cube, xAxis, 0.1 * (-rotationX) * Math.PI / 180);
      rotateAroundWorldAxis(cube, yAxis, 0.1 * rotationY * Math.PI / 180);
      //rotateAroundWorldAxis(cube, yAxis, 0.001 * totalRotationX * Math.PI / 180);
      // rotateAroundWorldAxis(cube, yAxis, totalRotationY);
      //cube.rotation.x = 0.001 * totalRotationY;
      // cube.rotation.z = 0.02 * time;


      for( var i = 0; i < attributes.size.value.length; i ++ ) {
        if ( i < vc1 )
          attributes.size.value[ i ] = 16 + 12 * Math.sin( 0.1 * i + time );
      }

      attributes.size.needsUpdate = true;
      renderer.render( scene, camera );

  }

}

var destroyCube = function(){
  $('#webgl-container').fadeOut(200);
  console.log('should be destroying cube');
}

var initCube = function () {

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


      var radius = 100, segments = 68, rings = 38;
      // var geometry = new THREE.SphereGeometry( radius, segments, rings );

      // vc1 = geometry.vertices.length;

      var geometry = new THREE.CubeGeometry( 0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10 );

      // THREE.GeometryUtils.merge( geometry, geometry2 );

      sphere = new THREE.ParticleSystem( geometry, shaderMaterial );

      sphere.dynamic = true;
      sphere.sortParticles = true;

      var vertices = sphere.geometry.vertices;
      var values_size = attributes.size.value;
      var values_color = attributes.ca.value;

      for( var v = 0; v < vertices.length; v++ ) {

        values_size[ v ] = 10;
        values_color[ v ] = new THREE.Color( 0xffffff );

        // if ( v < vc1 ) {

        //   values_color[ v ].setHSL( 0.01 + 0.1 * ( v / vc1 ), 0.99, ( vertices[ v ].y + radius ) / ( 4 * radius ) );

        // } else {

        //   values_size[ v ] = 40;
        //   values_color[ v ].setHSL( 0.6, 0.75, 0.25 + vertices[ v ].y / ( 2 * radius ) );

        // }

      }

      scene.add( sphere );

      renderer = new THREE.WebGLRenderer( { alpha: true } );
      renderer.setSize( WIDTH, HEIGHT );

      var container = document.getElementById( 'webgl-container' );
      container.appendChild( renderer.domElement );

      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      container.appendChild( stats.domElement );

      //

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
      stats.update();

    }

    function render() {

      var time = Date.now() * 0.005;

      sphere.rotation.y = 0.02 * time;
      sphere.rotation.z = 0.02 * time;

      for( var i = 0; i < attributes.size.value.length; i ++ ) {

        if ( i < vc1 )
          attributes.size.value[ i ] = 16 + 12 * Math.sin( 0.1 * i + time );


      }

      attributes.size.needsUpdate = true;

      renderer.render( scene, camera );

  }

}

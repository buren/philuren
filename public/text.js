window.onload = function () {
  if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
      var textBackgroundColor = 0xffffff;

      var renderer, scene, camera, stats;

      var object, uniforms, attributes;

      var text = "Philuren",

        height = 15,
        size = 50,

        curveSegments = 10,
        steps = 40,

        bevelThickness = 5,
        bevelSize = 1.5,
        bevelSegments = 10,
        bevelEnabled = true,

        font = "helvetiker",    // helvetiker, optimer, gentilis, droid sans, droid serif
        weight = "bold",    // normal bold
        style = "normal";   // normal italic

      var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

      init();
      animate();

      function init() {

        camera = new THREE.PerspectiveCamera( 30, WIDTH / HEIGHT, 1, 10000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        attributes = {

          displacement: { type: 'v3', value: [] },
          customColor: {  type: 'c', value: [] }

        };

        uniforms = {

          amplitude: { type: "f", value: 5.0 },
          opacity:   { type: "f", value: 0.3 },
          color:     { type: "c", value: new THREE.Color( 0xff0000 ) }

        };

        var shaderMaterial = new THREE.ShaderMaterial( {

          uniforms:       uniforms,
          attributes:     attributes,
          vertexShader:   document.getElementById( 'vertexshader' ).textContent,
          fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
          blending:       THREE.AdditiveBlending,
          depthTest:      false,
          transparent:    true

        });

        shaderMaterial.linewidth = 1;

        geometry = new THREE.TextGeometry( text, {

          size: size,
          height: height,
          curveSegments: curveSegments,

          font: font,
          weight: weight,
          style: style,

          bevelThickness: bevelThickness,
          bevelSize: bevelSize,
          bevelEnabled: bevelEnabled,
          bevelSegments: bevelSegments,

          steps: steps

        });

        geometry.dynamic = true;

        THREE.GeometryUtils.center( geometry );

        object = new THREE.Line( geometry, shaderMaterial, THREE.LineStrip );

        var vertices = object.geometry.vertices;

        var displacement = attributes.displacement.value;
        var color = attributes.customColor.value;

        for( var v = 0; v < vertices.length; v ++ ) {

          displacement[ v ] = new THREE.Vector3();

          color[ v ] = new THREE.Color( 0xffffff );
          color[ v ].setHSL( v / vertices.length, 0.5, 0.5 );

        }

        object.rotation.x = 0.2;

        scene.add( object );

        renderer = new THREE.WebGLRenderer( { antialias: true, alpha: false } );
        renderer.setClearColor( textBackgroundColor, 1 );
        renderer.setSize( WIDTH, HEIGHT );

        var container = document.getElementById( 'webgl-text' );
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

        var time = Date.now() * 0.001;

        object.rotation.y = 0.25 * time;

        uniforms.amplitude.value = 0.5 * Math.sin( 0.5 * time );
        uniforms.color.value.offsetHSL( 0.0005, 0, 0 );

        var nx, ny, nz, value;

        for( var i = 0, il = attributes.displacement.value.length; i < il; i ++ ) {

          nx = 0.3 * ( 0.5 - Math.random() );
          ny = 0.3 * ( 0.5 - Math.random() );
          nz = 0.3 * ( 0.5 - Math.random() );

          value = attributes.displacement.value[ i ];

          value.x += nx;
          value.y += ny;
          value.z += nz;

        }

        attributes.displacement.needsUpdate = true;

        renderer.render( scene, camera );

      }

}

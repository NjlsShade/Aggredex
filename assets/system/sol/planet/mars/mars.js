function loadMars() {
	sphereMars =  new THREE.SphereGeometry( 3389 / S, 32, 16 );

	// Old Texture Loader
	var marsTexture = THREE.ImageUtils.loadTexture( 'img/2k_mars.jpg' );
	var marsMaterial = new THREE.MeshLambertMaterial( { map: marsTexture } );
	mars = new THREE.Mesh( sphereMars.clone(), marsMaterial );
	mars.position.set(0, 0, 2.27987e+8 / S);
	scene.add( mars );

	object = mars;
	sphereObject = sphereMars;
	color = 0x1a0a00;
	scale = 1.05;
	inverse = 0.5;
	intensity = 1;
	atmo(object, sphereObject, color, scale, inverse, intensity);
	console.log("Mars Loaded")
}
console.log("Mars Defined")

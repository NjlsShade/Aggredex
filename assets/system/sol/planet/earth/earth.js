function loadEarth() {
	sphereEarth =  new THREE.SphereGeometry( 6371 / S, 32, 16 );

	// New Texture Loader
	var texloader = new THREE.TextureLoader();
	texloader.load("assets/system/sol/planet/earth/earth.jpg", function(earthTexture) {
		var earthMaterial = new THREE.MeshLambertMaterial( { map: earthTexture } );
		earth = new THREE.Mesh( sphereEarth.clone(), earthMaterial );
		earth.position.set(0, 0, 149598000 / S);
		scene.add( earth );

		// Label



		// Load atmosphere
		object = earth;
		sphereObject = sphereEarth;
		color = 0x00000f;
		scale = 1.05;
		inverse = 1;
		intensity = 6;
		atmo(object, sphereObject, color, scale, inverse, intensity);

		// Clouds
		text1 = THREE.ImageUtils.loadTexture( "cover.png" );
		text2 = THREE.ImageUtils.loadTexture( "grass.jpg" );
		scale = 1.02;
		cloud(text1, text2, scale);
	});

	// Varibles
	earthMass = 5.972e+24;

	console.log("Earth Loaded");
}
console.log("Earth Defined");

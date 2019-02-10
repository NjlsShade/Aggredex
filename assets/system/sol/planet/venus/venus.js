function loadVenus() {
	sphereVenus =  new THREE.SphereGeometry( 6052 / S, 32, 16 );

	// New Texture Loader
	var texloader = new THREE.TextureLoader();
	texloader.load("assets/system/sol/planet/venus/2k_venus_surface.jpg", function(venusTexture) {
		var venusMaterial = new THREE.MeshLambertMaterial( { map: venusTexture } );
		venus = new THREE.Mesh( sphereVenus.clone(), venusMaterial );
		venus.position.set(0, 0, 108942000 / S);
		scene.add( venus );

		// Label



		// Load atmosphere
		object = venus;
		sphereObject = sphereVenus;
		color = 0xff9f33;
		scale = 1.05;
		inverse = 1;
		intensity = 0;
		atmo(object, sphereObject, color, scale, inverse, intensity);

	});

	// Varibles
	venusMass = 4.867e+24;
	console.log("Venus Loaded");
}
console.log("Venus Defined");

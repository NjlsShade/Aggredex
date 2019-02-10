function loadNine() {
	sphereNine =  new THREE.SphereGeometry( 26000 / S, 32, 16 );

	// New Texture Loader
	var texloader = new THREE.TextureLoader();
	texloader.load("assets/system/sol/planet/nine/nine.jpg", function(nineTexture) {
		var nineMaterial = new THREE.MeshLambertMaterial( { map: nineTexture } );
		nine = new THREE.Mesh( sphereNine.clone(), nineMaterial );
		nine.position.set(0, 0, 1.047e+11 / S);
		scene.add( nine );

		object = nine;
		sphereObject = sphereNine;
		color = 0x00000f;
		scale = 1.05;
		inverse = 0.8;
		intensity = 6;
		atmo(object, sphereObject, color, scale, inverse, intensity);
	});

	// Varibles
	nineMass = 6e+25;

	console.log("Nine Loaded");
}
console.log("Nine Defined");

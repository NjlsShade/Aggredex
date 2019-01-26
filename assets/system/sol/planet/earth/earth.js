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
		var earthDiv = document.createElement( 'div' );
		earthDiv.className = 'label';
		earthDiv.textContent = 'Earth';
		earthDiv.style.marginTop = '-1em';
		var earthLabel = new THREE.CSS2DObject( earthDiv );
		earthLabel.position.set( 0, 149598000 / S, 0 );
		earth.add( earthLabel );

		object = earth;
		sphereObject = sphereEarth;
		color = 0x00000f;
		scale = 1.05;
		inverse = 0.8;
		intensity = 6;
		atmo(object, sphereObject, color, scale, inverse, intensity);
	});

	// Varibles
	earthMass = 5.972e+24;

	console.log("Earth Loaded");
}
console.log("Earth Defined");

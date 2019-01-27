function loadSol() {
	// Create objects - radius, segmentsWidth, segmentsHeight
	sphereSol =  new THREE.SphereGeometry( 695508 / S, 32, 16 );

	// Old Texture Loader
	var solTexture = THREE.ImageUtils.loadTexture( 'img/8k_sol.jpg' );
	var solMaterial = new THREE.MeshBasicMaterial( { map: solTexture } );
	sol = new THREE.Mesh( sphereSol.clone(), solMaterial );
	sol.position.set(0, 1, 0);
	scene.add( sol );


	object = sol;
	sphereObject = sphereSol;
	color = 0x00000f;
	scale = 1.5;
	inverse = 0.8;
	intensity = 0.5;
	glow(object, sphereObject, color, scale, inverse, intensity);

	// Varibles
	solMass = 1.989e+30;

	console.log("Sol Loaded")
}
console.log("Sol Defined");

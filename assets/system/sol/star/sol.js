function loadSol() {
	// Create objects - radius, segmentsWidth, segmentsHeight
	sphereSol =  new THREE.SphereGeometry( 695508 / S, 32, 16 );

	// Old Texture Loader
	var solTexture = THREE.ImageUtils.loadTexture( 'img/8k_sol.jpg' );
	var solMaterial = new THREE.MeshBasicMaterial( { map: solTexture } );
	sol = new THREE.Mesh( sphereSol.clone(), solMaterial );
	sol.position.set(0, 1, 0);
	scene.add( sol );


	// Varibles
	solMass = 1.989e+30;

	console.log("Sol Loaded")
}
console.log("Sol Defined");

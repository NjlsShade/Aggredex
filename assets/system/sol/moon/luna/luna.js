function loadLuna() {
	sphereLuna =  new THREE.SphereGeometry( 1737 / S, 32, 16 );

	// Old Texture Loader
	var lunaTexture = THREE.ImageUtils.loadTexture( 'assets/system/sol/moon/luna/img/luna.jpg' );
	var lunaMaterial = new THREE.MeshLambertMaterial( { map: lunaTexture } );
	luna = new THREE.Mesh( sphereLuna.clone(), lunaMaterial );
	luna.position.set(0, 0, 149982400 / S);
	scene.add( luna );

	object = luna;
	sphereObject = sphereLuna;
	color = 0x0d0d0d;
	scale = 1.05;
	inverse = 0.5;
	intensity = 1;
	atmo(object, sphereObject, color, scale, inverse, intensity);
	console.log("Luna Loaded")
}
console.log("Luna Defined")

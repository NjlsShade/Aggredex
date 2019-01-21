function loadShaders() {
	vertexShader = `
	uniform vec3 viewVector;
	uniform float c;
	uniform float p;
	varying float intensity;
	void main()
	{
		vec3 vNormal = normalize( normalMatrix * normal );
		vec3 vNormel = normalize( normalMatrix * viewVector );
		intensity = pow( c - dot(vNormal, vNormel), p );

		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	}
	`;

	fragmentShader = `
	uniform vec3 glowColor;
	varying float intensity;
	void main()
	{
		vec3 glow = glowColor * intensity;
		gl_FragColor = vec4( glow, 1.0 );
	}
	`;
}
console.log("Atmosphere Shaders Loaded");

function atmo() {
	var customMaterial = new THREE.ShaderMaterial(
	{
		uniforms:
		{
			"c":   { type: "f", value: inverse },
			"p":   { type: "f", value: intensity },
			glowColor: { type: "c", value: new THREE.Color(color) },
			viewVector: { type: "v3", value: object.position }
		},
		vertexShader,
		fragmentShader,
		side: THREE.FrontSide,
		blending: THREE.AdditiveBlending,
		transparent: true
	}   );

	this.objectGlow = new THREE.Mesh( sphereObject.clone(), customMaterial.clone() );
	objectGlow.scale.multiplyScalar(scale);

	// This is not an ideal way to set the objects position - Need to revise this later
	var objectx = object.position.x;
	var objecty = object.position.y;
	var objectz = object.position.z;

	objectGlow.position.set(objectx, objecty, objectz);
	scene.add( objectGlow );
	console.log("Atmosphere Added");
}

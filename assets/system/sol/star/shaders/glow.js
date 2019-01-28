function loadGlowShaders() {
	vertexGlowShader = `
	uniform vec3 viewVector;
	varying float intensity;
	void main() {
	    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
	    vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
	    intensity = pow( dot(normalize(viewVector), actual_normal), 6.0 );
	}
	`;

	fragmentGlowShader = `
	varying float intensity;
	void main() {
		vec3 glow = vec3(1,0.6,0.4) * intensity;
	    gl_FragColor = vec4( glow, 1.0 );
	}
	`;
}
console.log("Glow Shaders Loaded");

function glow() {
	var customMaterial = new THREE.ShaderMaterial(
	{
		uniforms:
		{
			"c":   { type: "f", value: inverse },
			"p":   { type: "f", value: intensity },
			glowColor: { type: "c", value: new THREE.Color(color) },
			viewVector: { type: "v3", value: camera.position }
		},
		vertexGlowShader,
		fragmentGlowShader,
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

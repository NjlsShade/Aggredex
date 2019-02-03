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

	fragment_shh = `
	#ifdef GL_ES
	precision highp float;
	#endif

	uniform sampler2D tOne;
	uniform sampler2D tSec;

	varying vec2 vUv;

	void main(void)
	{
		vec3 c;
		vec4 Ca = texture2D(tOne, vUv);
		vec4 Cb = texture2D(tSec, vUv);
		c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.0 - Ca.a);
		gl_FragColor= vec4(c, 1.0);

	}
	`;

	vertex_shh = `
	varying vec2 vUv;

	void main()
	{
		vUv = uv;
		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
		gl_Position = projectionMatrix * mvPosition;
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

function cloud() {
	var material_shh = new THREE.ShaderMaterial(
	{

	  uniforms:
	  {
		tOne: { type: "t", value: text1 },
		tSec: { type: "t", value: text2 }

	  attributes: attributes,

	  vertexShader: vertex_shh,

	  fragmentShader: fragment_shh

	});

	this.objectCloud = new THREE.Mesh( sphereObject.clone(), customMaterial.clone() );
	objectCloud.scale.multiplyScalar(scale);

	// This is not an ideal way to set the objects position - Need to revise this later
	var objectx = object.position.x;
	var objecty = object.position.y;
	var objectz = object.position.z;

	objectCloud.position.set(objectx, objecty, objectz);
	scene.add( objectCloud );
	console.log("Clouds Added");
}

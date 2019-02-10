function camVenus() {
	console.log("Venus");
	controls.target.copy( venus.position );
}
function camEarth() {
	console.log("Earth");
	controls.target.copy( earth.position );
}
function camLuna() {
	console.log("Luna");
	controls.target.copy( luna.position );
}
function camSol() {
	console.log("Sol");
	controls.target.copy( sol.position );
}
function camMars() {
	console.log("Mars");
	controls.target.copy( mars.position );
}
function camNine() {
	console.log("Nine");
	controls.target.copy( nine.position );
}
function helperTog() {
	if ( helpers == 0 ) {
		scene.add(axes);
		scene.add(helper);
		console.log("Helpers Added");
		helpers = 1
	} else {
		scene.remove(axes);
		scene.remove(helper);
		console.log("Helpers Removed");
		helpers = 0
	}
}

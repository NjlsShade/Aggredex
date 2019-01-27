// Load Atmosphere
$.getScript({
	url: "assets/system/sol/planet/shaders/atmosphere.js",
	async: false
}).done(function() {
	// Load Shaders
	loadShaders();
});
// Load Glow
$.getScript({
	url: "assets/system/sol/star/shaders/glow.js",
	async: false
}).done(function() {
	// Load Shaders
	loadGlowShaders();
});




// Load Stellar Data
function stellarData() {
	$.getScript("assets/system/sol/star/sol/sol.js", function() {
		loadSol();
	});
}

// Load Planetary Data
function planetaryData() {
	$.getScript("assets/system/sol/planet/earth/earth.js").done(function() {
		loadEarth();
	});
	$.getScript("assets/system/sol/moon/luna/luna.js").done(function() {
		loadLuna();
	});
	$.getScript("assets/system/sol/planet/mars/mars.js").done(function() {
		loadMars();
	});
	$.getScript("assets/system/sol/planet/nine/nine.js").done(function() {
		loadNine();
	});

	// Moons
	$.getScript("assets/system/sol/moon/luna/luna.js").done(function() {
		loadLuna();
	});


}

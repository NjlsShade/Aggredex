// Load Key actions [This should use a dynamic funtion to save redudent code]
$.getScript("assets/nav/actions.js");

function keyData() {
	if ( keyboard.pressed("Shift+E") )
	{
		camEarth();
	}
	if ( keyboard.pressed("Shift+L") )
	{
		camLuna();
	}
	if ( keyboard.pressed("Shift+S") )
	{
		camSol();
	}
	if ( keyboard.pressed("Shift+M") )
	{
		camMars();
	}
	if ( keyboard.pressed("Shift+N") )
	{
		camNine();
	}
	if( keyboard.eventMatches(event, 'Shift+Q') )
	{
		helperTog();
	}
}

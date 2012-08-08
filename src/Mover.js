var Mover = function() {
	this.locationX = 0;
	this.locationY = 0;

	var waypointX = 0;
	var waypointY = 0;
	var steps;

	this.tick = function() {
		if (waypointX != 0) {
			this.locationX = (waypointX / steps);
			this.locationY = (waypointY / steps);
		}
	};

	this.addWaypoint = function(x,y,s) {
		waypointX = x;
		waypointY = y;
		steps = s;
	};
};


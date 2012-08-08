var Mover = function() {
	this.locationX = 0;
	this.locationY = 0;

	var waypoint;

	this.tick = function() {
		if (waypoint) {
			this.locationX += (waypoint.x / waypoint.steps);
			this.locationY += (waypoint.y / waypoint.steps);
		}
	};

	this.addWaypoint = function(x,y,steps) {

		waypoint = {
			x:x,
			y:y,
			steps:steps,
		};
	};
};


var Mover = function() {
	this.locationX = 0;
	this.locationY = 0;
	this.ticknumber = 0;
	this.looping = false;

	var waypoint;

	this.tick = function() {
		if (waypoint) {
			if (this.ticknumber < waypoint.steps) {
				this.locationX += (waypoint.x / waypoint.steps);
				this.locationY += (waypoint.y / waypoint.steps);
				this.ticknumber += 1;
			} else if (this.looping) {
				this.locationX = 0;
				this.locationY = 0;
				this.ticknumber = 0;
			}
		}
	};

	this.addWaypoint = function(x,y,steps) {
		waypoint = {
			x:x,
			y:y,
			steps:steps,
		};
	};

	this.setLoopAfterWaypoint = function() {
		this.looping = true;
	};
};


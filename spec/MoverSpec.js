
describe("Mover", function() {

	it("should start at 0,0", function() {
		var mover = new Mover();
		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("remains still after 1 tick if no waypoint set", function() {
		var mover = new Mover();
		mover.tick();
		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("remains still right after setting waypoint", function() {
		var mover = new Mover();

		mover.addWaypoint(10,10,1);

		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("can move to next waypoint", function() {
		var mover = new Mover();

		mover.addWaypoint(10,10,1);
		mover.tick();

		expect(mover.locationX).toEqual(10);
		expect(mover.locationY).toEqual(10);
	});

	it("can move to different waypoint", function() {
		var mover = new Mover();

		mover.addWaypoint(20,20,1);
		mover.tick();

		expect(mover.locationX).toEqual(20);
		expect(mover.locationY).toEqual(20);
	});

	it("can move one step towards waypoint", function() {
		var mover = new Mover();

		mover.addWaypoint(10,10,2);
		mover.tick();

		expect(mover.locationX).toEqual(5);
		expect(mover.locationY).toEqual(5);
	});

	it("can move two steps towards waypoint", function() {
		var mover = new Mover();

		mover.addWaypoint(10,10,2);
		mover.tick();
		mover.tick();

		expect(mover.locationX).toEqual(10);
		expect(mover.locationY).toEqual(10);
	});
});


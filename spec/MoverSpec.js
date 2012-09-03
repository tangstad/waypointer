
describe("Mover", function() {
	var mover;

	beforeEach(function() {
		mover = new Mover();
	});

	it("should start at 0,0", function() {
		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("remains still after 1 tick if no waypoint set", function() {
		mover.tick();
		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("remains still right after setting waypoint", function() {
		mover.addWaypoint(10,10,1);

		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("can move to next waypoint", function() {
		mover.addWaypoint(10,10,1);
		mover.tick();

		expect(mover.locationX).toEqual(10);
		expect(mover.locationY).toEqual(10);
	});

	it("can move to different waypoint", function() {
		mover.addWaypoint(20,20,1);
		mover.tick();

		expect(mover.locationX).toEqual(20);
		expect(mover.locationY).toEqual(20);
	});

	it("can move one step towards waypoint", function() {
		mover.addWaypoint(10,10,2);
		mover.tick();

		expect(mover.locationX).toEqual(5);
		expect(mover.locationY).toEqual(5);
	});

	it("can move two steps towards waypoint", function() {
		mover.addWaypoint(10,10,2);
		mover.tick();
		mover.tick();

		expect(mover.locationX).toEqual(10);
		expect(mover.locationY).toEqual(10);
	});

	it("stops after moving to waypoint", function() {
		mover.addWaypoint(10,10,2);
		mover.tick();
		mover.tick();
		mover.tick();

		expect(mover.locationX).toEqual(10);
		expect(mover.locationY).toEqual(10);
	});

	it("can loop to start after reaching waypoint", function() {
		mover.addWaypoint(10,10,2);
		mover.setLoopAfterWaypoint();
		mover.tick();
		mover.tick();
		mover.tick();

		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});

	it("can loop beyond start after reaching waypoint", function() {
		mover.addWaypoint(10,10,2);
		mover.setLoopAfterWaypoint();
		mover.tick();
		mover.tick();
		mover.tick();
		mover.tick();

		expect(mover.locationX).toEqual(5);
		expect(mover.locationY).toEqual(5);
	});

	it("can have an initial position other than 0,0", function() {
		mover.setStartPosition(5,6);

		expect(mover.locationX).toEqual(5);
		expect(mover.locationY).toEqual(6);
	});
});


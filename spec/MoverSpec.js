
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
});


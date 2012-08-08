
describe("Mover", function() {

	it("should start at 0,0", function() {
		var mover = new Mover();
		expect(mover.locationX).toEqual(0);
		expect(mover.locationY).toEqual(0);
	});
});

describe("Todo", function() {

  beforeEach(function() {
    this.name = "wash dishes"
    this.todo = new Todo(this.name);
  });

  it("accepts name", function() {
    expect(this.todo.name).toEqual(this.name);
  });

  describe("#save", function() {

    beforeEach(function() {
      spyOn(Todos, "insert");

      this.todo.save();
    });

    it("inserts into the database", function() {
      expect(Todos.insert).toHaveBeenCalled();
    });
  });

});

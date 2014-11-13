describe("prefillTodos", function() {

  beforeEach(function() {
    spyOn(Todos, "insert");
    spyOn(Todos, "find").and.returnValue({count: function() { return 0; }})

    prefillTodos();
  });

  it("initializes the database with default todos", function() {
    expect(Todos.insert).toHaveBeenCalledWith({name: "Create a Todo"});
    expect(Todos.insert).toHaveBeenCalledWith({name: "Learn MeteorJS"});
  });

});

describe("TodosTemplate", function() {

  beforeEach(function() {
    var div = document.createElement("div");
    var data = [{name: "test1"}, {name: "test2"}];

    var comp = Blaze.renderWithData(Template.todos, data);

    Blaze.insert(comp, div);
  });

  it("contains all the passed todos", function() {
    expect($(div).children().length()).toEqual(2)
  });

});

describe('To Do List', function() {

  it("adds the name of a task to the to do list", function() {
    var testTask = new Task("Homework", "Read pages 1-3");
    expect(testTask.name).to.equal("Homework");
    expect(testTask.description).to.equal("Read pages 1-3");
  });

  // it("adds the full Name to a contact", function() {
  //   var testContact = new Contact("Bill","Clinton");
  //   expect(testContact.fullName()).to.equal("Bill Clinton");
  // });

});

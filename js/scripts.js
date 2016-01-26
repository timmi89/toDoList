function Task(name, description) {
  this.name = name;
  this.description = description;
};

$(function(){
  $("form#newTask").submit(function(event){
    event.preventDefault();
    // debugger;
    var inputtedTaskName = $("input#newTaskName").val();
    var inputtedTaskDescription = $("input#newTaskDescription").val();
    var newTask = new Task(inputtedTaskName, inputtedTaskDescription);

    $("form#tasks").append("<p><input type='checkbox' class='isChecked'><span>" + newTask.name + "<br></span></p>");

    $("input#newTaskName").val("");
    $("input#newTaskDescription").val("");

  });

  $("#tasks").on("click", function() {
    $("input:checked").parent().remove();
  });

});



//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
//
// $(function() {
//   $("form#new-contact").submit(function(event) {
//
//       var inputtedFirstName = $("input#new-first-name").val();
//       var inputtedLastName = $("input#new-last-name").val();
//       var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//       $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//       $("input#new-first-name").val("");
//       $("input#new-last-name").val("");
//
//       $(".contact").last().click(function() {
//         $("#show-contact").show();
//         $("#show-contact h2").text(newContact.fullName());
//         $(".first-name").text(newContact.firstName);
//         $(".last-name").text(newContact.lastName);
//       });
//       event.preventDefault();
//     });
//   });

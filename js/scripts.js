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

    $("form#tasks").append("<p><input type='checkbox' id='newTask.name'>" + newTask.name + "<br></p>");

    $("input#newTaskName").val("");
    $("input#newTaskDescription").val("");

  });

  $("#tasks").click(function() {
    $("input:checked").parent().remove();
  });

});

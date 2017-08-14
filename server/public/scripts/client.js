console.log("the clinet.js file is linked to the index.html file");

$(document).ready(function(){
    console.log("jquery successfully locked and loaded");

    //load existing tasks when the page loads
    getTasks();

//add a new task to the list
$('#addButton').on('click',function(){
    console.log("add button was clicked");
    //get user input and create object

    //variables for input fields
    var taskToDo = $('#newTask').val();
    var taskCompleted = $('#completed').val();
    var taskNotes = $('#notes').val();

    var newTask = {
        task: taskToDo,
        status: taskCompleted,
        notes: taskNotes
    };
    saveTask(newTask);
});

//get the tasks from the DB to load on the DOM
function getTasks(){
    console.log("in getTasks");
    //ajax method call to server/DB to get tasks
    $.ajax({
        type: "GET",
        url: "/tasks",
        success: function(res) {
            console.log("Here is the current task list:", res);
            createTaskList(res);
        } //end of ajax call
    }); //end ajax request    
} //end getTasks() function

function saveTask(newTask) {
    console.log("called saveTask function:", newTask);
    // ajax POST request to server
    //adds new task to DB
    $.ajax({
        type: "POST",
        url: '/tasks',
        data: newTask,
        success: function(res) {
            console.log("added a new task:",res);
            getTasks();
        }

    });
}

function createTaskList(tasksArray) {
    //empty the DOM before updating it
    $('#viewTasks').empty();
    //loop through tasksArray and add each task to the DOM
    for(var i = 0; i < tasksArray.length; i++) {
        var tasks = tasksArray[i];
        //add each object identified with the index position in the array
        //add a row for the task to go
        var taskRow = $('<tr><tr>');
        
        //information to go in each row of the table in the DOM
        //"id" is taken from the DB and links the information in the DB to the row
        taskRow.data('id', tasks.id);

        //adds the row to the DOM
        $("#viewTasks").append(taskRow);

        //identifies where each part of the task object should go on the DOM
        var taskToDo = $('<td>' + tasks.task + '</td>');
        var taskCompleted = $('<td>' + tasks.completed + '</td>');
        var taskNotes = $('<td>' + tasks.notes + '</td>');

        $(taskRow).prepend(taskToDo, taskCompleted, taskNotes);
    }
};


console.log("the clinet.js file is linked to the index.html file");

$(document).ready(function(){
    console.log("jquery successfully locked and loaded");

    //load existing tasks when the page loads
    getTasks();
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
            createTaskList();
        } //end of ajax call
    });     
} //end getTasks() function
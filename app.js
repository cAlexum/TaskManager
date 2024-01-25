let count = 0;

let taskList = [];

function addTaskTo() {
    
}
function checkAndSend() {
    if (document.querySelectorAll(".task-form").every(el != "") == true) {
        alert("Please fill out all of the fields.")
    }
    else {addTaskTo()}
};
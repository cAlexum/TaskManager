let count = 0;

let taskList = [];

function check(someValue) {
    someValue != ""
}

function addTaskTo() {
    alert("Task inputted.")
};
function checkAndSend() {
    if (document.querySelectorAll(".task-form").every(check) == false) {
        alert("Please fill out all of the fields.")
    }
    else {addTaskTo()}
};

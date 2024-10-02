// Get references to HTML elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        
        // Create task text
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = 'X';
        
        // Add delete button to list item
        li.appendChild(deleteBtn);
        
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
        
        // Event listener to delete task
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    } else {
        alert('Please enter a task');
    }
}

// Event listener for adding task
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing 'Enter' to add task
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

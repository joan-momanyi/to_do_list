document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit-btn');
    const newTask = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Disable submit button by default
    submit.disabled = true;

    // Enable/disable submit button based on input field
    newTask.addEventListener('input', () => {
        submit.disabled = newTask.value.trim() === '';
    });

    // Handle form submission
    document.getElementById('task-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // Find the task the user just submitted
        const taskText = newTask.value.trim();
        if (!taskText) return;

        // Create list item for new task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-primary delete-btn';
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        // Append delete button to list item
        listItem.appendChild(deleteBtn);

        // Add list item to task list
        taskList.appendChild(listItem);

        // Clear input field and disable submit button
        newTask.value = '';
        submit.disabled = true;
    });

    return false; // Prevent default form submission
});

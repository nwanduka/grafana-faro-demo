
// This is where you'll add Grafana Faro SDK initialization
// Instructions will be in the README file

let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (!taskText) {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    input.value = '';
    renderTasks();
    
    console.log('Task added:', taskText);
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        console.log('Task toggled:', task.text, 'Completed:', task.completed);
    }
}

function deleteTask(id) {
    const task = tasks.find(t => t.id === id);
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
    console.log('Task deleted:', task.text);
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-state">No tasks yet. Add one above to get started!</li>';
    } else {
        taskList.innerHTML = tasks.map(task => `
            <li class="task-item ${task.completed ? 'completed' : ''}">
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="btn-complete" onclick="toggleTask(${task.id})">
                        ${task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            </li>
        `).join('');
    }

    updateStats();
}

function updateStats() {
    document.getElementById('totalTasks').textContent = tasks.length;
    document.getElementById('completedTasks').textContent = 
        tasks.filter(t => t.completed).length;
}

function triggerTestError() {
    console.error('Test error triggered for Faro to capture');
    throw new Error('This is a test error for Grafana Faro SDK monitoring');
}

// Allow Enter key to add tasks
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
function addTodo(){
    var taskInput = document.getElementById('task');
    var dateInput = document.getElementById('date');
    // var addTask = document.querySelector('#addTask');
    var taskValue = taskInput.value;
    var dateValue = dateInput.value;

    if(taskValue === '' || dateValue === ''){
        alert('plese fill the data...');
    }else
    
    {
    var todoList = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.className = 'todo-item'
    li.innerHTML = `
            <span>${taskValue} - ${dateValue}</span>
            <button class="delete-btn" onclick = deleteTodo(this) >Delete</button>
    `
    todoList.appendChild(li);

    taskInput.value = '';
    dateInput.value = '';
}
}

function deleteTodo(btn){
    var listItem = btn.parentNode;
    listItem.parentNode.removeChild(listItem);
}
console.log('Todo List App - Nur nabi Khan');

// Todo List App

// Save Data
function saveTodo() {
    let todoData = document.getElementById('todoDataInput').value;
    if (todoData == '') return;
    timeStampAsKey = Date.now();
    localStorage.setItem(timeStampAsKey, JSON.stringify({todo: todoData, done: false}));
    location.reload();
};


// Showing All Todo Lists

function showTodoList() {
    let todoContainer = document.getElementById('container');
    let keys = Object.keys(localStorage).sort();

    keys.forEach((key) => {
        // Get the todo and creat as list
        let todo = JSON.parse(localStorage.getItem(key));
        let li = document.createElement('li');
        li.innerHTML = todo.todo + ' ';

        // Check the todo list
        let checkBtn = document.createElement('button');
        checkBtn.classList.add('liBtn');
        checkBtn.innerHTML = todo.done? '✓✓' : '✔';

        checkBtn.addEventListener('click', () => {
            todo.done = !todo.done;
            localStorage.setItem(key, JSON.stringify(todo));
            location.reload();
        });


        // Delete todo
        let dltBtn = document.createElement('button');
        dltBtn.classList.add('liBtn');
        dltBtn.innerHTML = 'x';
        dltBtn.addEventListener('click', () => {
            localStorage.removeItem(key);
            location.reload();
        });


        // Creating Todos
        li.appendChild(dltBtn);
        li.appendChild(checkBtn);
        todoContainer.appendChild(li);
    });
    
    
};


// Delete All Todo List
let clrAllBtn = document.getElementById('clrAll');
clrAllBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});



// Calling Functions
showTodoList();

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', saveTodo);

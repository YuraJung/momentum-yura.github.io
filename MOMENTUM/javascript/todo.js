const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];


function savedTodosEvent() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteButtonEvent(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedTodosEvent();

}
function todoListEvent (newTodo) {

    const listItem = document.createElement("li");
        listItem.id = newTodo.id;
    const todoSpan = document.createElement("span");
        todoSpan.classList.add("todo_span");
        todoSpan.innerText = `${newTodo.text} `;    
    const delBtn = document.createElement("button");
        delBtn.innerText = "√";
        delBtn.classList.add("todo_btn");
        delBtn.addEventListener("click",deleteButtonEvent);

    listItem.appendChild(todoSpan);
    listItem.appendChild(delBtn);
    todoList.appendChild(listItem);
    
}

function todoWriteEvent(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = ""; 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    todoListEvent(newTodoObj);


    savedTodosEvent();
}



todoForm.addEventListener("submit",todoWriteEvent);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos!==null) {
    parsedTodo = JSON.parse(savedTodos);
    toDos = parsedTodo;
    parsedTodo.forEach(todoListEvent);
        
    
}

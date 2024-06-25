document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Selesai';
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
            todoInput.focus();
        }
    }
});

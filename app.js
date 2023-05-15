const formAddTodo  = document.querySelector('.form-add-todo') 
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="Assistir Breaking Bad">
            <span>${valueDoInput}</span>
            <i class="far fa-trash-alt delete" data-trash="Assistir Breaking Bad"></i>
       </li>
    `
})
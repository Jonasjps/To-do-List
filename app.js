const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const valueDoInpute = event.target.add.value.trim()
    if(valueDoInpute.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" >
                <span>${valueDoInpute}</span>
                <i class="far fa-trash-alt delete"></i>
             </li>
        `
    }
    event.target.reset()
})
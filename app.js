const formAddTodo  = document.querySelector('.form-add-todo') 
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const valueDoInput = event.target.add.value.trim()

    if (valueDoInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="Assistir Breaking Bad">
                <span>${valueDoInput}</span>
                <i class="far fa-trash-alt delete" data-trash="Assistir Breaking Bad"></i>
           </li>
        `
    }
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const valueDoInput = event.target
    if (Array.from(valueDoInput.classList).includes('delete')) {
        valueDoInput.parentElement.remove()
    }
})

formSearch.addEventListener('input', event => {
    const filtrandoTodos = event.target.value.trim()
    
    const newArrayFilter = Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.includes(filtrandoTodos))

    console.log(newArrayFilter)
    
})
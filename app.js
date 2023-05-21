const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

const addTodo = valueDoInput => {
    if(valueDoInput.length) {
        todosContainer.innerHTML += ` 
          <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valueDoInput}">
              <span>${valueDoInput}</span>
              <i class="far fa-trash-alt " data-trash="${valueDoInput}"></i>
          </li>`
    }
    event.target.reset()
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    addTodo(valueDoInput)
})

const removeTodo = clickedElement => {
    const removeElement = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${removeElement}"]`) 
    
    if(removeElement) {
        todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

formSearch.addEventListener('input', event => {
    const filtrandoInputValue = event.target.value
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(filtrandoInputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

        Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(filtrandoInputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})
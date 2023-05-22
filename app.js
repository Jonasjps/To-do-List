const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const valueDoInpute = event.target.add.value.trim()
    if(valueDoInpute.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valueDoInpute}">
                <span>${valueDoInpute}</span>
                <i class="far fa-trash-alt delete" data-trash="${valueDoInpute}"></i>
             </li>
        `
    }
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElementValue = event.target
    const removeTodo = clickedElementValue.dataset.trash
    const todo = document.querySelector(`[data-todo="${clickedElementValue.dataset.trash}"]`)
    if(removeTodo) {
        todo.remove()
    }
})

formSearch.addEventListener('input', event => {
    const filtrandoInputValue = event.target.value
    Array.from(todosContainer.children)
        .filter(todo =>  !todo.textContent.toLowerCase().includes(filtrandoInputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

        Array.from(todosContainer.children)
        .filter(todo =>  todo.textContent.toLowerCase().includes(filtrandoInputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})
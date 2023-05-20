const formAddTodo  = document.querySelector('.form-add-todo') 
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

const NewLiNoTodo = (valueDoInput,event) => {
    if (valueDoInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valueDoInput}" >
                <span>${valueDoInput}</span>
                <i class="far fa-trash-alt delete" data-trash="${valueDoInput}"></i>
           </li>
        `
    }
    event.target.reset()
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()
    NewLiNoTodo(valueDoInput, event)
})

todosContainer.addEventListener('click', event => {
    const valueDoInput = event.target.dataset.trash
    // const clickedElement = Array.from(valueDoInput.classList).includes('delete')
    const refferenciaDoTodo =  document.querySelector(`[data-todo="${valueDoInput}"]`)
    // console.log(valueDoInput)
    if (valueDoInput) {
        refferenciaDoTodo.remove()
    }
})

formSearch.addEventListener('input', event => {
    const filtrandoTodos = event.target.value.trim()
    
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(filtrandoTodos))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hedden')
        })

    Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(filtrandoTodos))
        .forEach(todo => {
            todo.classList.remove('hedden')
            todo.classList.add('d-flex')
        })

})
const formAddTodo  = document.querySelector('.form-add-todo') 
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const valueDoInput = event.target.add.value.trim()

    if (valueDoInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" >
                <span>${valueDoInput}</span>
                <i class="far fa-trash-alt delete" ></i>
           </li>
        `
    }
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const valueDoInput = event.target
    const clickedElement = Array.from(valueDoInput.classList).includes('delete')


    // console.log(Array.from(valueDoInput.classList).includes('delete'))
    if (clickedElement) {
        valueDoInput.parentElement.remove()
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
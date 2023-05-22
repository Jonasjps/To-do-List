const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInput = event.target.add.value.trim()

    if(valueDoInput.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" >
                <span>${valueDoInput}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`
    }
    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if(Array.from(clickedElement.classList).includes('delete')) {
        clickedElement.parentElement.remove()
    }
})

formSearch.addEventListener('input', event => {
    const filtrandoInputValue = event.target.value
    const filtrandoLis = Array.from(todosContainer.children)
        .filter(todo => {
            return todo.textContent.includes(filtrandoInputValue)
        })
        console.log(filtrandoLis)
})
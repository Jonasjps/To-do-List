const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')

const addTodo = valueDoInpute => {
    if(valueDoInpute.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valueDoInpute}">
                <span>${valueDoInpute}</span>
                <i class="far fa-trash-alt delete" data-trash="${valueDoInpute}"></i>
             </li>
        `
    }
    event.target.reset()
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const valueDoInpute = event.target.add.value.trim()
    addTodo(valueDoInpute)
})

const deleteTodo = clickedElementValue => {
    const removeTodo = clickedElementValue.dataset.trash
    const todo = document.querySelector(`[data-todo="${removeTodo}"]`)
    if(removeTodo) {
        todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElementValue = event.target
    deleteTodo(clickedElementValue)
})

const MetrodoFilter = (todos, filtrandoInputValue, methedFilter) => todos
    .filter(todo => {
        const methetArray = todo.textContent.toLowerCase().includes(filtrandoInputValue)
        return methedFilter ? methetArray : !methetArray
    })


const manipulatiClass = (todos, classRemove, classAdd) =>  {
    todos.forEach(todo => {
        todo.classList.remove(classRemove)
        todo.classList.add(classAdd)
    })
}
const hiDetodos = (todos,filtrandoInputValue) =>  {
   const hiTodos = MetrodoFilter(todos,filtrandoInputValue, true)
    manipulatiClass(hiTodos, 'hidden' , 'd-flex')
}

const showDeTodos = (todos, filtrandoInputValue) => {
    const showTodos = MetrodoFilter(todos, filtrandoInputValue, false)
    manipulatiClass(showTodos, 'd-flex', 'hidden')
}

formSearch.addEventListener('input', event => {
    const filtrandoInputValue = event.target.value
    const todos = Array.from(todosContainer.children)

    hiDetodos(todos, filtrandoInputValue)
    showDeTodos(todos, filtrandoInputValue)
})
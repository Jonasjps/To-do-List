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

const novoArrayFilter = (todos,filtrandoInputValue, mechedfilter) => {
   return todos
    .filter(todo => {
      const mechedh = todo.textContent.toLowerCase().includes(filtrandoInputValue)
        return mechedfilter ? mechedh : !mechedh 
    })
}

const manipulateClass = (todos, removeClass, addClass) => {
    todos.forEach(todo => {
        todo.classList.remove(removeClass)
        todo.classList.add(addClass)
    })
}

const hiDetodos = (todos,filtrandoInputValue) => {
    const hitodos = novoArrayFilter(todos, filtrandoInputValue,false)
    manipulateClass(hitodos, 'd-flex', 'hidden')
}

const showDeTodos = (todos, filtrandoInputValue) => {
    const showtodos = novoArrayFilter(todos, filtrandoInputValue,true)
    manipulateClass(showtodos, 'hidden', 'd-flex')
}

formSearch.addEventListener('input', event => {
    const filtrandoInputValue = event.target.value
    const todos = Array.from(todosContainer.children)

    hiDetodos(todos,filtrandoInputValue)
    showDeTodos(todos,filtrandoInputValue)
})
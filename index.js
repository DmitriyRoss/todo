const addBtn = document.querySelector('.add-button')
const addInput = document.querySelector('.list-input')

const done = document.getElementById('done')
const inProgress = document.getElementById('inprogress')
let todoList = []
if (localStorage.getItem('tasks')) {
  todoList = JSON.parse(localStorage.getItem('tasks'))
  displayTasks()
}
function Task(text) {
  this.text = text
  this.isCompleted = false
}

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(todoList))
}

function displayTasks() {
  let displayTask = ''
  todoList.forEach(function (item, index) {
    displayTask += `
    <input type='checkbox' id='index_${index}' class='added-task' ${
      item.isCompleted ? 'checked' : ''
    }>
    <label for='index_${index}'>${item.text}</label>
    `
    inProgress.innerHTML = displayTask
  })
}

addBtn.addEventListener('click', function () {
  todoList.push(new Task(addInput.value))

  updateLocal()
  displayTasks()
})

inProgress.addEventListener('change', function (event) {
  let eventId = event.target.id
  let eventLabel = document.querySelector(`[for="${eventId}"]`)
  let eventLabelValue = eventLabel.innerHTML
  todoList.forEach(function (item) {
    if (item.text === eventLabelValue) {
      item.isCompleted = !item.isCompleted
      updateLocal()
    }
    //here should be validation if completed then push completed tasks into done section
    /* if (item.isCompleted) {
      todoList.push(new)
      done.innerHTML = item.text
    }*/
  })
})

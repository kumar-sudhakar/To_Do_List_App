let isEmpty = document.getElementById('inputTask')

function addTask() {
    if (isEmpty.value === '') {
        alert('Please Enter Your Task')
    }
    else {
        

    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ''
    DeleteTask(newTask)
    }


}

function DeleteTask(newTask) {
    const Deletebtm = document.createElement('button')
    Deletebtm.textContent = 'Delete'
    newTask.appendChild(Deletebtm)
    Deletebtm.onclick = function () {
        newTask.remove()
    }
}
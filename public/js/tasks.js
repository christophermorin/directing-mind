const addTask = document.querySelector('.add-task')
const openTaskDialog = document.getElementById('add_task')

addTask.addEventListener('click', () => {
    openTaskDialog.showModal()
})
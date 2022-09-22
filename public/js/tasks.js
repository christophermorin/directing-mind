const addTask = document.querySelector('.add-task')
const openTaskDialog = document.getElementById('add_task')

addTask.addEventListener('click', () => {
    openTaskDialog.showModal()
})


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, {accordion: false});
  });

  let taskCount = 0

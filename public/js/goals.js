


const addGoal = document.querySelector('.add-goal')
const openGoalDialog = document.getElementById('add_goal')

addGoal.addEventListener('click', () => {
    openGoalDialog.showModal()
})





document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, {accordion: false});
  });

  let taskCount = 0
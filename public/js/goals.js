// Add a new Project
const addGoal = document.querySelector('.add-goal')
const openGoalDialog = document.getElementById('add_goal')

addGoal.addEventListener('click', () => {
    openGoalDialog.showModal()
})

// Open/Close Delete Project Modal
const deleteProject = document.querySelectorAll('.dlt-project')
const closeDeleteProject = document.querySelectorAll('.close-delete')
// Open delete modal
Array.from(deleteProject).forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.parentNode.previousElementSibling.showModal()
        
    })
})
// Close delete modal
Array.from(closeDeleteProject).forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.close()
        
    })
})

//Open/Close Complete Project Modal
const completeProject = document.querySelectorAll('.complete-project')
const closeCompleteProject = document.querySelectorAll('.close-complete')
//Open complete modal
Array.from(completeProject).forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.parentNode.previousElementSibling.showModal()
        
    })
})
// Close complete modal
Array.from(closeCompleteProject).forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.close()
        
    })
})


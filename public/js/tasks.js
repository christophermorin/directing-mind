const addTask = document.querySelector('.add-task')
const openTaskDialog = document.getElementById('add_task')

addTask.addEventListener('click', () => {
    openTaskDialog.showModal()
})






//   const test = getComputedStyle(document.getElementsByClassName('sec'))
//   .getPropertyValue('--value'); // #999999
//   console.log(test)
let minutesStyles = getComputedStyle(document.querySelector('.minutes'))
let secondsStyles = getComputedStyle(document.querySelector('.seconds'))

let minutesVal = minutesStyles.getPropertyValue(`--value`);
let secondsVal = secondsStyles.getPropertyValue(`--value`);


const timer = setInterval(function () {
    document.querySelector('.seconds').style.setProperty(`--value`, secondsVal--)

    if(secondsVal <= -1){
        document.querySelector('.seconds').style.setProperty(`--value`, 59)
        document.querySelector('.minutes').style.setProperty(`--value`, minutesVal-1)

        secondsVal = 59

    }
 
},1000)
        
       
  


        
        
   


 

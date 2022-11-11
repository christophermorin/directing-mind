// Open Add Task modal
const addTask = document.querySelector('.add-task')
const openTaskDialog = document.getElementById('add_task')

addTask.addEventListener('click', () => {
    openTaskDialog.showModal()
})

// Close Add Task modal
const closeAddTask = document.querySelector('.close-add-task')
closeAddTask.addEventListener('click', () => {
    openTaskDialog.close()
})

let secondsVal = 0
let minutesVal = 0

let stillMinutes = localStorage.getItem('minutes')
let stillSeconds = localStorage.getItem('seconds')
let timeWasOn = localStorage.getItem('timeWasOn')

let minutesStyles = getComputedStyle(document.querySelector('.minutes'))
let secondsStyles = getComputedStyle(document.querySelector('.seconds'))

window.onload = () => {
  
    if(stillMinutes > 0 || stillSeconds > 0){
        document.querySelector('.minutes').style.setProperty(`--value`,stillMinutes)
        minutesVal = minutesStyles.getPropertyValue(`--value`);
        document.querySelector('.seconds').style.setProperty(`--value`,stillSeconds)
        secondsVal = secondsStyles.getPropertyValue(`--value`);
    }
    else{
        document.querySelector('.minutes').style.setProperty(`--value`,25)
        minutesVal = minutesStyles.getPropertyValue(`--value`);
        document.querySelector('.seconds').style.setProperty(`--value`,00)
    }

    if(timeWasOn === 'true'){
        timer()
    }
   
}

// Setting Time value for POMO clock
let setTime = document.getElementById('setTime')
setTime.addEventListener('click', (e) => {
    document.querySelector('.minutes').style.setProperty(`--value`,e.target.innerText)
    minutesVal = minutesStyles.getPropertyValue(`--value`);
    document.querySelector('.seconds').style.setProperty(`--value`,00)
    secondsVal = secondsStyles.getPropertyValue(`--value`);
})

// Declaring setInterval name
let clockIsRunning = null

// Starts the Clock
const startPomo = document.getElementById('start')
startPomo.addEventListener('click', () => {
    if(!clockIsRunning){
        localStorage.setItem('timeWasOn', true)
        timer()
    }
})
// Stops the clock
const stopPomo = document.getElementById('stop')
stopPomo.addEventListener('click', () => {
    localStorage.setItem('timeWasOn', false)
    clearInterval(clockIsRunning)
    clockIsRunning = null
})

function timer () {
  
    // Starts timer countdown
    clockIsRunning = setInterval(function () {
    // Setting the seconds value
    document.querySelector('.seconds').style.setProperty(`--value`, secondsVal--)
    // If seconds reaches -1
        // Reset seconds to 59
            // Decrease minutes by one
    if(secondsVal < 0){
        document.querySelector('.seconds').style.setProperty(`--value`, 59)
        document.querySelector('.minutes').style.setProperty(`--value`, --minutesVal)
        // Setting correct display for seconds
        secondsVal = secondsStyles.getPropertyValue(`--value`);
    }
    // Storing current time in local storage while clock is running.
    localStorage.setItem('minutes', minutesVal)
    localStorage.setItem('seconds', secondsVal)
    },1000)
}


        
       
  


        
        
   


 

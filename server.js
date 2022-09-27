const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const methodOverride = require('method-override')
const mainRoutes = require('./routes/main')
const goalsRoutes = require('./routes/goals')
const tasksRoutes = require('./routes/tasks')
const journalRoutes = require('./routes/journal')
const historyRoutes = require('./routes/history')
const journalEntryRoutes = require('./routes/journalEntries')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride("_method"))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes) // Login/Sign Up 
app.use('/goals', goalsRoutes)
app.use('/tasks', tasksRoutes)
app.use('/journal', journalRoutes)
app.use('/journalEntries', journalEntryRoutes)
app.use('/history', historyRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
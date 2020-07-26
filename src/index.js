const express=require('express')
require('./db/mongooes.js')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const Router= new express.Router()

const app=express()
const port=process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('server is running'+port)
})

 
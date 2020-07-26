const mongooes=require('mongoose')
const User = require('./user')



const taskSchema=new mongooes.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type: mongooes.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})

const Task=mongooes.model('Task',taskSchema)

module.exports=Task


const mongoose = require('mongoose')
const { type } = require('os')

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    description:{
        type: String,
    },

},
{
    timestamps:true
}
)

const Task = mongoose.model('task', TaskSchema)

module.exports = Task

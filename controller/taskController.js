

const Task = require('../model/TaskModel')

const createTask = async(req, res )=>{
    const {name} = req.body
 try {
   const createdTask = await Task.create({name})
   if (createdTask) {
    res.status(200).json({msg: 'task created'})
   }else{
    res.status(400).json({msg: 'task not created'})
   }
 } catch (error) {
    res.status(500).json(error.message)
 }
}


const GetAllTask = async(req, res)=>{
   try {
      const Alltasks = await Task.find()
     return res.status(200).json(Alltasks)
   } catch (error) {
      return res.status(500).json(error.message)
   }
}



const DeleteTask = async(req, res)=>{
   const {id} = req.params

   try {
      
     const deletedTask= await Task.findByIdAndDelete(id)
     if (!deletedTask) {
      res.status(500).json({msg:'task not found'})
     } else {
      res.status(200).json({msg:'task deleted successfully'})
     }
   } catch (error) {
      return res.status(400).json({msg:'task does not exist'})
   }
 

 
}



const updateTask = async (req, res)=>{
try {
   const {id} = req.params
  const task = await Task.findOneAndUpdate(
      {_id:id}, req.body,{new:true, runValidators:true}
   )
   if (!task) {
      res.status(400).json({msg: 'task not found'})
   }
   res.status(200).json(task)
} catch (error) {
   res.status(500).json(error.message)
}
}
module.exports ={createTask, DeleteTask, GetAllTask, updateTask}
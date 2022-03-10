const Colaborator = require('../models/Colaborator')
const ERR_CONTEXT  = {"data": "some error occured"};

// request for colaboration 
exports.colabRequest = async (req, res) => {
    try{
        const data = {
            user_id: process.env.owner_id,
            project_id: req.body.projectid,
        }   
        const newColab = new Colaborator(data)
        await newColab.save()
        
        context = {"message": "Request Added"};
        res.json(newColab);
    }catch(err){
        console.log(err)
        res.json(ERR_CONTEXT)
    }
}

//update colaborator status by id
exports.colabStatus = async (req, res) => {
    try {
        const update = {
            status :req.body.status,
        }
        const updatedProject = await Colaborator.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updatedProject)
    } catch (err) {
        console.error(err)
        res.json(ERR_CONTEXT)
    }
}



import student from "../Models/studentModel.js"
export const create = async (req,res)=>{
    try{
        
        const {name,age,gender,isfaculty} = req.body

        const new_db = student.create({
            name: name,
            age: age,
            gender: gender,
            isfaculty: isfaculty
        });
        res.status(200).json({name: name, age: age, gender: gender, isfaculty: isfaculty});

    }
    catch(err){
        console.log(err)
    }

}

export const get_list = async (req,res)=>{
    try{
        const list = await student.find()
        res.json(list)
    }
    catch(err){
        console.log(err)
    }
}
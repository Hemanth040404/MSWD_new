import axios from "axios";



const axios_url = "http://localhost:3000";


export const post_user = async (data)=>{
    try{
        const res = await axios.post(`${axios_url}/new/create`,data)
        return res
    }
    catch(err){
        console.log(err)
    }
}


export const get_users = async () =>{
    try{
        const res = await axios.get(`${axios_url}/new/get`)
        return res
    }
    catch(err){
        console.log(err)
    }
}



import {Router} from "express";
import {create, get_list} from "../Controllers/CreateController.js"


const router = Router();



router.post("/create", create);

router.get("/get", get_list)



export default router;
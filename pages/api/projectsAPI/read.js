import connectMongo from "../../../lib/mongodb";
import Project from "../../../lib/models/projectModel";

export default async function read(req,res) {
    try {
        await connectMongo()
        const data = await Project.find()
        res.json({data})
    }catch (error) {
        console.log(error)
        res.json({error})
    }
}


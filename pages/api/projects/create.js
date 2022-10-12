import connectMongo from "../../../lib/mongodb";
import Project from "../../../lib/models/projectModel";

export default async function addProject(req,res) {
    try {
        await connectMongo()
        project = await Project.create(req.body);
        const data = await Project.find()
        res.json({ data })
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}


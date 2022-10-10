import connectMongo from "../../../lib/mongodb";
import Project from "../../../lib/models/projectModel";

export default async function addProject(req,res) {
    try {
        await connectMongo()
        const project = await Project.create(req.body);
        res.json({ project })
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}


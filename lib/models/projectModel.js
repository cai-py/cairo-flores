import { Schema, model, models } from "mongoose";

const projectSchema = new Schema ({
    projectName: String,
})

const Project = models.Project || model('Project', projectSchema)

export default Project
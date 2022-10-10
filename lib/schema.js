import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
    name: String
})

const kitten = mongoose.model('Kitten') || mongoose.model('Kitten', )

export default kitten

//https://www.youtube.com/watch?v=FnOuiDB4JJ8
import connectMongo from "../../../lib/mongodb";
import Test from "../../../lib/models/testModel";

export default async function fetch(req,res) {
    try {
        await connectMongo()

        const data = await Test.find()

        res.json({data})
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
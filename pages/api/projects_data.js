import clientPromise from "../../lib/mongodb.js";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("Projects");

       const projects = await db
           .collection("projects")
           .find({})
           .toArray();

       res.json(projects);
   } catch (e) {
       console.error(e);
   }
};
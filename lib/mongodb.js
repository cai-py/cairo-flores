import mongoose from 'mongoose';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
    
}

export default connectMongo;

// https://blog.usman-s.me/how-to-use-mongoose-with-nextjs-for-mongodb







//////////// FAILED ATTEMPTS LOL //////////////

// // create the mongodb connection
// import mongoose from "mongoose";

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }

// const main = async () => {
//     await mongoose.connect(process.env.MONGODB_URI)
//     console.log("DB connected")
// }

// export default main

// //https://www.youtube.com/watch?v=FnOuiDB4JJ8











// import mongoose from 'mongoose'

// // MIGHT NEED THIS CODE TOO CONNECT .ENV VARIABLES
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }

// global.mongoose = {
//     conn: null,
//     promise: null
// }

// export async function dbConnect() {
//     if (global.mongoose && global.mongoose.conn) {
//         console.log("Using existing mongoose connection")
//         console.log(global.mongoose.conn.connections)
//         return global.mongoose.conn
//     }else {
//         console.log("creating new mongoose connection")
//         // console.log(process.env.MONGODB_URI)
//         const connString = process.env.MONGODB_URI
//         const promise = mongoose.connect(connString, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             autoIndex: true,
//         }).then(mongoose => mongoose);

//         global.mongoose = {
//             conn: await promise,
//             promise
//         }

//         return await promise;
//     }
// }









//  https://www.youtube.com/watch?v=i-seOPDE3qI
























// // WORKING CODE TO CONNECT TO DB //

// const {MongoClient} = require('mongodb')

// // requires .env file when in development environment
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     // const uri = "mongodb+srv://Cai_py:9cKpksM3Cc39qp5@cluster0.jgcig.mongodb.net/test";
//     const uri = process.env.MONGODB_URI

//     const clinetPromise = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await clinetPromise.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(clinetPromise);
 
//     } catch (e) {
//         console.error(e);
//     } 
//     // finally {
//     //     await clinetPromise.close();
//     // }
// }

// main().catch(console.error);

// async function listDatabases(clinetPromise){
//     databasesList = await clinetPromise.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

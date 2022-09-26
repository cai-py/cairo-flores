const {MongoClient} = require('mongodb')
require('dotenv').config()


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    // const uri = "mongodb+srv://Cai_py:9cKpksM3Cc39qp5@cluster0.jgcig.mongodb.net/test";
    const uri = process.env.MONGODB_URI

    const clinetPromise = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await clinetPromise.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(clinetPromise);
 
    } catch (e) {
        console.error(e);
    } finally {
        await clinetPromise.close();
    }
}

main().catch(console.error);

async function listDatabases(clinetPromise){
    databasesList = await clinetPromise.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
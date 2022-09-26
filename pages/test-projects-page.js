// import clientPromise from "../lib/mongodb"

const testProjects = ({projects}) => {
    const test = () => {
        console.log('test')
    }
    return (
        <div onClick={listDatabases}>testProjects</div>
    )
}

// async function listDatabases(clinetPromise){
//     databasesList = await clinetPromise.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

export default testProjects

import client from "../lib/mongodb"

console.log(client)

// export default function Projects({ projects }) {
//     return (
//         <div>
//             <ul>
//                 {projects.map((project) => {
//                     <li>
//                         <h1>{project.projectName}</h1>
//                     </li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// export async function getServerSideProps() {
//     try {
//         const client = await client;
//         const db = client.db("Portfolio_Data");

//         const projects = await db
//             .collection('Project_Data')
//             .find({})
//             .sort({ metacritic: -1 })
//             .limit(20)
//             .toArray();

//         return {
//             props: { projects:JSON.parse(JSON.stringify(projects)) },
//         }
//     } catch (e) {
//         console.error(e)
//     }
// }
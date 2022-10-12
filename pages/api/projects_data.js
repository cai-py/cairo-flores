// // import { NextApiRequest, NextApiResponse } from "next";

// // export default function (req,res) {
// //     //NOT A REACT COMPONENT
// //     res.json({status: 'ok'})
// // }






// import { dbConnect } from "../../lib/mongodb";

// export default async function handler(req,res) {
//     await dbConnect();
//     const {body} = req.body
//     res.status(200).json({
//         body
//     })
// }




















// import clientPromise from "../../lib/mongodb.js";

// export default async (req, res) => {
//    try {
//        const client = await clientPromise;
//        const db = client.db("Portfolio_Data");

//        const projects = await db
//            .collection("Projects")
//            .find({})
//            .limit(10)
//            .toArray();

//        res.json(projects);
//    } catch (e) {
//        console.error(e);
//    }
// };

// // NOTES

// // >>>>>>>>RETURNS THIS ERROR WHEN RUN >>>>>

// // cai.py@MacBook-Pro-2 cairo-flores % node pages/api/projects_data.js
// // (node:16363) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// // (Use `node --trace-warnings ...` to show where the warning was created)
// // /Users/cai.py/Documents/career/cairo-flores/pages/api/projects_data.js:1
// // import clientPromise from "../../lib/mongodb.js";
// // ^^^^^^

// // SyntaxError: Cannot use import statement outside a module
// //     at Object.compileFunction (node:vm:352:18)
// //     at wrapSafe (node:internal/modules/cjs/loader:1031:15)
// //     at Module._compile (node:internal/modules/cjs/loader:1065:27)
// //     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
// //     at Module.load (node:internal/modules/cjs/loader:981:32)
// //     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
// //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// //     at node:internal/main/run_main_module:17:47
import { useRouter } from "next/dist/client/router";

const Project = () => {
    const router = useRouter()

    return (
        <div>
            <h1>Project</h1>
            <p>Project id: {router.query.id}</p>
        </div>
    )
}

export default Project
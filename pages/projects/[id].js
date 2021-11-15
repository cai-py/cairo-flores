import { getAllProjectIds, getProjectData } from "../../lib/md-parse"

export default function Post({ projectData }) {
    return (
        <div>
            {projectData.title}
            {projectData.id}
            {projectData.date}
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const projectData = getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}
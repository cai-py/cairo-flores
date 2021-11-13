import { getAllProjectIds, getProjectData } from "../../lib/md-parse";

const Project = ({ projectData }) => {
    <div>
        {projectData.title}
        <br/>
        {projectData.id}
        <br/>
        {projectData.date}
    </div>
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

export default Project
import { getAllProjectIds, getProjectData } from "../../lib/md-parse"
import Date from '../../components/date'

export default function Post({ projectData }) {
    return (
        <div>
            {projectData.title}
            {projectData.id}
            <Date dateString={projectData.date}/>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml}} />
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
    const projectData = await getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}
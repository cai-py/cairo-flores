import { getAllProjectIds, getProjectData } from "../../lib/md-parse"
import Date from '../../components/date'
import Layout from '../../components/layout'

export default function Post({ projectData }) {
    return (
        <div>
            <Layout>
                {projectData.title}
                {projectData.id}
                <Date dateString={projectData.date}/>
                <br/>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml}} />
            </Layout>
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
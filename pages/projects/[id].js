import { getAllProjectIds, getProjectData } from "../../lib/md-parse"
import Date from '../../components/date'
import Layout from '../../components/layout'

export default function Post({ projectData }) {
    return (
        <div>
            <Layout>
                {/* This is terrible code for a back button and you should just make a seporate css file */}
                <div onClick={()=> {window.location.assign("../projects")}} style={{textDecoration: "none", cursor: "pointer"}} onMouseEnter={(event) => event.target.style.textDecoration = "underline"} onMouseLeave={(event) => event.target.style.textDecoration = "none"}>Back</div>
                <div className="mdFile" dangerouslySetInnerHTML={{ __html: projectData.contentHtml}} />
                {/* issue new files not appearing to get parced */}
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
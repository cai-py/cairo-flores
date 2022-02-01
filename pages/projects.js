import { getSortedProjectsData } from '../lib/md-parse'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'

const Projects = ({allProjectsData}) => {
    return (
        <div className='projectsPage'>
            <Layout>
                <div>
                    <h1 className='text-5xl mb-5'>Projects</h1>
                    {/* ADD SEARCH BAR AND OTHER FILTERS HERE */}
                </div>
                
                <ul className=''> {/*FLEXBOX, create cards for each project, maybe different view options*/}
                    {allProjectsData.map(({ id, date, title }) => (
                        <li key={id} className='my-1'>
                            <Link href={`/projects/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}

export default Projects
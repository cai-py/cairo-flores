import { getSortedProjectsData } from '../lib/md-parse'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'

export default function Projects({ allProjectsData }) {
    return (
        <div>
            <Layout>
            <h1>Projects</h1>
            <ul>
                {allProjectsData.map(({ id, date, title }) => (
                    <li key={id}>
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
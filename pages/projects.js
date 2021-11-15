import { getSortedProjectsData } from '../lib/md-parse'
import Link from 'next/link'
import Date from '../components/date'

export default function Projects({ allProjectsData }) {
    return (
        <div>
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
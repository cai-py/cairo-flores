import { getSortedProjectsData } from '../lib/md-parse'

export default function Projects({ allProjectsData }) {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {allProjectsData.map(({ id, date, title }) => (
                    <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
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
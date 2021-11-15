import { getSortedProjectsData } from '../lib/md-parse'

const Projects = ({ allProjectsData }) => (
        <div>
            <h1>Projects</h1>
            <ul>
                {allProjectsData.map(({ id, date, title }) => {
                    <li key={id}>
                        {title}
                        <br/>
                        {id}
                        <br/>
                        {date}
                    </li>
                })}
            </ul>
        </div>
)

// export async function getStaticPaths() {

// }

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}

export default Projects
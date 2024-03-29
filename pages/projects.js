import { getSortedProjectsData } from '../lib/md-parse'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'
import React, { useEffect } from "react";

const Projects = ({allProjectsData}) => {
    useEffect(() => {
        async function fetchData() {
            // api call here
        }
    })
    return (
        <div className='projectsPage'>
            <Layout>
                <div className='titleBlock mb-5'>
                    <h1 className='title text-5xl'>Projects</h1>
                    {/* ADD SEARCH BAR AND OTHER FILTERS HERE */}
                    <div className='filterResults'>
                        <div className='showFilters'>X</div>
                    </div>
                </div>
                
                <ul className=''> {/*FLEXBOX, create cards for each project, maybe different view options*/}
                    {allProjectsData.map(({ id, date, title }) => (
                        <Link href={`/projects/${id}`}>
                        <li key={id} className='border-2 rounded-lg my-2 p-2'>
                            <Link href={`/projects/${id}`}>
                                <a className='link text-2xl'>{title}</a>
                            </Link>
                            <p className='text-lg'>
                                <Date dateString={date}/>
                            </p>
                        </li>
                        </Link>
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
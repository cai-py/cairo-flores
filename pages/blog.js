import Layout from '../components/layout'
import Navbar from '../components/navbar'

const Blog = () => {
    return (
        <div className='blogPage'>
            <Layout>
                <Navbar/>
                <h1>Blog</h1>
            </Layout>
        </div>
    )
}

export default Blog
import Link from 'next/link'

const Index = () => (
    <div className="home">
        <div className="banner">
            <div className="pfp"></div>
            <div className="name">Cairo Flores</div>
            <div className="nav">
                <Link href='/projects'>
                    <div className="link projects-link">Projects</div>
                </Link>
                <Link href='/experience'>
                    <div className="link experience-link">Experience</div>
                </Link>
                <Link href='/blog'>
                    <div className="link blog-link">Blog</div>
                </Link>
            </div>
        </div>
    </div>
)

export default Index
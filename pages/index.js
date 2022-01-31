import Link from 'next/link'

const Index = () => {
    return (
        <div className="home w-full flex">
            <div className="banner m-auto">
                <a className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline">
                    <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-5xl">
                        Cairo Flores
                    </h1>
                </a>
                <div className="nav flex flex-row items-center justify-between text-sm md:text-base">
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
}

export default Index
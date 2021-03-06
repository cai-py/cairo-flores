import React from 'react'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className="navBar bg-white sticky top-0 w-full z-30">
            <div className="flex flex-col max-w-6xl px-4 mx-auto sm:items-center sm:justify-between sm:flex-row sm:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                    <a
                        href="/"
                        className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
                    >
                        <h1 className="link text-4xl Avenir tracking-tighter text-gray-900 sm:text-4x1 lg:text-3xl">
                            Cairo Flores
                        </h1>
                    </a>
                    <button
                        className="text-white cursor-pointer leading-none px-3 py-1 sm:hidden outline-none focus:outline-none"
                        type="button"
                        aria-label="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#191919"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "sm:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <nav className="flex-col flex-grow ">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <li>
                                <a
                                    href='/projects'
                                    className='link font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/experience'
                                    className="link font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/blog'
                                    className="link font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'

export default function Layout({ children }) {
    return (
        <div className='top-0 w-full'>
            <Head></Head>
            <Navbar/>
            <main className='max-w-6xl px-4 mx-auto'>
                <div className='page p-4'>
                    {children}
                </div>
            </main>
        </div>
    )
}
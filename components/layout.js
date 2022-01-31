import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'

export default function Layout({ children }) {
    return (
        <div>
            <Head></Head>
            <Navbar/>
            <main>{children}</main>
            <Link href='/'>
                <a>Back to home...</a>
            </Link>
        </div>
    )
}
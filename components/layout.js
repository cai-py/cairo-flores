import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div>
            <Head></Head>
            <main>{children}</main>
            <Link href='/'>
                <a>Back to home...</a>
            </Link>
        </div>
    )
}
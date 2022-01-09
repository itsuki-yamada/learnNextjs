import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Link href={'/example'}>
                <a className={styles.link}>Example</a>
            </Link>
        </div>
    )
}

export default IndexPage

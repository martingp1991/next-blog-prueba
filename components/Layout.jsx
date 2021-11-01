import Head from "next/head";
import Image from "next/head"
import Link from "next/link"
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Martin'
export default function Layout({children, title, description, home}) {
    console.log(home);
    return (
        <div className={styles.container}>
            <Head>
            <link rel="icon" href="/favicon.ico" />
                <title>{title} </title>
                <meta name="description" content={description} />
            </Head>
            <header className={styles.header}>
        {home ? (
        <>
            <Image
            priority
            src="/img/1.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
        ) : (
        <>
            <Link href="/">
            <a>
                <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
                />
            </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
            <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
            </h2>
        </>
        )}
    </header>



    <nav>
        <Link href="/">
            <a>Inicio | </a>
        </Link>
        <Link href="/blog">
            <a>Blog | </a>
        </Link>
        <Link href="/contact">
            <a>Contact |</a>
        </Link>
        <Link href="/about">
            <a> about |</a>
        </Link>
    </nav>

            <main>{children}</main>

            {!home && (
        <div className={styles.backToHome}>
        <Link href="/">
            <a>← Back to home</a>
        </Link>
        </div>
    )}



        </div>
    );
}

Layout.defaultProps = {
    title: "Next.js | Sitio Web",
    description: "Descripción del sitio web",
}
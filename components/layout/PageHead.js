import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Vista Horizonte | Eleva tu estilo de vida junto al mar"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
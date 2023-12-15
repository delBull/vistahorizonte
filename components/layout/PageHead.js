import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "AZTECAS | Tu HUB Inmobiliario"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
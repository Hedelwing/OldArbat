import Head from "next/head"

const SEO = ({ title, description, url, children }) => {
    const titleTemplate = '%s | театр-студия «Старый Арбат»'
    const finalTitle = title && titleTemplate.replace('%s', title)

    return <Head>
        <link rel="canonical" href={url} />
        <title>{finalTitle}</title>
        <meta content={description} name="description" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={description} />
        {children}
    </Head>
}

export default SEO
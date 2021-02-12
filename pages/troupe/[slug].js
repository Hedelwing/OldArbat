import { Box } from "@material-ui/core"
import React from "react"
import { Layot, SEO, SpecialImage } from "../../components"
import ReactMarkdown from "react-markdown"
import { faceQuery, getFacesSlugQuery, initApollo } from "../../apollo"
import { renderers } from "../../ulits/markdownConfig"

const Face = ({ face, url }) => {
    return <Layot
        current={face.name}
        navItems={[
            { link: "/", name: "Главная" },
            { link: "/troupe/", name: "В лицах" },
        ]}>

        <SEO
            title={face.name}
            description={`${face.name} - деятель в театральной студии «Старый Арбат»`}
            url={url}
        >
            <meta property="og:image" content={face.image?.url} />
            <meta property="og:type" content="profile" />
            <meta property="profile:username" content={face.name} />
        </SEO>

        <Box display='flex' justifyContent='center'>
            <SpecialImage
                image={face.image?.url}
                ratio={{ width: 1, height: 1 }}
                alt={face.image?.alternativeText}
            />
        </Box>

        <ReactMarkdown renderers={renderers}>
            {face.about}
        </ReactMarkdown>

    </Layot>
}

export default Face

const apolloClient = initApollo()

export async function getStaticPaths() {
    const { data } = await apolloClient.query({ query: getFacesSlugQuery })

    const paths = data?.troupes.reduce((acc, { slug }) => [...acc, `/troupe/${slug}`], [])

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const { data } = await apolloClient.query({
        query: faceQuery,
        variables: {
            slug
        }
    })

    const face = data.troupeBySlug

    if (!face) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            face,
            url: `${process.env.THEATER}troupe/${slug}`
        },
    }
}
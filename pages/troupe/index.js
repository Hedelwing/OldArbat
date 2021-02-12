import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Layot, FaceCard, SEO } from "../../components"
import { troupeQuery, initApollo } from "../../apollo"

const Troupe = ({ troupe, url }) => {
    const directors = troupe.filter(face => face.role === 'Режиссёр')
    const actors = troupe.filter(face => face.role === 'Актёр')

    return <Layot current="В лицах" navItems={[{ name: "Главная", link: "/" }]}>

        <SEO
            url={url}
            title="В лицах"
            description="Труппа театральной студии «Старый Арбат». Актерский и режиссерский состав театра"
        />

        <Box pb={3}>
            <Typography>
                Наша труппа состоит из людей разных возрастов принципов, нравов, но всех нас объединяет молодость, энергия,
                амбициозность, способность думать, а, самое главное, желание творить на театральных подмостках. Все, кто хоть раз побывал
                в нашем театральном доме, навсегда становятся поклонниками нашего театра и приходят к нам снова и снова.
            </Typography>
        </Box>

        <Box py={4}>
            <Typography variant='h5' align='center'>
                Режиссёрский состав
            </Typography>
        </Box>

        <Box display='flex' flexWrap='wrap' justifyContent='center' pb={3}>
            {directors.map((director, key) =>
                <Box key={key} p={2} m={-1} width={320} maxWidth="100%">
                    <FaceCard
                        slug={director.slug}
                        image={director.image?.url}
                        name={director.name}
                    />
                </Box>
            )}
        </Box>

        <Box py={4}>
            <Typography variant='h5' align='center'>
                Актерский состав
            </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
            {actors.map((actor, key) =>
                <Box key={key} mb={2} width={320} maxWidth='100%' p={2} m={-1}>
                    <FaceCard
                        slug={actor.slug}
                        image={actor.image?.url}
                        name={actor.name}
                    />
                </Box>)}

            {[...Array(4)].map((empty, key) =>
                <Box key={key} width={320} maxWidth='100%' px={2} mx={-1} />
            )}

        </Box>

    </Layot>
}

export async function getStaticProps() {
    const apolloClient = initApollo()

    const { data } = await apolloClient.query({
        query: troupeQuery
    })

    return {
        props: {
            troupe: data.troupes,
            url: `${process.env.THEATER}troupe`
        },
    }
}

export default Troupe
import React from "react"
import { Grid, Box } from "@material-ui/core"
import { Layot, PlayCard, SEO } from "../../components"
import { playsQuery, initApollo } from "../../apollo"

export default function Plays({ plays, url }) {
  return <Layot current="Репертуар" navItems={[{ name: "Главная", link: "/" }]}>
    <SEO
      title='Репертуар'
      description="Репертуар театрального дома «Старый Арбат». От всем известного «Фигаро» до авторских спектаклей"
      url={url}
    />
    <Box display="flex">
      <Grid spacing={2} container>
        {plays?.map(play =>
          <Grid key={play.id} xs={12} sm={6} lg={4} item>
            <PlayCard
              {...play}
              href="/plays/[play]"
              as={`/plays/${play.slug}`}
              preview={play.preview?.url}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  </Layot>
}


export async function getStaticProps({ query }) {
  const apolloClient = initApollo()

  const { data } = await apolloClient.query({
    query: playsQuery
  })

  return {
    props: {
      plays: data?.plays,
      url: `${process.env.THEATER}plays`
    }
  }
}
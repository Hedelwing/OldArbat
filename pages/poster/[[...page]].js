import React from "react"
import { PosterCard, Layot, SEO } from "../../components"
import { Box, Typography } from "@material-ui/core"
import { postersQuery, initApollo, postersCountQuery } from "../../apollo"
import Router from 'next/router'
import { Pagination } from "@material-ui/lab"
import { formatPoster, createPosterJsonLD } from "../../ulits"

const Posters = ({ posters, maxPages, page, url }) => {
  const paginationChange = (event, value) => {
    Router.push(`/poster/${value}`)
  }

  const schema = posters.map(poster =>
    createPosterJsonLD(poster)
  )


  return <Layot current="Афиша" navItems={[{ name: "Главная", link: "/" }]}>
    <SEO
      title="Афиша"
      description="Афиша театральной студии «Старый Арбат». Все актуальные спектакли и постановки нашего театра вы найдёте здесь"
      url={url}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </SEO>

    {posters?.map(({
      id,
      slug,
      ...poster
    }) =>
      <Box pb={3} key={id}>
        <PosterCard
          href={slug}
          {...poster}
        />
      </Box>
    )}

    {!posters && <Box p={3}>
      <Typography variant='caption' color='textSecondary'>
        Нет событий
        </Typography>
    </Box>}

    {maxPages > 0 && <Box display='flex' justifyContent='center' pt={3}>
      <Pagination
        count={+maxPages}
        page={+page}
        onChange={paginationChange}
        variant="outlined"
        color="primary"
      />
    </Box>}

  </Layot>
}

export default Posters

const limit = 3
const apolloClient = initApollo()

const getMaxPages = async () => {
  const count = (await apolloClient.query({
    query: postersCountQuery
  })).data?.postersCount ?? 0

  return Math.ceil(count / limit)
}

export async function getStaticPaths() {
  const maxPages = await getMaxPages()

  const paths = Array
    .from({ length: maxPages })
    .reduce((acc, cur, i) =>
      [...acc, `/poster/${i + 1}`],
      ['/poster']
    )

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { page = 1 } }) {
  const maxPages = await getMaxPages()

  const start = +page === 1 ? 0 : (+page - 1) * limit

  const { data } = (await apolloClient.query({
    query: postersQuery,
    variables: {
      start,
      limit
    }
  }))

  const posters = data?.posters.map(poster => formatPoster(poster))

  return {
    props: {
      posters,
      page: page,
      maxPages,
      url: `${process.env.THEATER}poster`
    },
    revalidate: 240
  }
}
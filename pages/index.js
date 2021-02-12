import { Typography, Box, makeStyles, Container } from '@material-ui/core'
import Head from 'next/head'
import { Galery, PosterCard } from '../components'
import { homeQuery, initApollo } from '../apollo'
import ReactMarkdown from 'react-markdown'
import { renderers } from '../ulits/markdownConfig'
import SpecialTitle from '../components/SpecialTitle'
import { formatPoster } from '../ulits'

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: "url('/hero_mobile.jpg')",
    backgroundSize: "cover",
    backgroundPositionY: 'top',
    height: `calc(100vh - ${theme.spacing(9)}px)`,
    [theme.breakpoints.up('sm')]: {
      backgroundImage: "url(/hero.jpg)"
    }
  },
  titleBackdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, .6 )',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fafafa'
  },
  heroTitle: {
    fontWeight: 'bold',
    color: '#fafafa'
  }
}))

export default function Home({ homepage: { meta, title, text, galery }, poster, canonical }) {
  const { hero, heroTitle, titleBackdrop } = useStyles()

  return <>
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <link rel="icon" href={`${canonical}favicon.ico`} type="image/x-icon" />
      {meta?.map((meta, key) => <meta key={key} {...meta} />)}
    </Head>

    <Box pb={2} position="relative" className={hero}>
      <Box className={titleBackdrop}>
        <Container maxWidth="lg">
          <Typography className={heroTitle} variant="h3" component="h1">
            {title}
          </Typography>
        </Container>
      </Box>
    </Box>


    <Container maxWidth="lg">
      <Box pt={6}>
        <Box textAlign="center" pb={4}>
          <SpecialTitle title="Афиша" />
        </Box>

        <Box maxWidth={960} minHeight={160} display="flex" justifyContent="center" alignItems="center" mx="auto">
          {poster ?
            <PosterCard
              {...poster}
              href={poster.slug}
            />
            : <Typography variant="subtitle2" color="textSecondary">
              Нет ближайших событий
              </Typography>
          }
        </Box>
      </Box>


      <Box pt={6} pb={3}>

        <Box textAlign="center" pb={4}>
          <SpecialTitle title='О нас' />
        </Box>

        <ReactMarkdown renderers={renderers}>
          {text}
        </ReactMarkdown>
        
      </Box>

      {
        galery && <Box pt={6} pb={3}>
          <Box textAlign="center" pb={4}>
            <SpecialTitle title='Галерея' />
          </Box>
          <Galery images={galery} autoplay />
        </Box>
      }

    </Container>
  </>
}

export async function getStaticProps(ctx) {
  const apolloClient = initApollo()

  const { data } = await apolloClient.query({
    query: homeQuery,
    variables: {
      date: Date.now().toString()
    }
  })

  if (!data?.homepage) return {
    notFound: true
  }

  const poster = data.posters[0]
  const formattedPoster = poster && formatPoster(poster)

  const galery = data.homepage.galery.map(image => ({
    url: image.url,
    thumbnail: image.formats.small.url
  }))

  const homepage = { ...data.homepage, galery }

  return {
    props: {
      homepage,
      poster: formattedPoster,
      canonical: process.env.THEATER
    },
  }
}

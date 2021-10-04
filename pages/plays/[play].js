import { Typography, Box, Link, makeStyles } from "@material-ui/core"
import React from "react"
import ReactMarkdown from "react-markdown"
import { renderers } from "../../ulits/markdownConfig"
import { Galery, Layot, SEO, SpecialImage } from "../../components"
import { playQuery, initApollo, getPlaysSlugQuery } from "../../apollo"
import RouterLink from 'next/link'
import { dateFormat, timeFormat } from '../../ulits'

const useStyles = makeStyles(theme => ({
  announce: {
    borderRadius: theme.spacing(1.25),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    padding: theme.spacing(1.25),
  },
  howToGet: {
    marginRight: theme.spacing(1.25)
  },
  footnote: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    padding: '8px 0 8px 24px'
  }
}))

export default function Play({ play, url }) {
  const styles = useStyles()
  const [poster] = play.posters

  return <Layot
    current={play.title}
    navItems={[
      { link: "/", name: "Главная" },
      { link: "/plays/", name: "Репертуар" },
    ]}
  >

    <SEO
      title={play.title}
      description={play.description}
      url={url}
    >
      <meta property="og:image" content={play.preview.url} />
      <meta property="og:type" content="article" />
    </SEO>

    <Box pb={3}>

      <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">

        <Box maxWidth="100%">
          <SpecialImage image={play.preview.url} alt={`Спектакль ${play.title}`} title={`Постановка «${play.title}»`} />
        </Box>

        <Box px={3} py={2}>
          <Typography gutterBottom>
            Режиссер: {play.director?.name
              ? <RouterLink href={`/troupe/${play.director.slug}`} passHref>
                <Link color='primary'>{play.director.name}</Link>
              </RouterLink>
              : play.author}
          </Typography>

          <Typography gutterBottom>
            Продолжительность: {play.duration} минут
          </Typography>

          <Typography gutterBottom>Жанр: {play.genre}</Typography>

          <Typography>
            Возрастная категория: {play.rate}
          </Typography>

        </Box>

      </Box>
    </Box>


    {poster && <Box className={styles.announce} mb={3}>

      <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
        <Typography>
          Когда: <b>{dateFormat(poster.date)} в {timeFormat(poster.date)}</b>
        </Typography>

        <Typography>
          Цена: <b>{poster.price} рублей</b>
        </Typography>
      </Box>

      <RouterLink href='/contacts#how_to_get' passHref>
        <Link className={styles.howToGet} color='inherit' underline='always' variant='caption'>Как до нас добраться?</Link>
      </RouterLink>

      <RouterLink href='/scheme.jpg' passHref>
        <Link target='__blank' color='inherit' underline='always' variant='caption'>Схема зала</Link>
      </RouterLink>

    </Box>}


    <Box pb={2}>
      <ReactMarkdown renderers={renderers}>{play.text}</ReactMarkdown>
    </Box>


    {play.galery.length !== 0 && <Box pb={3}>
      <Galery images={play.galery} />
    </Box>}


    <Box pb={3}>
      <Box className={styles.footnote}>
        <Typography>
          Не забывайте подписываться на наш <Link style={{ fontWeight: 'bold' }} color="primary" href="https://www.instagram.com/teatr_staryj_arbat/" target="_blank" rel="noopener">Инстраграм</Link> и
          группу <Link style={{ fontWeight: 'bold' }} color="primary" href="https://vk.com/staryjarbat" target="_blank" rel="noopener">ВКонтакте</Link>. Всё
          cамое интересное вы найдете именно там.
        </Typography>
      </Box>
    </Box>
  </Layot>
}

const apolloClient = initApollo()

export async function getStaticPaths() {
  const { data } = await apolloClient.query({ query: getPlaysSlugQuery })

  const paths = data?.plays.reduce((acc, { slug }) => [...acc, `/plays/${slug}`], [])

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: playQuery,
    variables: {
      slug: params.play,
      date: Date.now().toString()
    }
  })

  if (!data?.playBySlug)
    return {
      notFound: true
    }

  const galery = data.playBySlug.galery.map(image => ({
    url: image.url,
    thumbnail: image.formats.small.url
  }))

  const play = { ...data.playBySlug, galery }

  return {
    props: {
      play,
      url: `${process.env.THEATER}${params.play}`
    },
    revalidate: 240
  }
}
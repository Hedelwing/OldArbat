import { Link, Typography, CssBaseline, Box, makeStyles, ThemeProvider } from "@material-ui/core"
import RouterLink from "next/link"
import Header from "../components/Header"
import Head from "next/head"
import { ApolloProvider } from "@apollo/client"
import initializeApollo from "../apollo/client"
import Router from 'next/router'
import NProgress from 'nprogress'
import theme from "../theme"

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const useStyles = makeStyles(theme => ({
    '@global': {
        '#nprogress': {
            pointerEvents: 'none'
        },
        '#nprogress .bar': {
            background: '#0396A6',
            position: 'fixed',
            zIndex: 1031,
            top: 0,
            left: 0,
            width: '100%',
            height: 2
        },

        '#nprogress .peg': {
            display: 'block',
            position: 'absolute',
            right: 0,
            width: 100,
            height: '100%',
            boxShadow: `0 0 10px #0396A6, 0 0 5px #0396A6`,
            opacity: 1,
            transform: 'rotate(3deg) translate(0px, -4px)'
        },
        '.nprogress-custom-parent': {
            overflow: 'hidden',
            position: 'relative'
        },
        '.nprogress-custom-parent #nprogress .bar': {
            position: 'absolute'
        }
    },
    container: {
        flex: 1,
        paddingTop: theme.spacing(9),

    },
    footer: {
        paddingBottom: theme.spacing(2),
        textAlign: "center",
    }
}))


export default function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, [])

    const client = React.useMemo(() =>
        initializeApollo(pageProps.initialApolloState),
        [pageProps.initialApolloState],
        []
    )

    const { footer, container } = useStyles()

    return <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            <CssBaseline />


            <Header />


            <Box className={container} component='main'>
                <Component {...pageProps} />
            </Box>


            <Box className={footer} component='footer'>
                <Box>
                    <Typography variant="caption">
                        Copyright ©{" "}
                        <RouterLink href="/" passHref>
                            <Link color="primary">
                                Старый Арбат
                                </Link>
                        </RouterLink>{" "}
                        {new Date().getFullYear()}.
                        </Typography>
                </Box>


                <Box>
                    <Link color="primary" href='http://staryjarbat.ucoz.ru/' variant='caption' rel='nofollow noopener' target='_blank'>
                        Старый сайт театрального дома «Старый Арбат»
                    </Link>
                </Box>
            </Box>
        </ThemeProvider>
    </ApolloProvider>
}
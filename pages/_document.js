import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import CleanCSS from 'clean-css'

const prefixer = postcss([autoprefixer])
const cleanCSS = new CleanCSS()

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
            })

        const initialProps = await Document.getInitialProps(ctx)

        let styles = sheets.getStyleElement().props.dangerouslySetInnerHTML.__html

        const { css } = await prefixer.process(styles, { from: undefined })

        return {
            ...initialProps,
            styles: <style
                id="jss-server-side"
                dangerouslySetInnerHTML={{ __html: cleanCSS.minify(css).styles }}
            />,
        }
    }
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@400;700&display=swap" rel="stylesheet" type="text/css" />
                    {process.env.NODE_ENV === 'production' && <>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LRVR9S287E" />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-LRVR9S287E');
                        `
                            }}
                        />
                    </>}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
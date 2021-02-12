import { responsiveFontSizes, createMuiTheme } from "@material-ui/core"

let theme = createMuiTheme({
    palette: {
        primary: {
            dark: '#025E73',
            main: '#0396A6',
        }
    },
    typography: {
        htmlFontSize: 12.5,
        fontFamily: "Montserrat",
    },
    overrides: {
        MuiTypography: {
            gutterBottom: {
                marginBottom: 20,
            },
            h3: {
                fontFamily: "Oswald",
            },
            h4: {
                fontFamily: "Oswald",
            },
            h5: {
                fontFamily: "Oswald",
                textTransform: 'uppercase'
            },
            h6: {
                fontFamily: "Oswald",
            },
            button: {
                fontFamily: "Oswald",
            }
        },
        MuiContainer: {
            root: {
                paddingLeft: 12,
                paddingRight: 12,
            }
        },
        MuiLink: {
            root: {
                fontWeight: 'bold'
            }
        }
    },
})

theme = responsiveFontSizes(theme)

export default theme
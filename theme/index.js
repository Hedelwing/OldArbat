import { responsiveFontSizes, createTheme } from "@material-ui/core"

let theme = createTheme({
    palette: {
        primary: {
            dark: '#025E73',
            main: '#0396A6',
        }
    },
    typography: {
        htmlFontSize: 12.5,
        fontFamily: "Mulish",
    },
    overrides: {
        MuiTypography: {
            gutterBottom: {
                marginBottom: 20,
            },
            h5: {
                textTransform: 'uppercase'
            },
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

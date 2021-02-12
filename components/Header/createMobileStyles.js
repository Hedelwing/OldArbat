import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
    logo: {
        height: theme.spacing(6),
        color: "#fafafa",
        width: "auto",
    },
    toolbar: {
        boxShadow: theme.shadows[4],
        position: "fixed",
        zIndex: 1000,
        width: "100%",
        background: 'black',
        color: "#fafafa",
        padding: theme.spacing(1),
        minHeight: theme.spacing(9)
    }
}))
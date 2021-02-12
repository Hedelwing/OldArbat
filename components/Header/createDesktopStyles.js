import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    logo: {
      height: theme.spacing(6),
      width: "auto",
      color: "#fafafa",
    },
    header: {
      minHeight: theme.spacing(9),
      background: 'black',
      color: "#fafafa",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      boxShadow: theme.shadows[4],
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
      }
    },
    nav: {
      flexBasis: '45%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: theme.spacing(.5)
    },
    navItem: {
      listStyle: "none",
    },
    menuLink: {
      fontSize: 24,
      textTransform: "uppercase",
      cursor: "pointer",
      fontFamily: "Oswald",
      position: "relative",
      color: "#fafafa",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      "&:hover:after": {
        transform: "scale(1)"
      },
      "&:after": {
        content: '""',
        position: "absolute",
        height: 2,
        background: theme.palette.primary.main,
        transition: ".25s ease-in-out",
        bottom: 0,
        left: 0,
        right: 0,
        transform: "scale(0,1)"
      }
    },
  }))
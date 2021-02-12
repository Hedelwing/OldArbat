import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  "@global": {
    ".swiper-button-prev, .swiper-button-next": {
      color: '#fafafa'
    },
    ".swiper-slide": {
      paddingLeft: theme.spacing(.5),
      paddingRight: theme.spacing(.5),
      margingLeft: theme.spacing(-0.5),
      boxSizing: "border-box"
    }
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: 240,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
      height: 320,
    }
  },
}))
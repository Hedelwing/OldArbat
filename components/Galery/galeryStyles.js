import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  "@global": {
    ".swiper-button-prev, .swiper-button-next": {
      color: '#fafafa'
    },
    ".swiper-container": {
      overflow: 'hidden',
      position: 'relative'
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
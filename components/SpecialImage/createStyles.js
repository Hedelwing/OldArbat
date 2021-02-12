import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    mask: {
        filter: `drop-shadow( 2px 2px 4px ${theme.palette.primary.dark})`,
        WebkitFilter: `drop-shadow( 2px 2px 4px ${theme.palette.primary.dark})`,
        color: theme.palette.primary.main,
        fontSize: 'inherit'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        WebkitFilter:`drop-shadow(16px -16px 0 ${theme.palette.primary.main})`,
        filter: `drop-shadow(16px -16px 0 ${theme.palette.primary.main})`,
        backgroundColor: 'white',
        borderRadius: theme.spacing(1.5),
        '& img': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: theme.spacing(1.5),
        }
    }
}))
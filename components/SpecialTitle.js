import { Box, makeStyles, Typography } from "@material-ui/core"
import React from 'react'

const useStyles = makeStyles(theme => ({
    specialTitle: {
        position: "relative",
        display: "inline-block",
        fontWeight: "bold",
        paddingBottom: theme.spacing(1),
        "&:after": {
            content: '""',
            left: -16,
            right: -16,
            height: 1,
            bottom: 0,
            position: "absolute",
            background: theme.palette.grey[300]
        }
    },
}))


const SpecialTitle = ({ title, component = 'h3' }) => {
    const { specialTitle } = useStyles()

    return <Typography variant="h3" component={component} className={specialTitle}>
        {title}
    </Typography>
}

export default SpecialTitle
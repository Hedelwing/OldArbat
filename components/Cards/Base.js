import React from "react"
import {
    Card,
    makeStyles
} from "@material-ui/core"
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    card: {
        display: 'block',
        textDecoration: 'none',
        height: "100%",
        userSelect: "none",
        boxShadow: theme.shadows[3],
        "&:hover": {
            boxShadow: theme.shadows[12],
        }
    }
}))

const Base = props => {
    const { card } = useStyles()

    return <Link {...props} passHref>
        <Card className={card} component='a'>
            {props.children}
        </Card>
    </Link>
}

export default Base
import React from "react"
import {
    Card,
    makeStyles
} from "@material-ui/core"
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: "none",
        color: theme.palette.text,
    },
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

export default props => {
    const { link, card } = useStyles()

    return <Link
        className={link}
        {...props}
        passHref
    >
        <Card className={card} component='a'>
            {props.children}
        </Card>
    </Link>
}


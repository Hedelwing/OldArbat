import React, { useMemo } from "react"
import {
  Typography, Box, CardMedia, CardContent, makeStyles
} from "@material-ui/core"
import Card from "./Base"
import { cutString } from "../../ulits"

const useStyles = makeStyles({
  media: {
    height: 260,
    position: 'relative'
  }
})

const PlayCard = ({ title, genre, preview, href, as, text }) => {
  const description = useMemo(() => cutString(text), [text])
  const styles = useStyles()

  return <Card href={href} as={as}>
    <CardMedia
      title={title}
      image={preview}
      className={styles.media}
    >
      <Box position='absolute' bottom={8} right={8} color="white" style={{ background: '#0396A6' }} border="2px solid #0396A6" borderRadius="8px" p={0.5}>
        <Typography style={{ fontWeight: 'bold' }} color="inherit" variant="caption">{genre}</Typography>
      </Box>
    </CardMedia>
    <CardContent>
      <Typography variant="h5" color='primary' gutterBottom>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
}

export default PlayCard

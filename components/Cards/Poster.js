import React, { useMemo } from "react"
import {
  Grid,
  Typography,
  Divider,
  Box,
  CardMedia,
  CardContent,
} from "@material-ui/core"
import Card from './Base'
import { makeStyles } from "@material-ui/core/styles"
import { CalendarToday, Alarm, AccountBalanceWallet, LocationOn } from "@material-ui/icons"

const useStyles = makeStyles({
  image: {
    objectFit: "cover",
    width: "100%",
    minHeight: "320px",
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
    minHeight: "100%"
  },
  title: {
    fontWeight: 700
  }
})

function Poster(poster) {
  const styles = useStyles()

  return (
    <Card href={poster.href}>
      <Grid container justify="center">
        <Grid xs={12} sm={5} item>
          <CardMedia
            title={poster.title}
            className={styles.image}
            image={poster.url}
          />
        </Grid>
        <Grid
          xs={12}
          sm={7}
          direction="column"
          alignItems="flex-end"
          justify="center"
          container
          item
        >
          <CardContent className={styles.card}>
            <Box display="flex" pb={2} justifyContent="space-between">
              <Box display="flex" justifyContent="flex-start">
                <CalendarToday />
                <Box pl={1}>
                  <Typography variant="body1">{poster.date}</Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Alarm />
                <Box pl={1}>
                  <Typography variant="body1">
                    {poster.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography variant="h5" color="primary" className={styles.title} gutterBottom>{poster.title}</Typography>
            <Typography variant="body1" gutterBottom>{poster.text}</Typography>
            <Box pt={1} mt="auto">
              <Divider />
              <Box py={1} display="flex" justifyContent="space-between" alignItems="flex-end">
                <Typography variant="body1">Цена:</Typography>
                <Box display="flex">
                  <Typography variant="body1">{poster.price}</Typography>
                  <AccountBalanceWallet />
                </Box>
              </Box>
              <Box display="flex" wrap="nowrap" alignItems="center">
                <LocationOn />
                <Typography variant="body1">{poster.adress}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default React.memo(Poster)
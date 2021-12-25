import React from 'react'
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    marginTop: '50px',
    padding: '10px 50px',
  },
  typoStyle: {
    color: 'white',
  },
  paperStyle: {
    background: 'orange',
    height: '50px',
  },
})

const MaterialUI: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="primary"
        variant="h1"
        align="left"
        gutterBottom
      >
        Hello MaterialUI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test button
      </Button>

      <Grid container spacing={1} justifyContent="flex-start">
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1} direction="column">
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paperStyle}>Demo</Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paperStyle}></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paperStyle}>Text</Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="space-around">
          <Grid item xs={3}>
            “MUI offers a wide variety of high quality components that have
            allowed us to ship features faster. MUI has been used by more than a
            hundred engineers in our organization. What’s more, MUI's well
            architected customization system has allowed us to differentiate
            ourselves in the marketplace.”
          </Grid>
          <Grid item xs={3}>
            “MUI offers a wide variety of high quality components that have
            allowed us to ship features faster. MUI has been used by more than a
            hundred engineers in our organization. What’s more, MUI's well
            architected customization system has allowed us to differentiate
            ourselves in the marketplace.”
          </Grid>
          <Grid item xs={3}>
            “MUI offers a wide variety of high quality components that have
            allowed us to ship features faster. MUI has been used by more than a
            hundred engineers in our organization. What’s more, MUI's well
            architected customization system has allowed us to differentiate
            ourselves in the marketplace.”
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default MaterialUI

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SettingsIcon from '@material-ui/icons/Settings';
import Link from '@material-ui/core/Link';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Darwin Developers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App() {
  const [openSimple, setOpenSimple] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [catImage, setCatImage] = useState("");

  const classes = useStyles();


  const handleOpenSimple = async () => {
    await setOpenSimple(true)
    const response = await axios.get('https://thatcopy.pw/catapi/rest/');
    await setCatImage(response.data.url);
    await setIsLoading(false)
  }

  const handleCloseSimple = () => {
    setCatImage("")
    setOpenSimple(false)
    setIsLoading(true)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <PetsIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Memento Cattus
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Memento Cattus
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Memento Cattus is a one project of various with the goal of improving and increasing my level and experience with the reactjs framework.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button style={{ backgroundColor: "black" }} variant="contained" color="primary" onClick={handleOpenSimple}>
                    <SettingsIcon style={{ marginRight: "5px" }} />GENERATE FAST CAT<SettingsIcon style={{ marginLeft: "5px" }} />
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Grid style={{ marginTop: "100px" }} container spacing={4}>
              <Grid item key={'Linkedin_1'} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media-exp3.licdn.com/dms/image/C4D03AQH61Tzq73pAyg/profile-displayphoto-shrink_800_800/0/1613855133660?e=1631145600&v=beta&t=SxZPmTOjaSO5cvJCb5skTRCrY5ausNZBfXjuziofSog"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => { window.open("https://www.linkedin.com/in/gustavo-de-oliveira-rosa-916104199/") }}>
                      Follow me on Linkedin
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={'Linkedin_2'} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media-exp3.licdn.com/dms/image/C4D03AQH61Tzq73pAyg/profile-displayphoto-shrink_800_800/0/1613855133660?e=1631145600&v=beta&t=SxZPmTOjaSO5cvJCb5skTRCrY5ausNZBfXjuziofSog"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => { window.open("https://www.linkedin.com/in/gustavo-de-oliveira-rosa-916104199/") }}>
                      Follow me on Linkedin
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={'Linkedin_3'} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media-exp3.licdn.com/dms/image/C4D03AQH61Tzq73pAyg/profile-displayphoto-shrink_800_800/0/1613855133660?e=1631145600&v=beta&t=SxZPmTOjaSO5cvJCb5skTRCrY5ausNZBfXjuziofSog"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => { window.open("https://www.linkedin.com/in/gustavo-de-oliveira-rosa-916104199/") }}>
                      Follow me on Linkedin
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Developed by Darwin Developers
        </Typography>
        <Copyright />
      </footer>

      <Dialog
        open={openSimple}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseSimple}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"A cat coming out of the oven! :3"}</DialogTitle>
        <DialogContent>
          {isLoading && <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_tQSHu2.json" background="transparent" speed={1} style={{ width: '300px', height: '300px' }} loop autoPlay />}
          {!isLoading && <img src={`${catImage}?${new Date().getTime()}`} key={`${catImage}?${new Date().getTime()}`} width={'300px'} height={'300px'} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenSimple} color="primary">
            GENERATE OTHER
          </Button>
          <Button onClick={handleCloseSimple} color="primary">
            GO BACK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
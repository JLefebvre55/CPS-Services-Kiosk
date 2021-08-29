import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                      CPS Services Kiosk
                  </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
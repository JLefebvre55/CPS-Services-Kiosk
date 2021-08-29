import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Checklist from './Checklist';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '20em'
    },
    title: {
        flexGrow: 1
    },
    buttonbox: {
        padding: '.5em'
    },
    contentbox: {
        padding: '.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodybox: {
        height: '8em',
    },
    imagebox: {
        padding: '1em',
    },
    image: {
        maxWidth: '70%', 
        maxHeight: '70%'
    },
    checklistbox: {
        minWidth: '30vw'
    },
    formControl: {
        margin: theme.spacing(3),
    },
    titlebox: {
        fontWeight: "bold"
    }
  }),
);

export type FormItemProps = {
    item: {
        title: string,
        content: string,
        imageurl: string,
        checklist: string[],
        buttontext?: string
    }
}

export default function FormItem(props: FormItemProps) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        // resetChecklistState()
        setOpen(false);
    };

    return (
    <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper} elevation={5}>
            <Box className={classes.imagebox}>
                <img src={props.item.imageurl} className={classes.image} alt="" />
            </Box>
            <Box className={classes.bodybox}>
                <Box className={classes.titlebox}>
                    <Typography variant="h6" className={classes.title}>
                        {props.item.title}
                    </Typography>
                </Box>
                <Box className={classes.contentbox}>
                    <Typography variant="body2">
                        {props.item.content}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.buttonbox}>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Select
                </Button>
            </Box>
        </Paper>
        <Checklist checklist={props.item.checklist} openState={open} handleClose={handleClose} buttonText={props.item.buttontext}/>
    </Grid>)
}
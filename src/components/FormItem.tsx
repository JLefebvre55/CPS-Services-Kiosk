import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';

import Checklist from './Checklist';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '18vw',
        minWidth: '200px'
    },
    title: {
        flexGrow: 1
    },
    buttonbox: {
        padding: '.5em'
    },
    textbox: {
        padding: '.5em',
        minHeight: '3.5em',
        maxHeight: '3.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
  }),
);

export type FormItemProps = {
    item: {
        title: string,
        content: string,
        imageurl: string,
        checklist: [string]
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

    return (<div>
        <Paper className={classes.paper} elevation={5}>
            <Box className={classes.imagebox}>
                <img src={props.item.imageurl} className={classes.image} alt="" />
            </Box>
            <Typography variant="h6" className={classes.title}>
                {props.item.title}
            </Typography>
            <Box className={classes.textbox}>
                <Typography variant="body2">
                    {props.item.content}
                </Typography>
            </Box>
            <Box className={classes.buttonbox}>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Select
                </Button>
            </Box>
        </Paper>
        <Checklist checklist={props.item.checklist} openState={open} handleClose={handleClose} />
    </div>)
}
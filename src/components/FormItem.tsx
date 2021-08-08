// import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';

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
    contentbox: {
        padding: '.5em'
    }
  }),
);

export type FormItemProps = {
    item: {
        title: string,
        content: string,
        imageurl: string
    }
}

export default function FormItem(props: FormItemProps) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Box className={classes.contentbox}>
                <img src={props.item.imageurl} style={{maxWidth: '100%', maxHeight: '100%'}} alt="" />
            </Box>
            <Typography variant="h6" className={classes.title}>
                {props.item.title}
            </Typography>
            <Box className={classes.contentbox}>
                <Typography variant="body2">
                    {props.item.content}
                </Typography>
            </Box>
            <Box className={classes.contentbox}>
                <Button variant="contained" color="primary">
                    Select
                </Button>
            </Box>
        </Paper>
    )
}

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
    },
    title: {
        flexGrow: 1
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
            <img src={props.item.imageurl} alt="" />
            <Typography variant="h6" className={classes.title}>
                {props.item.title}
            </Typography>
            <Box padding="1em" minWidth="12em" maxWidth="18em">
                <Typography variant="body2">
                    {props.item.content}
                </Typography>
            </Box>
            <Box padding="1em">
                <Button variant="contained" color="primary">
                    Select
                </Button>
            </Box>
        </Paper>
    )
}

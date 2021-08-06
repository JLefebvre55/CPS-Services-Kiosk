// import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FormItem, { FormItemProps } from './FormItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '90vw',
        justifyContent: "center",
    }
  }),
);

export type FormGridProps = {
    items: [
        FormItemProps
    ]
}

export default function FormGrid(props: FormGridProps) {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            {props.items.map(item => {
                return (<Grid item><FormItem item={item.item}/></Grid>);
            })}
        </Grid>
    );
}
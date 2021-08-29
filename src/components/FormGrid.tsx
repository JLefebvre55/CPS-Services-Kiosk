import { useEffect, useState, FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import "firebase/functions";

import FormItem, { FormItemProps } from './FormItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '100vw',
        paddingLeft: '10%',
        paddingRight: '10%',
        justifyContent: 'center'
    }
  }),
);

export type FormGridProps = {
    items?: [FormItemProps]
};

const FormGrid : FunctionComponent<FormGridProps> = (props = {items: undefined}) => {
    const [gridData, setGridData] = useState(props.items);
    useEffect(() => {
        // const helloWorld = firebase.functions().httpsCallable('helloWorld');
        // helloWorld().then(value => {console.log(value.data)}).catch(console.log);
        const getAllForms = firebase.functions().httpsCallable('getAllForms');
        getAllForms().then(forms => {
            setGridData(forms.data.map((form: any) =>{
                return {item: form};
            }));
        })
    }, []);
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            {gridData === undefined ? (<CircularProgress/>) : gridData.map(item => {
                return <FormItem item={item.item}/>;
            })}
        </Grid>
    );
}
export default FormGrid;
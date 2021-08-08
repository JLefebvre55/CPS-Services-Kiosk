import { useEffect, useState, FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/app';
import "firebase/functions";

import FormItem, { FormItemProps } from './FormItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        maxWidth: '90vw',
        justifyContent: "center",
        marginTop: '5vh'
    }
  }),
);

export type FormGridProps = {
    items?: [FormItemProps]
};

const FormGrid : FunctionComponent<FormGridProps> = (props) => {
    const [gridData, setGridData] = useState(props.items);
    useEffect(() => {
        // const helloWorld = firebase.functions().httpsCallable('helloWorld');
        // helloWorld().then(value => {console.log(value.data)}).catch(console.log);
        const getAllForms = firebase.functions().httpsCallable('getAllForms');
        getAllForms().then(forms => {
            setGridData(forms.data.map(form=>{
                return {item: form};
            }));
        })
    }, []);
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            {gridData?.map(item => {
                return (<Grid item><FormItem item={item.item}/></Grid>);
            })}
        </Grid>
    );
}
export default FormGrid;
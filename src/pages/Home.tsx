import { Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Components
import FormGrid from '../components/FormGrid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(3)
    }
  }),
);

export default function Home () {
    const classes = useStyles();

    var items = [];
    for(var i = 1; i < 9; i++){
        items.push({item: {title: `Form ${i}`, content:'This is some placeholder content. This will be replaced with a description for the form.', imageurl: 'https://via.placeholder.com/150'}})
    }
    return (
        <Box className={classes.root}>
            <FormGrid />
        </Box>
    )
}

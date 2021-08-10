import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Components
import FormGrid from '../components/FormGrid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '10vh'
        },
        header: {
            margin: '1%',
            display: 'flex',
            minWidth: '100vh',
            justifyContent: 'center',
        },
        grid: {
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
        <div className={classes.root}>
            <Box className={classes.header} >
                <Typography variant="h4">
                    Welcome! Please select a form or service.
                </Typography>
            </Box>
            <Box className={classes.header}>
                <Typography variant="h6">
                    Ensure you meet all requirements before proceeding to the Front Desk.
                </Typography>
            </Box>
            <Box className={classes.grid}>
                <FormGrid />
            </Box>
        </div>
    )
}

import { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Dialog from '../components/Dialog';
// Components
import FormGrid from '../components/FormGrid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            paddingTop: '2%',
            paddingBottom: '1%',
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
        },
        grid: {
            display: 'flex',
            width: '100vw',
            paddingTop: '1%',
            justifyContent: 'center',
        },
        buttonbox: {
            padding: '.5em',
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            alignContent: 'center',
        },
    }),
);

export default function Home () {
    const classes = useStyles();

    const [primary, setPrimary] = useState(false);

    const handlePrimaryOpen = () => {
        setPrimary(true);
    };
    const handlePrimaryClose = () => {
        setPrimary(false);
    };

    const [secondary, setSecondary] = useState(false);

    const handleSecondaryOpen = () => {
        setSecondary(true);
    };
    const handleSecondaryClose = () => {
        setSecondary(false);
    };

    return (
        <div>
            <Box className={classes.header} >
                <Typography variant="h5">
                    Welcome! Please select a form or service.
                </Typography>
            </Box>
            <Box className={classes.header}>
                <Typography variant="h6">
                    Ensure you meet all requirements before proceeding to the Front Desk.
                </Typography>
            </Box>
            <Box className={classes.buttonbox}>
                <Button color="primary" onClick={handlePrimaryOpen}>
                    What is Primary ID?
                </Button>
            </Box>
            <Dialog 
                titleText='Primary ID'
                handleClose={handlePrimaryClose}
                openState={primary}
                confirmText='Continue'
            >
                <Typography variant="body2">
                    <b>Includes any of:</b>
                    <p>Driver's License</p>
                    <p>Passport</p>
                    <p>Canadian Citizenship Card</p>
                    <p>Permanent Resident Card</p>
                    <p>Certification of Indian Status</p>
                    <p>Student ID Card</p>
                    <p>Firearms Acquisition or Possession Certificate(s)</p>
                    <p>Canadian National Institute of the Blind ID Card</p>
                    <p>Federal/Provincial/Municipal ID Card</p>
                    <p/>Military Family ID Card
                </Typography>
            </Dialog>
            <Box className={classes.buttonbox}>
                <Button color="primary" onClick={handleSecondaryOpen}>
                    What is Secondary ID?
                </Button>
            </Box>
            <Dialog 
                titleText='Secondary ID'
                handleClose={handleSecondaryClose}
                openState={secondary}
                confirmText='Continue'
            >
                <Typography variant="body2">
                    <b>Includes any of:</b>
                    <p>Birth Certificate</p>
                    <p>Baptismal Certificate</p>
                    <p>Hunting License</p>
                    <p>Fishing License</p>
                    <p/>Immigration Papers
                </Typography>
            </Dialog>
            <Box className={classes.grid}>
                <FormGrid />
            </Box>
        </div>
    )
}

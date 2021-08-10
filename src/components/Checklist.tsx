import React from 'react'
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    checklistbox: {
        minWidth: '30vw'
    },
    formControl: {
        margin: theme.spacing(3),
    },
})

interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}
  
const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const useStyles = makeStyles(styles);

export type ChecklistProps = {
    checklist: [string],
    openState: boolean,
    handleClose: ()=>void
}

export default function Checklist(props: ChecklistProps) {
    const classes = useStyles();

    const [checklistState, setChecklistState] = useState(props.checklist.map(()=>{
        return false;
    }));

    // function resetChecklistState() {
    //     setChecklistState(props.checklist.map(()=>{
    //         return false;
    //     }))
    // }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newstate = [...checklistState];
        newstate[Number(event.target.name)] = event.target.checked;
        setChecklistState(newstate);
    };

    const error = !checklistState.every(value=>{return value});
    return (
        <div>
            <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.openState}>
            <Box className={classes.checklistbox}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    Pre-Flight Checklist
                </DialogTitle>
                <DialogContent dividers>
                    <FormControl required error={error} component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Requires ALL:</FormLabel>
                        <FormGroup>
                            {props.checklist.map((item, index)=>{
                                return (<FormControlLabel control={<Checkbox checked={checklistState[index]} onChange={handleChange} name={String(index)} />}
                                    label={item}
                                />)
                            })}
                        </FormGroup>
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose} color="primary" disabled={error}>
                    Proceed to Front Counter
                    </Button>
                </DialogActions>
                </Box>
            </Dialog>
        </div>
    )
}

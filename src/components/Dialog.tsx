import { FC } from 'react';

// MUI other
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

// MUI Core
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        content: {
            padding: theme.spacing(2),
            minWidth: '30vw'
        },
        actions: {
            margin: 0,
            padding: theme.spacing(1),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        formControl: {
            margin: theme.spacing(3),
        },
    })
)

interface DialogProps {
    titleText?: string;
    disableTitle?: boolean;
    disableContent?: boolean;
    handleClose: ()=>void;
    openState: boolean;
    error?: boolean;
    confirmText?: string;
}

const Dialog:FC<DialogProps> = (props) => {
    const classes = useStyles();
    return (
        <BaseDialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.openState}>
            {(!props.disableTitle && props.titleText) ? (
                <MuiDialogTitle disableTypography className={classes.root}>
                    <Typography variant="h6">
                        {props.titleText}
                    </Typography>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                </MuiDialogTitle>
            ):null}
            { !props.disableContent ? (
                <MuiDialogContent dividers className={classes.content}>
                    {props.children}
                </MuiDialogContent>
            ) : null}
            <MuiDialogActions className={classes.actions}>
                <Button autoFocus onClick={props.handleClose} color="primary" disabled={props.error}>
                    {props.confirmText || 'Confirm'}
                </Button>
            </MuiDialogActions>
        </BaseDialog>
    )
}

export default Dialog
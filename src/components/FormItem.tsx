import { makeStyles, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


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
    buttonbox: {
        padding: '.5em'
    },
    textbox: {
        padding: '.5em',
        minHeight: '3em',
        maxHeight: '3em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagebox: {
        padding: '1em',
    },
    image: {
        maxWidth: '70%', 
        maxHeight: '70%'
    },
    checklistbox: {
        minWidth: '30vw'
    },
    formControl: {
        margin: theme.spacing(3),
    },
  }),
);

export type FormItemProps = {
    item: {
        title: string,
        content: string,
        imageurl: string,
        checklist: [string]
    }
}

export default function FormItem(props: FormItemProps) {
    const classes = useStyles();

    // Checklist open state
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        resetChecklistState()
        setOpen(false);
    };

    // Checklist completion
    const [checklistState, setChecklistState] = useState(props.item.checklist.map(()=>{
        return false;
    }));

    function resetChecklistState() {
        setChecklistState(props.item.checklist.map(()=>{
            return false;
        }))
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newstate = [...checklistState];
        newstate[Number(event.target.name)] = event.target.checked;
        setChecklistState(newstate);
    };

    const error = !checklistState.every(value=>{return value});

    return (
        <div>
            <Paper className={classes.paper} elevation={5}>
                <Box className={classes.imagebox}>
                    <img src={props.item.imageurl} className={classes.image} alt="" />
                </Box>
                <Typography variant="h6" className={classes.title}>
                    {props.item.title}
                </Typography>
                <Box className={classes.textbox}>
                    <Typography variant="body2">
                        {props.item.content}
                    </Typography>
                </Box>
                <Box className={classes.buttonbox}>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Select
                    </Button>
                </Box>
            </Paper>
            
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <Box className={classes.checklistbox}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Pre-Flight Checklist
                </DialogTitle>
                <DialogContent dividers>
                    <FormControl required error={error} component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Requires ALL:</FormLabel>
                        <FormGroup>
                            {props.item.checklist.map((item, index)=>{
                                return (<FormControlLabel control={<Checkbox checked={checklistState[index]} onChange={handleChange} name={String(index)} />}
                                    label={item}
                                />)
                            })}
                        </FormGroup>
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary" disabled={error}>
                    Proceed to Front Counter
                    </Button>
                </DialogActions>
                </Box>
            </Dialog>
        </div>
    )
}

const styles = (theme: Theme) =>
  createStyles({
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
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
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
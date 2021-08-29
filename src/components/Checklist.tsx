import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';

import Dialog from './Dialog';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(3),
        },
    })
)

export type ChecklistProps = {
    checklist: string[],
    openState: boolean,
    handleClose: ()=>void,
    buttonText?: string
}

export default function Checklist(props: ChecklistProps) {
    const classes = useStyles();

    const blank = props.checklist.map(()=>{
        return false;
    });

    const [checklistState, setChecklistState] = useState(blank);

    const closeAndReset = () => {setChecklistState(blank); props.handleClose();};
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newstate = [...checklistState];
        newstate[Number(event.target.name)] = event.target.checked;
        setChecklistState(newstate);
    };

    const error = !checklistState.every(value=>{return value});
    return (
        <Dialog 
            titleText='Service Checklist'
            handleClose={closeAndReset}
            openState={props.openState}
            error={error}
            confirmText={props.buttonText || 'Proceed to Front Counter'}
            disableTitle={props.checklist.length <= 0}
            disableContent={props.checklist.length <= 0}
        >
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Requires ALL:</FormLabel>
                <FormGroup>
                    {props.checklist.map((item, index)=>{
                        return (
                            <FormControlLabel control={
                                <Checkbox 
                                    checked={checklistState[index]} 
                                    onChange={handleChange} 
                                    name={String(index)} 
                                />
                                }
                                label={item}
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        </Dialog>
    )
}

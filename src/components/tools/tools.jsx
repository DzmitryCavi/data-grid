import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MultipleSelect from './multiplySelect';
import StyledRadio from './radio';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    heading: {
        background: '#137cbd'
    },
    headingText: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Tools(props){
    const classes = useStyles();

    const textChangeHandler = e => {
        props.textFilter(props.data, e.target.value.toLowerCase())
    }

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.heading}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.headingText}>Filters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-full-width"
                            label="Text filter"
                            style={{ margin: 8 }}
                            placeholder=""
                            helperText="Enter a text or number to filter"
                            fullWidth
                            margin="normal"
                            onChange={textChangeHandler}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <MultipleSelect />
                    </Grid>
                    <Grid item xs={1}>
                        <StyledRadio /> 
                    </Grid>
                </ Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        )
}
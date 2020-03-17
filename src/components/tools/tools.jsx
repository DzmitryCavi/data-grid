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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: '60%',
        margin: 'auto !important'
    },
    heading: {
        background: '#137cbd'
    },
    headingText: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: 15
    }
  }));

export default function Tools(props){
    const classes = useStyles();
    const {textFilter, data, multiSelectFilter} = props;
    const textChangeHandler = e => {
        textFilter(data, e.target.value.toLowerCase())
    }

    return (
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.heading}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.headingText}>Filters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={0} alignItems="center">
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
                    <Grid item xs={3} >
                        <Button variant="outlined" color="secondary" className={classes.button} onClick={()=>{textFilter(data, '')}}>Delete All Filters</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledRadio filter={textFilter} data={data}/> 
                    </Grid>
                    <Grid item xs={2}>
                        <MultipleSelect filter={multiSelectFilter} data={data}/>
                    </Grid>
                </ Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        )
}
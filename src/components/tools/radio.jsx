import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  group: {
    'flex-wrap': 'inherit',
    'flex-direction': 'row',
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios(props) {
  const classes = useStyles();
  const {data, filter} = props;
  const changeHandler = e =>{
    e.target.value === 'All' ? filter(data, '') : filter(data, e.target.value);
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Metalicity Raito</FormLabel>
      <RadioGroup
        className={classes.group}
        defaultValue="All"
        aria-label="Metalicity"
        name="customized-radios"
        onChange={changeHandler}
      >
        <FormControlLabel value="All" control={<StyledRadio />} label="All" />
        <FormControlLabel
          value="[Fe/H]"
          control={<StyledRadio />}
          label="[Fe/H]"
        />
        <FormControlLabel value="[m/H]" control={<StyledRadio />} label="[m/H]" />
      </RadioGroup>
    </FormControl>
  );
}

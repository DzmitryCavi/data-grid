import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  select: {
      height: 40
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    }
  }
};

const values = [
  "Transit Timing Variations",
  "Radial Velocity",
  "Imaging"
];

function getStyles(value, currentValue, theme) {
  return {
    fontWeight:
      currentValue.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [currentValue, setCurrentValue] = React.useState([]);

  const handleChange = event => {
    console.log(event.target.value);
    setCurrentValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-discovery-label">Discovery Method</InputLabel>
        <Select
          labelId="mutiple-discovery-label"
          id="mutiple-discovery"
          className={classes.select}
          multiple
          value={currentValue}
          onChange={handleChange}
          input={<Input id="select-multiple-discovery" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {values.map(value => (
            <MenuItem
              key={value}
              value={value}
              style={getStyles(value, currentValue, theme)}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

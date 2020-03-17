import React , {Component}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Select from "@material-ui/core/Select";

export default class MultipleSelect extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentValue: []
    }
  }

  
  handleChange = event => {
    this.setState({currentValue: event.target.value}, ()=>{this.props.filter(this.props.data, this.state.currentValue)});
  };
    
render(){
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
    "Imaging",
    "Orbital Brightness Modulation",
    "Transit"
  ];
 

  return (
    <div>
      <FormControl style = {{minWidth: 300, maxWidth: 400}}>
        <InputLabel id="mutiple-checkbox-label">Discovery</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={this.state.currentValue}
          onChange={this.handleChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {values.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={this.state.currentValue.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
  
}

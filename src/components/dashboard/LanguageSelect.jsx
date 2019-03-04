import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  select: {
    margin: 10,
    color: 'inherit',
  },
  icon: {
    fill: 'white',
  },
  underline: {
  },
};
const LanguageSelect = (props) => {
  const {
    classes,
    languages,
    name,
    id,
    updateLanguage,
    value,
  } = props;
  let menuItems;
  menuItems = languages.map((language) => <MenuItem key={language.code} value={language.code}>{language.name}</MenuItem>);


  return (
    <Select
      input={ <Input classes={{ underline: classes.underline }}/> }
      inputProps = {{
        name: name,
        id: id,
        classes: {
          icon: classes.icon,
          underline: classes.underline,
        }
      }}
      className={classes.select}
      value={value}
      onChange={updateLanguage}
    >
      {menuItems && menuItems}
    </Select>
  );
}

export default withStyles(styles)(LanguageSelect);
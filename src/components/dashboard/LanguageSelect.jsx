import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  select: {
    margin: 10,
  }
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
      inputProps = {{
        name: name,
        id: id,
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
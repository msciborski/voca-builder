import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {

};
const LanguageSelect = (props) => {
  const {
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
      value={value}
      onChange={updateLanguage}
    >
      {menuItems && menuItems}
    </Select>
    // <form autoComplete="false" className={classes.root}>
    //   <FormControl className={classes.formControl}>
    //     <Select
    //       inputProps = {{
    //         name: 'sourcelanguage',
    //         id: 'source-language',
    //       }}
    //       >
    //         {menuItems}
    //       </Select>
    //       <Select
    //         inputProps= {{
    //           name: 'destinationLanguage',
    //           id: 'destination-language',
    //         }}
    //       >
    //         {menuItems}
    //       </Select>
    //   </FormControl>
    // </form>
  );
}

export default withStyles(styles)(LanguageSelect);
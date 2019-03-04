import React from "react";
import { FormControl } from "@material-ui/core";
import LanguageSelect from "./LanguageSelect.jsx";
import { withStyles} from "@material-ui/styles";

const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: 'auto',
  },
  formControl: {
    minWidth: 100,
    display: 'flex',
    flexDirection: 'row',
  },
});

const LanguageForm = (props) => {
  const {
    languages,
    classes,
    sourceName,
    destinationName,
    sourceId,
    destinationId,
    updateLanguage,
    sourceValue,
    destinationValue,
  } = props;

  return (
    <form className={classes.root}>
      <FormControl className={classes.formControl}>
        <LanguageSelect
          languages={languages}
          value={sourceValue}
          name={sourceName}
          id={sourceId}
          updateLanguage={updateLanguage}
          />
        <LanguageSelect
          languages={languages}
          value={destinationValue}
          name={destinationName}
          id={destinationId}
          updateLanguage={updateLanguage}
         />
      </FormControl>
    </form>
  )
}

export default withStyles(styles)(LanguageForm);
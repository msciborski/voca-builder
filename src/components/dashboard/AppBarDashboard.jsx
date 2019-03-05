import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import LanguageForm from "./LanguageForm.jsx";
import { withStyles } from "@material-ui/styles";

const style = theme => ({
  root: {
    backgroundColor: theme.pallete.primary,
  }
});

const AppBarDashboard = (props) => {
  const {
    languages,
    updateLanguage,
    sourceValue,
    destinationValue,
    classes,
  } = props;

  return (
    <div className>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Voca-builder
          </Typography>
          <LanguageForm
            languages={languages}
            sourceName='sourceLanguage'
            destinationName='destinationLanguage'
            sourceId='sourceLanguage'
            destinationId='destinationLanguage'
            sourceValue={sourceValue}
            destinationValue={destinationValue}
            updateLanguage={updateLanguage}
             />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(style)(AppBarDashboard);


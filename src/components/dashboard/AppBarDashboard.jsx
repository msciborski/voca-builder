import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import LanguageForm from "./LanguageForm.jsx";


const AppBarDashboard = (props) => {
  const {
    languages,
    updateLanguage,
    sourceValue,
    destinationValue,
  } = props;

  console.log('AppBarDashboard')
  console.log(languages);
  return (
    <div className>
      <AppBar position="static">
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

export default AppBarDashboard;


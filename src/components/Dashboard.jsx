import React from "react";
import { memoServices } from '../services/memoServices';
import { utilsService } from "../services/utilsService";
import { userService } from "../services/userServices";
import AppBarDashboard from "./dashboard/AppBarDashboard.jsx";
import MemoList from "./dashboard/MemoList.jsx";
import { Grid } from "@material-ui/core";

class Dashboard extends React.Component {
  constructor() {
    super();
    const { _id, sourceLanguage, destinationLanguage } = JSON.parse(localStorage.getItem('user'));
    this.state = {
      userId: _id,
      sourceLanguage,
      destinationLanguage,
      languages: null,
      memos: null,
    };
  }

  componentDidMount() {
    this.loadMemos();
    this.loadLanguages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sourceLanguage, destinationLanguage, userId } = this.state;
    userService.updateUser(userId, { sourceLanguage, destinationLanguage }).catch(error => alert(error));


  }

  loadLanguages = () => {
    console.log('Load languages');
    utilsService.getLanguages().then(response => {
      console.log(response);
      this.setState({ languages: response.data });
    });
  }

  updateLanguage = (event) => {
    console.log(`Update language: ${event.target.name}, ${event.target.value}`);
    this.setState({ [event.target.name]: event.target.value });
  }
  loadMemos = () => {
    const { userId } = this.state;
    memoServices.getLastMemos(userId).then(response => {
      this.setState({ memos: response.data });
    });
  }

  render() {
    const { languages, sourceLanguage, destinationLanguage, memos } = this.state;

    return (
      <Grid container>
        <Grid item xs="12">
          {
            languages &&
            <AppBarDashboard
              languages={languages}
              updateLanguage={this.updateLanguage}
              sourceValue={sourceLanguage}
              destinationValue={destinationLanguage}
            />
          }
        </Grid>
        <Grid item xs="12">
          {
            memos && <MemoList memos={memos} />
          }
        </Grid>
      </Grid>


    );
  }
}


export default Dashboard;
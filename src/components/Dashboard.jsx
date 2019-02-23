import React, { Component } from "react";
import {memoServices} from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
        userId: null,
        memos: null
    };

    //TODO it shoudn't be here
    chrome.identity.getProfileUserInfo((userInfo) => {
      this.setState({ userId: userInfo.id });
    });
  }

  componentDidMount() {
    this.loadMemos();
  }

  loadMemos = () => {
    const { userId } = this.state;
    let memos = memoServices.getMemos( userId );
    this.setState({ memos: memos });
  }

  render() {
    const { memos } = this.state;
    let memosRows;

    if( memos ){
      memosRows = memos.map((memo) =>
          <tr>
            <td>{memo.sourceWord}</td>
            <td>{memo.translatedWord}</td>
            <td>{memo.isLearned && "yeap"}</td>
          </tr>
      );
    } else {
      memosRows = "Loading";
    }


    return (
        <div className="memos-list">
              <table className="responsive-table striped">
                <thead>
                  <tr>
                      <th>Source word</th>
                      <th>Translated word</th>
                      <th>Is learned</th>
                  </tr>
                </thead>
                <tbody>
                  {memosRows}
                </tbody>
              </table>
        </div>
    );
  }
}


export default Dashboard;
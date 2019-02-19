import React, { Component } from "react";
import {memoServices} from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
        userId: null,
        memos: []
    };
    this.loadMemos = this.loadMemos.bind(this);

    //TODO it shoudn't be here
    chrome.identity.getProfileUserInfo((userInfo) => {
      this.setState({ userId: userInfo.id });
    });
  }

  loadMemos() {
    const { userId } = this.state;
    let memos = memoServices.getMemos( userId );
    this.setState({ memos: memos });
  }
  
  render() {
    const { memos } = this.state;

    const memosRows = memos.map((memo) =>
        <tr>
          <td>{memo.sourceWord}</td>
          <td>{memo.translatedWord}</td>
          <td>{memo.isLearned && "yeap"}</td>
        </tr>
    );

    return (
        <div className="memos-list">
              <button onClick={this.loadMemos} className="waves-effect waves-light btn blue darken-4"><i className="material-icons left">cloud</i>Load memos</button>
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
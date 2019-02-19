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

    const memosItems = memos.map((memo) =>
        <li>{memo.sourceWord} => {memo.translatedWord} {memo.isLearned && "(learned)"}</li>
    );

    return (
        <div className="memos-list">
            <button onClick={this.loadMemos}>Load memos</button>

            <ul>
                {memosItems}
            </ul>
        </div>
    );
  }
}


export default Dashboard;
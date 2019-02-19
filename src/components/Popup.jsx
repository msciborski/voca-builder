import React, { Component } from "react";
import {memoServices} from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
        userId: null,
        memos: null
    };
    this.loadMemos = this.loadMemos.bind(this);

    //TODO it shoudn't be here
    chrome.identity.getProfileUserInfo((userInfo) => {
      this.setState({ userId: userInfo.id });
    });
  }

  componentDidMount() {
    this.loadMemos();
  }

  loadMemos() {
    const { userId } = this.state;
    let memos = memoServices.getLastMemos( userId );
    this.setState({ memos: memos });
  }
  
  render() {
    const { memos } = this.state;
    let memosRows;

    if( memos ){
      memosRows = memos.map((memo) =>
          <li className="collection-item">{memo.sourceWord} => {memo.translatedWord}</li>
      );
    } else {
      memosRows = "Loading";
    }
    

    return (
        <div className="memos-list">
              <button className="btn">Open dashboard</button>
              <hr/>
              <h4>Last memos:</h4>
              <ul class="collection">
                {memosRows}
              </ul>
        </div>
    );
  }
}


export default Dashboard;
import React, { Component } from "react";
import {memoServices} from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.state = {
        userId: _id,
        memos: null,
    };
  }

  componentDidMount() {
    this.loadMemos();
  }

  loadMemos = () => {
    const { userId } = this.state;
    memoServices.getLastMemos(userId).then(response => {
      this.setState({ memos: response.data });
    });
  }

  render() {
    const { memos } = this.state;
    let memosRows;

    if (memos){
      memosRows = memos.map((memo) =>
          <li key={memo._id} className="collection-item">{memo.sourceWord} => {memo.translatedWord}</li>
      );
    } else {
      memosRows = "Loading";
    }


    return (
        <div className="memos-list">
              <button className="btn">Open dashboard</button>
              <hr/>
              <h4>Last memos:</h4>
              <ul className="collection">
                {memosRows}
              </ul>
        </div>
    );
  }
}

export default Dashboard;
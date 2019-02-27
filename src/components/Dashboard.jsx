import React, { Component } from "react";
import {memoServices} from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.state = {
        userId: _id,
        memos: null
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
                  <th><strong>Source word</strong></th>
                  <th><strong>Translated word</strong></th>
                  <th><strong>Is learned</strong></th>
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
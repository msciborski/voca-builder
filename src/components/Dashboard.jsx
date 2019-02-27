import React, { Component } from "react";
import DashboardNavbar from "./dashboard/DashboardNavbar.jsx";
import { memoServices } from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    const { _id, sourceLanguage, destinationLanguage } = JSON.parse(localStorage.getItem('user'));
    console.log(_id);
=======
    const { _id } = JSON.parse(localStorage.getItem('user'));
>>>>>>> origin/master
    this.state = {
        userId: _id,
        sourceLanguage,
        destinationLanguage,
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
    // const { memos } = this.state;
    // let memosRows;

    // if( memos ){
    //   memosRows = memos.map((memo) =>
    //       <tr>
    //         <td>{memo.sourceWord}</td>
    //         <td>{memo.translatedWord}</td>
    //         <td>{memo.isLearned && "yeap"}</td>
    //       </tr>
    //   );
    // } else {
    //   memosRows = "Loading";
    // }


    return (
<<<<<<< HEAD
      <DashboardNavbar brand="Voca-builder" />
        // <div className="memos-list">
        //       <table className="responsive-table striped">
        //         <thead>
        //           <tr>
        //               <th>Source word</th>
        //               <th>Translated word</th>
        //               <th>Is learned</th>
        //           </tr>
        //         </thead>
        //         <tbody>
        //           {memosRows}
        //         </tbody>
        //       </table>
        // </div>
=======
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
>>>>>>> origin/master
    );
  }
}


export default Dashboard;
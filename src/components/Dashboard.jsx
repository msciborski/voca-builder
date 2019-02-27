import React, { Component } from "react";
import DashboardNavbar from "./dashboard/DashboardNavbar.jsx";
import { memoServices } from '../services/memoServices';

class Dashboard extends Component {
  constructor() {
    super();
    const { _id, sourceLanguage, destinationLanguage } = JSON.parse(localStorage.getItem('user'));
    console.log(_id);
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
    let memos = memoServices.getMemos(_id);
    this.setState({ memos: memos });
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
    );
  }
}


export default Dashboard;
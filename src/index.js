import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./components/Input.jsx";
console.log('test');
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
        memos: []
    };
    this.loadMemos = this.loadMemos.bind(this);
  }

  loadMemos() {
    let memos = [
        {
            sourceWord: "dog",
            translatedWord: "pies",
            isLearned: false,
        },
        {
            sourceWord: "sth",
            translatedWord: "sthelse",
            isLearned: false,
        },
        {
            sourceWord: "something",
            translatedWord: "elsething",
            isLearned: true,
        }
    ];

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

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
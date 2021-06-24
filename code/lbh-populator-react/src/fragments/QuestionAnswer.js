import React, { Component } from "react";
//import Translate from "react-translate-component";
import counterpart from "counterpart";

class QuestionAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onButtonClickHandler: props.buttonClicked,
      quizQuestion: "",
      quizAnswer: "",
    };
  }

  add() {
    //console.log("adding qa..");
    //console.log(this);
    if (
      this.state.quizQuestion.trim() === "" &&
      this.state.quizAnswer.trim() === ""
    ) {
      alert("empty question and answer");
      return;
    }
    let q = this.state.quizQuestion
      .replace(/[\n\r]/g, "~~")
      .replace(/[|]/g, ":");
    let a = this.state.quizAnswer.replace(/[\n\r]/g, "~~").replace(/[|]/g, ":");
    this.state.onButtonClickHandler(`${q}|${a}`);
    this.setState({ quizQuestion: "", quizAnswer: "" });
    //return false;
  }

  render() {
    const placeholderQ = counterpart.translate("placeholderQ");
    const placeholderA = counterpart.translate("placeholderA");
    const addCard = counterpart.translate("addCard");
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <textarea
                name="q"
                cols="40"
                rows="15"
                placeholder={placeholderQ}
                //defaultValue={this.state.quizQuestion}
                value={this.state.quizQuestion}
                onChange={(e) =>
                  this.setState({ quizQuestion: e.target.value })
                }
              ></textarea>
            </td>
            <td>
              <textarea
                name="a"
                cols="40"
                rows="15"
                placeholder={placeholderA}
                //defaultValue={this.state.quizAnswer}
                value={this.state.quizAnswer}
                onChange={(e) => this.setState({ quizAnswer: e.target.value })}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={() => this.add()}>{addCard}</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default QuestionAnswer;

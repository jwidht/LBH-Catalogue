import React, { Component } from "react";
import Translate from "react-translate-component";
import counterpart from "counterpart";

class QuizProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onButtonClickHandler: props.buttonClicked,
      quizName: "My Quiz",
      quizQuestionFontsize: "40",
      quizAnswerFontsize: "35",
      quizQuestionCode: "en-US",
      quizAnswerCode: "ru-RU",
      isButtonDisabled: false,
    };
  }

  addProperties() {
    //console.log("adding props..");
    //console.log(this);
    this.state.onButtonClickHandler(
      `quiz.properties|name=${this.state.quizName}~~q_lang=${this.state.quizQuestionCode}~~a_lang=${this.state.quizAnswerCode}~~fontsize_q=${this.state.quizQuestionFontsize}~~fontsize_a=${this.state.quizAnswerCode}`
    );
    this.setState({ isButtonDisabled: true });
    return false;
  }

  render() {
    return (
      <div>
        {/* <form id="populator_prop"> */}
        <table>
          <tbody>
            <tr>
              <td>
                <Translate content="quizName" />
              </td>
              <td>
                <input
                  type="text"
                  name="quizname"
                  defaultValue={this.state.quizName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate content="quizQuestionFontsize" />
              </td>
              <td>
                <input
                  name="qfont"
                  defaultValue={this.state.quizQuestionFontsize}
                  type="number"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate content="quizAnswerFontsize" />
              </td>
              <td>
                <input
                  name="afont"
                  defaultValue={this.state.quizAnswerFontsize}
                  type="number"
                  //onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate content="quizQuestionCode" />
              </td>
              <td>
                <input
                  type="text"
                  name="qlang"
                  defaultValue={this.state.quizQuestionCode}
                />
                <a href="langcodes.html" target="_blank">
                  Lookup
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <Translate content="quizAnswerCode" />
              </td>
              <td>
                <input
                  type="text"
                  qfont=""
                  name="alang"
                  defaultValue={this.state.quizAnswerCode}
                />
                <a href="langcodes.html" target="_blank">
                  Lookup
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <button id="props" onClick={this.addProperties.bind(this)}>
          add
        </button> */}
        <button
          id="props2"
          onClick={() => this.addProperties()}
          disabled={this.state.isButtonDisabled}
        >
          {counterpart.translate("addProperties")}
        </button>

        {/* </form> */}
      </div>
    );
  }
}

export default QuizProps;

import React, { Component } from "react";
import "./App.css";

import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "./lang/en";
import ru from "./lang/ru";

import Tabs from "./components/Tabs";

import QuizProps from "./fragments/QuizProps";
import QuestionAnswer from "./fragments/QuestionAnswer";
//import FileContent from "./fragments/FileContent";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ru", ru);

counterpart.setLocale("en");

// const Link = (props) => {
//   return (
//     <Translate
//       content={props.content}
//       component="a"
//       href={props.address}
//       target="_blank"
//     />
//   );
// };

class App extends Component {
  state = {
    lang: "en",
    fileContent: "",
  };

  onLangChange = (e) => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  buttonClicked = (string2add) => {
    //console.log(`App: buttonClicked: ${string2add}`);
    this.setState({
      fileContent: `${string2add}\r\n${this.state.fileContent}`,
    });
  };

  copyFileToClipboard = (string2add) => {
    document.getElementById("filecontent").select();
    document.execCommand("copy");
  };

  render() {
    //const link = <Link content="link" address="http://google.com" />;

    const how2use = counterpart.translate("how2use");
    const quizProps = counterpart.translate("quizProps");
    const q_a = counterpart.translate("qa");

    return (
      <div className="App">
        <b>{counterpart.translate("title")}</b>
        &nbsp;
        <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        <Tabs>
          <div label={how2use}>
            {/* {counterpart.translate("instructions")} */}
            <Translate content="instructions" component="p" unsafe={true} />
          </div>
          <div label={quizProps}>
            <QuizProps buttonClicked={this.buttonClicked} />
          </div>
          <div label={q_a}>
            <QuestionAnswer buttonClicked={this.buttonClicked} />
          </div>
        </Tabs>
        {/* <Translate content="copy.p2" component="p" with={{ link }} />

        <Translate
          component="input"
          type="text"
          attributes={{ placeholder: "placeholder" }}
        /> */}
        <hr />
        <button onClick={() => this.copyFileToClipboard()}>
          {counterpart.translate("copyFileToClipboard")}
        </button>
        <br />
        <br />
        <textarea
          id="filecontent"
          cols="100"
          rows="15"
          style={{
            whiteSpace: "nowrap",
            overflow: "auto",
            placeholder: "The file content will appear here",
          }}
          value={this.state.fileContent}
          onChange={(e) => this.setState({ fileContent: e.target.value })}
        ></textarea>
      </div>
    );
  }
}

export default App;

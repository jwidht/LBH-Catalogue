import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClickIndex, index } = this.props; //onClick,
    //onClick(label);
    onClickIndex(label, index); //jw
  };

  render() {
    const {
      onClick,
      //onClickIndex,
      props: {
        //activeTab,
        activeTabIndex,
        label,
        index, //jw
        //onClickIndex,//
      },
    } = this;

    let className = "tab-list-item";

    //if (activeTab === label) {
    if (activeTabIndex === index) {
      className += " tab-list-active";
      return <li className={className}>{label}</li>;
    } else
      return (
        <li
          className={className}
          onClick={onClick}
          //onClick={onClickIndex}
          style={{ cursor: "pointer" }}
        >
          {label}
        </li>
      );
  }
}

export default Tab;

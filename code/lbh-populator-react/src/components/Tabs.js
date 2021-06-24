import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';


class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label, //active tab label
        activeTabIndex : 0, //jw
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }

    onClickTabItemIndex = (tab, index) => { //JW
      this.setState({ activeTab: tab , activeTabIndex : index  });
    }

    render() {
        const { onClickTabItem, onClickTabItemIndex, props: { children, }, state: { activeTab, activeTabIndex }  } = this;

        return (
          <div className="tabs">
            <ol className="tab-list">
              {children.map((child, index) => {
                const { label } = child.props;
    
                return (
                  <Tab
                    activeTab={activeTab}
                    activeTabIndex={activeTabIndex}
                    key={label}
                    label={label}
                    onClick={ onClickTabItem }
                    onClickIndex = { onClickTabItemIndex } //jw
                    index = {index}
                  />
                );
              })}
            </ol>

            <div className="tab-content">
              {children.map((child) => {
                //if (child.props.label !== activeTab) return undefined;
                //console.log(child.props)
                //console.log(activeTabIndex)
                //console.log(children.indexOf(child))
                if (children.indexOf(child) !== activeTabIndex) return undefined;
                return child.props.children;
              })}
            </div>

          </div>
        );
      }
}

export default Tabs;
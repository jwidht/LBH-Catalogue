(this["webpackJsonplbh-web"]=this["webpackJsonplbh-web"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i),s=n(18),a=n.n(s),u=(n(23),n(3)),c=n(4),l=n(6),o=n(5),h=(n(24),n(25),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).buttonClicked=function(t){i.setState((function(e,n){return{currentOffset:Math.max(1,e.currentOffset+t)}}))},i.state={currentOffset:5,labelFormatString:t.labelFormatString,onNextTimeSelected:t.onNextTimeSelected},i}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"buttonContainer",children:[Object(h.jsx)("button",{onClick:function(){return t.buttonClicked(-5)},children:"<<"}),Object(h.jsx)("button",{onClick:function(){return t.buttonClicked(-1)},children:"<"}),Object(h.jsx)("button",{onClick:function(){return t.state.onNextTimeSelected(t.state.currentOffset)},children:this.state.labelFormatString.replace("%d",this.state.currentOffset)}),Object(h.jsx)("button",{onClick:function(){return t.buttonClicked(1)},children:">"}),Object(h.jsx)("button",{onClick:function(){return t.buttonClicked(5)},children:">>"})]})}}]),n}(i.Component),f=(n(27),function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={isVisible:!1},console.log(i.props),i}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"CardDisplayArea",children:[Object(h.jsx)("div",{className:"CardQuestion display-linebreak",children:this.props.currentQuizItem.question}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"CardAnswer display-linebreak",children:[!this.props.isAnswerVisible&&Object(h.jsx)("button",{onClick:function(){return t.props.showA(!t.props.isAnswerVisible)},children:"Answer"}),this.props.isAnswerVisible&&this.props.currentQuizItem.answer]})]})}}]),n}(i.Component)),b=n(7),m=n(8),j=n.n(m),v=function(t){return 0!==t.trim().length&&t.indexOf("quiz.properties")<0},g=function(t){return 0!==t.trim().length&&t.indexOf(".htm")<0&&t.indexOf("|")>=0},p=function(t){return 0!==t.trim().length&&t.indexOf(".htm")<0&&t.indexOf("|")>=0},O=function(t){return{question:t[0].trim().replace(/~~/g,"\n"),answer:t[1].trim().replace(/~~/g,"\n")}},x=function(t){return{name:t[0].trim(),url:t[1].trim()}},I=function(t){return{pairName:t[0].trim(),fileQuizList:t[1].trim()}},C=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"|",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"\n",s=t.split(r),a=(s=(s=s.filter(e)).filter((function(t){return t.indexOf(i)>=0}))).map((function(t){var e=t.split(i);return n(e)}));return a},z=function(t,e){return C(e,v,O,function(t){var e=t.toLocaleLowerCase();return e.indexOf(".psv.")>=0?"|":e.indexOf(".csv.")>=0?",":(console.log("File name does not appear to be CSV or PSV, assuming PSV"),"|")}(t))},w=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={languagePairs:[],quizListUrl:"",quizList:[],fileUrl:"https://raw.githubusercontent.com/jwidht/En-US_Ru-RU/master/Animals.psv.txt",items:[],loading:!0},i.langPairChanged.bind(Object(b.a)(i)),i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.populateLanguagePairs()}},{key:"populateLanguagePairs",value:function(){var t=this;j.a.get("https://raw.githubusercontent.com/jwidht/LBH-Catalogue/master/bylanguage.psv.txt").then((function(e){if(200===e.status){var n,i=(n=e.data,C(n,p,I));t.setState({languagePairs:i})}else alert("Error loading file from this url")})).catch((function(t){console.log(t),alert(t)}))}},{key:"quizChanged",value:function(t){var e=this;if("0"!==t.target.value){var n=t.target.value;console.log("loading "+n),this.setState({fileUrl:n}),j.a.get(n).then((function(t){if(200===t.status){var i=z(n,t.data);e.props.onContentLoaded(i)}else alert("Error loading file from this url")})).catch((function(t){console.log(t),alert(t)}))}}},{key:"langPairChanged",value:function(t){var e=this;if("0"!==t.target.value){var n="https://raw.githubusercontent.com/jwidht/LBH-Catalogue/master/"+t.target.value;this.setState({quizListUrl:n}),j.a.get(n).then((function(t){if(200===t.status){var n,i=(n=t.data,C(n,g,x));e.setState({quizList:i})}else alert("Error loading quizListUrl file from this url")})).catch((function(t){console.log(t),alert(t)}))}}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{style:{padding:5},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Select flashcard front and back languages:"}),Object(h.jsxs)("select",{onChange:function(e){return t.langPairChanged(e)},children:[Object(h.jsx)("option",{value:0,children:"- Select -"},-1),this.state.languagePairs.map((function(t){return Object(h.jsx)("option",{value:t.fileQuizList,children:t.pairName},t.pairName)}))]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Select flashcard set:"}),Object(h.jsxs)("select",{onChange:function(e){return t.quizChanged(e)},children:[Object(h.jsx)("option",{value:0,children:"- Select -"},-1),this.state.quizList.map((function(t){return Object(h.jsx)("option",{value:t.url,children:t.name},t.name)}))]})]})]})}}]),n}(i.Component),Q=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={QuizItems:[],currentQuizItemIndex:0,currentQuizItemCount:0,currentQuizItem:{question:"",answer:""},isAnswerVisible:!1,isReady:!1},i}return Object(c.a)(n,[{key:"onShowInNCards",value:function(t){this.setState({isAnswerVisible:!1}),function(t,e,n){if(!(t.length<2)){var i=t.length-1,r=t[e];t.splice(e,1),t.splice(Math.min(n,i),0,r)}}(this.state.QuizItems,this.state.currentQuizItemIndex,this.state.currentQuizItemIndex+t);var e=this.state.currentQuizItemIndex,n=this.state.QuizItems.length-1,i=Math.min(e,n);this.recalculateVisuals(i)}},{key:"buttonIKnowClicked",value:function(){if(0!==this.state.QuizItems.length){this.state.QuizItems.splice(this.state.currentQuizItemIndex,1);var t=this.state.QuizItems.length-1;if(this.state.currentQuizItemIndex>t)return this.setState({isReady:!1}),void alert("No more items left");this.recalculateVisuals(this.state.currentQuizItemIndex)}else alert("No items to study")}},{key:"recalculateVisuals",value:function(t){this.setState({currentQuizItemIndex:t,currentQuizItem:this.state.QuizItems[t],currentQuizItemCount:this.state.QuizItems.length,isAnswerVisible:!1,isReady:this.state.QuizItems.length>0})}},{key:"onShowInNDays",value:function(t){}},{key:"showA",value:function(t){this.setState({isAnswerVisible:t})}},{key:"onContentLoaded",value:function(t){this.setState({QuizItems:t}),this.recalculateVisuals(0)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"entireScreen",children:[Object(h.jsxs)("div",{className:"ControlPanel",children:[Object(h.jsxs)("div",{className:"ControlPanelTop",children:[Object(h.jsx)("h1",{className:"AppHeader",children:"LBH-Web Flashcards"}),Object(h.jsx)(w,{onContentLoaded:function(e){return t.onContentLoaded(e)}})]}),Object(h.jsxs)("div",{className:"Toolbar"+(this.state.isReady?"":" disabledDiv"),children:[Object(h.jsxs)("div",{className:"CardNumber",children:["Cards left: ",this.state.currentQuizItemCount]}),Object(h.jsx)(d,{labelFormatString:"In %d Cards",onNextTimeSelected:function(e){return t.onShowInNCards(e)}}),Object(h.jsx)("button",{onClick:function(){return t.buttonIKnowClicked()},children:"I KNOW, DON'T SHOW AGAIN"})]})]}),Object(h.jsx)(f,{currentQuizItem:this.state.currentQuizItem,currentQuizItemIndex:this.state.currentQuizItemIndex,currentQuizItemCount:this.state.currentQuizItemCount,isAnswerVisible:this.state.isAnswerVisible,showA:function(e){return t.showA(e)}})]})}}]),n}(i.Component);a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.60d74742.chunk.js.map
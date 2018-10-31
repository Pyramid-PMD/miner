(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1093:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(8),s=n(198);var c=class extends o.Component{constructor(...e){var t;return t=super(...e),this.state={copied:!1},this.onCopy=(()=>{this.setState({copied:!0}),setTimeout(()=>{this.setState({copied:!1})},2e3)}),t}render(){const{address:e,balance:t}=this.props;return a.a.createElement(r.a,null,n=>a.a.createElement("section",{className:"wallet has-separator margin-bottom-16"},a.a.createElement("ul",{className:"list-unstyled"},a.a.createElement("li",null,a.a.createElement("h2",{className:"text-secondary text-small"},n("dashboard:transaction.walletAddress")),a.a.createElement("div",{className:"d-flex justify-content-between align-items-center text-secondary"},a.a.createElement("p",null,e),a.a.createElement(s.CopyToClipboard,{text:e,className:"btn btn-link",onCopy:this.onCopy},a.a.createElement("p",null,n("common:interface.copy")))),this.state.copied?a.a.createElement("p",null,n("common:interface.copiedToCB")):null),a.a.createElement("li",null,a.a.createElement("h2",{className:"text-secondary text-small"},n("dashboard:transaction.balance")),a.a.createElement("p",null,a.a.createElement("span",{className:"number number-big margin-right-4"},t),a.a.createElement("span",{className:"text-small"},"PMD"))))))}},l=n(202),i=n(201),p=n(12),u=n(55),d=n(37);t.default=Object(p.connect)(e=>({address:u.TransactionSelectors.selectWalletAddress(e),balance:u.TransactionSelectors.selectBalance(e),transactionHistory:u.TransactionSelectors.selectHistory(e)}),e=>({getTransaction:()=>e(u.default.transactionRequest()),sendTransaction:(t,n)=>e(d.default.sendTransactionRequest(t,n))}))(class extends o.Component{componentDidMount(){this.props.getTransaction()}render(){return a.a.createElement("div",null,a.a.createElement(c,{address:this.props.address,balance:this.props.balance}),a.a.createElement(l.a,{form:"transactionForm",transactionType:"inner",sendTransaction:this.props.sendTransaction}),a.a.createElement(i.a,{transactionHistory:this.props.transactionHistory}))}})},198:function(e,t,n){"use strict";var o=n(537).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n(1)),s=c(n(538));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=Array(a),i=0;i<a;i++)c[i]=arguments[i];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.onClick=function(e){var t=o.props,n=t.text,a=t.onCopy,c=t.children,l=t.options,i=r.default.Children.only(c),p=(0,s.default)(n,l);a&&a(n,p),i&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e)},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.PureComponent),a(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["text","onCopy","options","children"]),a=r.default.Children.only(t);return r.default.cloneElement(a,o({},n,{onClick:this.onClick}))}}]),t}()).defaultProps={onCopy:void 0,options:void 0}},538:function(e,t,n){"use strict";var o=n(539),a="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,r,s,c,l,i,p=!1;t||(t={}),n=t.debug||!1;try{if(s=o(),c=document.createRange(),l=document.getSelection(),(i=document.createElement("span")).textContent=e,i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",document.body.appendChild(i),c.selectNode(i),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),p=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:a),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),i&&document.body.removeChild(i),s()}return p}},539:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);
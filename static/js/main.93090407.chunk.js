(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),a=r(2),n=r(3),c=r(5),i=r(4),u=r(1),l=r.n(u),o=r(7),j=r.n(o),d=(r(14),r(0)),h=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={value:null},s}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsx)("button",{className:"square",onClick:function(){e.props.onClick()},children:this.props.value})}}]),r}(l.a.Component),b=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},s}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(h,{value:this.state.squares[e],onClick:function(){t.handleClick(e)}})}},{key:"render",value:function(){var e,t=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],c=a[1],i=a[2];if(e[n]&&e[n]===e[c]&&e[n]===e[i])return e[n]}return null}(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"status",children:e}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),v=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(b,{})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{}),Object(d.jsx)("ol",{})]})]})}}]),r}(l.a.Component);j.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.93090407.chunk.js.map
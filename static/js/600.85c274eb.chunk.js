"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[600],{911:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.children,n=e.className;return(0,r.jsx)("ul",{className:n,children:t})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},600:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(433),i=n(439),a=n(791),c=n(38),s=n(87),o=n(689),u=n(373),l=n(911),h="SearchForm_input__HOxJo",m="SearchForm_button__UXY06",f=n(184),d=function(e){var t=e.handleSubmit;return(0,f.jsxs)("form",{onSubmit:t,children:[(0,f.jsx)("input",{name:"movie",type:"text",autoFocus:!0,placeholder:"Movie title",className:h}),(0,f.jsx)("button",{type:"submit",className:m,children:"Search"})]})},j=function(){var e,t=(0,s.lr)(),n=(0,i.Z)(t,2),h=n[0],m=n[1],j=(0,a.useState)(null!==(e=h.get("search"))&&void 0!==e?e:""),v=(0,i.Z)(j,2),Z=v[0],x=v[1],p=(0,a.useState)(!1),_=(0,i.Z)(p,2),I=_[0],g=_[1],N=(0,a.useState)(!1),S=(0,i.Z)(N,2),b=S[0],y=S[1],J=(0,a.useState)([]),M=(0,i.Z)(J,2),T=M[0],k=M[1],z=(0,o.TH)();(0,a.useEffect)((function(){""!==Z&&(g(!0),y(!1),(0,c.Z)("search/movie?query=".concat(Z)).then((function(e){var t=e.results;k((0,r.Z)(t))})).catch((function(){return y(!0)})).finally((function(){return g(!1)})))}),[Z]);var O=T.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)("li",{className:"list_item",children:(0,f.jsx)(s.OL,{to:"/movies/".concat(t),state:{from:z},className:"link",children:n})},t)}));return(0,f.jsxs)("div",{children:[(0,f.jsx)(d,{handleSubmit:function(e){e.preventDefault();var t=e.target.elements.movie.value.trim();""!==t&&(m({search:t}),x(t),e.target.reset())}}),I&&(0,f.jsx)(u.Z,{}),b&&(0,f.jsx)("p",{children:"Oops, something went wrong. Try again!"}),T&&(0,f.jsx)(l.Z,{children:O}),0===T.length&&""!==Z&&!b&&(0,f.jsx)("p",{children:"We've found nothing. Try another query!"})]})}}}]);
//# sourceMappingURL=600.85c274eb.chunk.js.map
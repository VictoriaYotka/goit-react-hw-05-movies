"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(433),c=n(439),a=n(38),s=n(791),o=n(689),r=n(87),l="Home_title__L087v",u="Home_list__aopnc",h=n(184),f=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],f=t[1],d=(0,s.useState)(!1),m=(0,c.Z)(d,2),j=m[0],_=m[1],I=(0,o.TH)();return(0,s.useEffect)((function(){_(!0),(0,a.Z)("trending/all/day").then((function(e){var t=e.results;f((0,i.Z)(t))})).catch(console.log).finally((function(){return _(!1)}))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:l,children:"Popular today:"}),j&&(0,h.jsx)("p",{children:"Loading..."}),(0,h.jsx)("ul",{className:u,children:n.map((function(e){var t=e.id,n=e.title,i=e.name;return(0,h.jsx)("li",{className:"list_item",children:(0,h.jsx)(r.OL,{to:"/movies/".concat(t),state:{from:I},className:"link",children:null!==n&&void 0!==n?n:i})},t)}))})]})}}}]);
//# sourceMappingURL=936.fa17a123.chunk.js.map
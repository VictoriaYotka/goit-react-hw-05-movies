"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{911:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.children,t=e.className;return(0,r.jsx)("ul",{className:t,children:n})}},38:function(e,n){var t={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};n.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},866:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(439),i=t(791),c=t(689),s=t(38),a="Reviews_item__G1rz-",o=t(373),u=t(911),h=t(184),l=function(){var e=(0,c.UO)().movieId,n=(0,i.useState)(!1),t=(0,r.Z)(n,2),l=t[0],f=t[1],j=(0,i.useState)(!1),d=(0,r.Z)(j,2),m=d[0],Z=d[1],v=(0,i.useState)([]),I=(0,r.Z)(v,2),x=I[0],_=I[1];(0,i.useEffect)((function(){f(!0),Z(!1),(0,s.Z)("movie/".concat(e,"/reviews")).then((function(e){var n=e.results;_(n)})).catch((function(){return Z(!0)})).finally((function(){return f(!1)}))}),[e]);var p=x.map((function(e){var n=e.author,t=e.id,r=e.content;return(0,h.jsxs)("li",{className:a,children:[(0,h.jsxs)("h5",{children:["Author: ",n]}),(0,h.jsx)("p",{children:r})]},t)}));return(0,h.jsxs)(h.Fragment,{children:[l&&(0,h.jsx)(o.Z,{}),m&&(0,h.jsx)("p",{children:"Oops, something went wrong. Try again!"}),0!==x.length?(0,h.jsx)(u.Z,{children:p}):(0,h.jsx)("p",{children:"No information"})]})}}}]);
//# sourceMappingURL=866.ad7be1b1.chunk.js.map
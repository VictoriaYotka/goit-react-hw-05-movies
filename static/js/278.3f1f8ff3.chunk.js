"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},278:function(e,t,n){n.r(t);var r=n(433),i=n(439),c=n(791),o=n(38),a=n(87),s=n(689),u=n(184);t.default=function(){var e,t=(0,a.lr)(),n=(0,i.Z)(t,2),h=n[0],l=n[1],f=(0,c.useState)(null!==(e=h.get("search"))&&void 0!==e?e:""),m=(0,i.Z)(f,2),j=m[0],d=m[1],v=(0,c.useState)([]),I=(0,i.Z)(v,2),Z=I[0],g=I[1],p=(0,s.TH)();(0,c.useEffect)((function(){""!==j&&(0,o.Z)("search/movie?query=".concat(j)).then((function(e){var t=e.results;g((0,r.Z)(t)),0===t.length&&alert("We've found nothing. Try another query!")})).catch(console.log)}),[j]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.film.value.trim();""!==t&&(l({search:t}),d(t),e.target.reset())},children:[(0,u.jsx)("input",{name:"film",type:"text",autoFocus:!0}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),Z&&(0,u.jsx)("ul",{children:Z.map((function(e){var t=e.id,n=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"/movies/".concat(t),state:{from:p},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=278.3f1f8ff3.chunk.js.map
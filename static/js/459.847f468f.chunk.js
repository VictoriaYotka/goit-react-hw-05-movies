"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[459],{911:function(e,t,n){var a=n(184);t.Z=function(e){var t=e.children,n=e.className;return(0,a.jsx)("ul",{className:n,children:t})}},38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},459:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(439),i=n(38),s=n(791),c=n(689),r="Cast_list__oOD41",o="Cast_item__vxHbm",l="Cast_name_wrapper__4ySFT",h=n(373),u=n(911),m=n(184),f=function(){var e=(0,c.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),f=n[0],d=n[1],j=(0,s.useState)(!1),p=(0,a.Z)(j,2),_=p[0],v=p[1];(0,s.useEffect)((function(){v(!0),(0,i.Z)("movie/".concat(e,"/credits")).then((function(e){var t=e.cast;d(t)})).catch(console.log).finally((function(){return v(!1)}))}),[e]);var I=f.map((function(e){var t=e.character,n=e.id,a=e.name,i=e.profile_path;return(0,m.jsxs)("li",{className:o,children:[(0,m.jsx)("img",{src:null!==i?"https://image.tmdb.org/t/p/w500".concat(i):"https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-117831744.jpg",alt:a,width:120}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("h5",{children:a}),(0,m.jsx)("h6",{children:t})]})]},n)}));return(0,m.jsxs)(m.Fragment,{children:[_&&(0,m.jsx)(h.Z,{}),0!==f.length?(0,m.jsx)(u.Z,{children:I,className:r}):(0,m.jsx)("p",{children:"No information"})]})}}}]);
//# sourceMappingURL=459.847f468f.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{38:function(e,t){var n={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWIxOWFlZTJiNTU2ZTg3MmFlYjRkMTJmM2UzZDBlZiIsInN1YiI6IjY0NmY2NjQzMTdjNDQzMDBjMjI0OTMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSQ1KLIUK97f2ypbV38GEeFR4HBt9RE_gR1cSa6SUjM"}};t.Z=function(e){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e),n).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var s=n(439),i=n(689),r=n(87),o=n(791),a=n(38),c="MovieDetails_button__uXZxd",l=n(373),u="movieInfoComponent_descr__2tUgQ",h=n(184),d=function(e){var t=e.title,n=e.info;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h4",{children:t}),(0,h.jsx)("p",{className:u,children:n})]})},j="MovieInfo_wrapper__TIELc",v="MovieInfo_rating__1fUe2",f=function(e){var t=e.poster,n=e.title,s=e.rating,i=e.overview,r=e.genres;return(0,h.jsxs)("div",{className:j,children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:t,alt:"poster",width:"320"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:n}),0!==s?(0,h.jsxs)("h5",{className:v,children:["Rating: ",s," / 10"]}):null,i&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d,{title:"Overview",info:i})}),r&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d,{title:"Genres",info:r})})]})]})},x="MovieInfoSeeMore_list__Yc-T-",_="MovieInfoSeeMore_link__PUIYs",m=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h4",{children:"See more:"}),(0,h.jsxs)("ul",{className:x,children:[(0,h.jsx)("li",{className:_,children:(0,h.jsx)(r.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{className:_,children:(0,h.jsx)(r.OL,{to:"reviews",children:"Reviews"})})]})]})},p=function(){var e,t,n=(0,i.UO)().movieId,u=(0,o.useState)(""),d=(0,s.Z)(u,2),j=d[0],v=d[1],x=(0,o.useState)(""),_=(0,s.Z)(x,2),p=_[0],g=_[1],I=(0,o.useState)(""),Z=(0,s.Z)(I,2),M=Z[0],w=Z[1],N=(0,o.useState)(""),b=(0,s.Z)(N,2),S=b[0],J=b[1],U=(0,o.useState)(""),y=(0,s.Z)(U,2),O=y[0],T=y[1],k=(0,o.useState)(!1),Q=(0,s.Z)(k,2),C=Q[0],F=Q[1],R=(0,o.useState)(!1),z=(0,s.Z)(R,2),G=z[0],B=z[1],L=null!==(e=null===(t=(0,o.useRef)((0,i.TH)()).current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){F(!0),B(!1),(0,a.Z)("/movie/".concat(n,"?append_to_response=poster_path")).then((function(e){v(e.title),g(null!==e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb17OLPVxDbgiMnuuXiy3uJoJaUQRsGB6y8Q&usqp=CAU"),w(e.overview),J(e.genres.map((function(e){return e.name})).join(", ")),T(0!==e.vote_average?e.vote_average.toFixed(1):0)})).catch((function(){return B(!0)})).finally((function(){return F(!1)}))}),[n]),(0,h.jsxs)("div",{children:[(0,h.jsx)(r.rU,{to:L,className:c,children:"\u2190 Go back"}),C&&(0,h.jsx)(l.Z,{}),G&&(0,h.jsx)("p",{children:"Oops, something went wrong. Try again!"}),(0,h.jsx)(f,{poster:p,title:j,rating:O,overview:M,genres:S}),(0,h.jsx)(m,{}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(l.Z,{}),children:(0,h.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=853.6d053bee.chunk.js.map
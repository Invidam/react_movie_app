(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var a=s(3),r=s.n(a),n=s(14),i=s.n(n),c=s(5),o=s.n(c),m=s(15),l=s(16),d=s(17),u=s(20),j=s(19),v=s(18),p=s.n(v),b=s(2),g=s.n(b),h=(s(46),s(0));function O(e){var t=e.rank,s=(e.id,e.year),a=e.title,r=e.rating,n=e.summary,i=e.poster,c=e.genres;return Object(h.jsxs)("div",{className:"movies_movie",children:[Object(h.jsx)("img",{src:i,className:"movie_poster",alt:"poster"}),Object(h.jsxs)("div",{className:"movie_contents",children:[Object(h.jsxs)("h2",{className:"movie_title",children:[Object(h.jsxs)("span",{className:"movie_title_rank",children:[t,". "]}),a,Object(h.jsxs)("span",{className:"movie_title_year",children:["(",s,")"]})]}),Object(h.jsxs)("p",{className:"movie_summary",children:[" ","".concat(n.slice(0,220),"  ").concat(n.length<220?"":"...")]}),Object(h.jsxs)("p",{className:"movie_rating",children:[" ",Object(h.jsx)("span",{className:"movie_rating-star",children:"\u2b50"}),(r/2).toFixed(1)," / 5.0"]}),Object(h.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(h.jsx)("li",{className:"movie_genre",children:e},t)}))})]})]})}O.prototype={id:g.a.number.isRequired,rank:g.a.number,year:g.a.number.isRequired,rating:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var x=O,_=(s(48),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:return s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1}),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader_text",children:"Loading . . ."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e,t){return Object(h.jsx)(x,{rank:t+1,id:e.id,rating:e.rating,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component));i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b4e16d48.chunk.js.map
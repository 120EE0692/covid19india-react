(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[9],{384:function(e,t,a){"use strict";a.r(t);var n=a(34),l=a(32),i=a(33),c=a(170),r=a(365),s=a(147),u=a(0),o=a.n(u),d=a(189),m=a(162);var b=function(e,t,a){for(var n=Object(u.useState)(a),i=Object(l.a)(n,2),o=i[0],b=i[1],O=arguments.length,j=new Array(O>3?O-3:0),h=3;h<O;h++)j[h-3]=arguments[h];var g=m.a.apply(void 0,[e,t,o].concat(j)),f=g.data,v=g.isValidating,E=g.error,p=Object(r.a)(g,["data","isValidating","error"]);return Object(d.a)((function(){b(Object(s.a)(o,(function(e){e.initialData=f})))}),[f]),Object(c.a)(Object(c.a)({},p),{},{isValidating:v,error:E,data:f})},O=a(48),j=a(55),h=a(171),g=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(25),a.e(18)]).then(a.bind(null,386))})),f=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(30),a.e(11)]).then(a.bind(null,387))})),v=Object(u.lazy)((function(){return Promise.all([a.e(3),a.e(5)]).then(a.bind(null,383))})),E=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,382))})),p=Object(u.lazy)((function(){return Promise.all([a.e(1),a.e(13)]).then(a.bind(null,372))})),T=Object(u.lazy)((function(){return a.e(8).then(a.bind(null,235))})),S=Object(u.lazy)((function(){return a.e(14).then(a.bind(null,380))})),y=Object(u.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,373))}));t.default=function(e){var t=Object(u.useState)({stateCode:"TT",districtName:null}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(u.useState)(null),d=Object(l.a)(s,2),m=d[0],k=d[1],z=Object(u.useState)("confirmed"),C=Object(l.a)(z,2),H=C[0],P=C[1],N=Object(u.useState)(""),w=Object(l.a)(N,2),F=w[0],I=w[1],R=b("https://api.covid19india.org/v3/min/timeseries.min.json",O.d,{revalidateOnFocus:!1}).data,V=b("https://api.covid19india.org/v3/min/data".concat(F?"-".concat(F):"",".min.json"),O.d,{revalidateOnMount:!0,refreshInterval:1e5,revalidateOnFocus:!1}).data,A=Object(u.useRef)(),M=Object(h.useIsVisible)(A,{once:!0}),D=["TT"].concat(Object(n.a)(Object(n.a)(new Set([].concat(Object(n.a)(Object.keys(i.g).filter((function(e){return"TT"!==e}))),Object(n.a)(Object.keys(V||{}).filter((function(e){return"TT"!==e})))))).sort()));return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,null,o.a.createElement("title",null,"Coronavirus Outbreak in India - covid19india.org"),o.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"home-left"},o.a.createElement("div",{className:"header"},o.a.createElement(u.Suspense,null,o.a.createElement(S,null)),o.a.createElement(u.Suspense,null,R&&o.a.createElement(v,{setDate:I,dates:Object.keys(R.TT).reverse(),date:F}))),V&&o.a.createElement(u.Suspense,null,o.a.createElement(y,{data:V.TT})),o.a.createElement(u.Suspense,null,R&&o.a.createElement(p,Object.assign({timeseries:R.TT},{date:F}))),o.a.createElement(u.Suspense,null,V&&o.a.createElement(E,{data:V,regionHighlighted:c,setRegionHighlighted:r}))),o.a.createElement("div",{className:"home-right",ref:A},M&&o.a.createElement(o.a.Fragment,null,V&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(f,Object.assign({stateCode:"TT"},{data:V},{mapStatistic:H,setMapStatistic:P},{regionHighlighted:c,setRegionHighlighted:r},{anchor:m,setAnchor:k}))),R&&o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(g,Object.assign({timeseries:R[c.stateCode]},{date:F,stateCodes:D},{regionHighlighted:c,setRegionHighlighted:r},{anchor:m,setAnchor:k})))))),o.a.createElement(T,null))}}}]);
//# sourceMappingURL=Home.159f3acd.chunk.js.map
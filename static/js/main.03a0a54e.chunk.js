(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(40),o=a.n(i),l=a(15),c=a(21),s=a(64);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(24),d=a.n(u),p=a(12),m=a(14),b=d.a.mark(v),y=d.a.mark(_),h="abfeb1f7e3de9fa66f370719f0bbc0c2",f=(Object(p.createReducer)({},{loading:!1,error:!1,description:"",weatherForecast:{}}),Object(p.createAction)("REQUESTED_WEATHER")),w=Object(p.createAction)("REQUESTED_WEATHER_SUCCEEDED"),x=Object(p.createAction)("FETCHED_WEATHER"),g=Object(p.createAction)("REQUESTED_WEATHER_FAILED");function v(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(x.getType(),_);case 2:case"end":return e.stop()}},b,this)}function _(){var e,t,a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J.getState();case 3:return e=n.sent,t=e.description,n.next=7,Object(m.b)(f());case 7:return n.next=9,Object(m.a)(function(){return fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&APPID=").concat(h,"&units=metric")).then(function(e){return e.json()})});case 9:return a=n.sent,n.next=12,Object(m.b)(w(a));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(m.b)(g());case 18:case"end":return n.stop()}},y,this,[[0,14]])}var E=a(10),j=Object(p.createReducer)({},{loading:!1,error:!1,description:"",weatherForecast:{}});j.on(f,function(e){return Object(E.a)({},e,{loading:!0,error:!1})}),j.on(w,function(e,t){return Object(E.a)({},e,{weatherForecast:t,loading:!1,error:!1})}),j.on(x,function(e,t){return Object(E.a)({},e,{description:t})}),j.on(g,function(e){return Object(E.a)({},e,{loading:!1,error:!0})});var k=j,O=a(5),S=a(6),z=a(8),C=a(7),A=a(9),N=a(36),L=a(61),W={cursor:"pointer",fill:"#d00",stroke:"none"},$=function(e){function t(){return Object(O.a)(this,t),Object(z.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,a=void 0===t?20:t,n=e.onClick;return r.a.createElement("svg",{height:a,viewBox:"0 0 24 24",style:Object(E.a)({},W,{transform:"translate(".concat(-a/2,"px,").concat(-a,"px)")}),onClick:n},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),t}(n.PureComponent),D=a(35),R=a(62),T=(Object(D.fromJS)({id:"point",source:"point",type:"circle",paint:{"circle-radius":10,"circle-color":"#007cbf"}}),Object(D.fromJS)(R)),F=a(63),M=a.n(F),P=function(e){function t(){var e;return Object(O.a)(this,t),(e=Object(z.a)(this,Object(C.a)(t).call(this))).showWeather=function(t){t.target.id&&e.setState({id:t.target.id})},e.state={id:0},e}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this,t=new Intl.DateTimeFormat("ru",{month:"long",day:"numeric"}),a=this.props,n=a.weather,i=a.description,o=this.state.id,l=null;return"200"===n.cod&&(l=t.format(new Date(n.list[o].dt_txt.split(" ")[0]))),"200"===n.cod?r.a.createElement("div",{className:"weather-card"},r.a.createElement("div",{className:"weather-card__content"},r.a.createElement("div",{className:"weather-card__header"},r.a.createElement(M.a,{name:"owm",iconId:"".concat(n.list[o].weather[0].id),flip:"horizontal",rotate:"90",style:{fontSize:"70px",color:"black"}}),r.a.createElement("div",null,r.a.createElement("span",{className:"weather-card__temperature"},n.list[o].main.temp.toFixed(),"\xb0C"),r.a.createElement("span",{className:"weather-card__description"},l),r.a.createElement("span",{className:"weather-card__location"},i))),r.a.createElement("nav",{className:"weather-card__navigation",role:"navigation"},r.a.createElement("ul",{className:"weather-card__button",onClick:function(t){return e.showWeather(t)}},r.a.createElement("li",null,r.a.createElement("button",{className:"btn",id:0},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f")),r.a.createElement("li",null,r.a.createElement("button",{className:"btn",id:9},"\u0417\u0430\u0432\u0442\u0440\u0430")),r.a.createElement("li",null,r.a.createElement("button",{className:"btn",id:17},"\u041f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430")))),r.a.createElement("table",{className:"weather-card__forcast"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\u041c\u0430\u043a\u0441. \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"),r.a.createElement("td",null,n.list[o].main.temp_max.toFixed(),"\xb0C")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u041c\u0438\u043d. \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"),r.a.createElement("td",null,n.list[o].main.temp_min.toFixed(),"\xb0C")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430"),r.a.createElement("td",null,n.list[o].wind.speed," \u043a\u043c/\u0447")))))):null}}]),t}(n.Component),B=Object(l.b)(function(e){return{weather:e.weatherForecast,description:e.description}})(P),I=(a(95),a(97),function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(z.a)(this,Object(C.a)(t).call(this,e))).updateViewport=function(e){a.setState({viewport:e})},a.resize=function(){a.setState({viewport:Object(E.a)({},a.state.viewport,{width:a.props.width||window.innerWidth,height:a.props.height||window.innerHeight})})},a.onViewportChange=function(e){a.setState({viewport:Object(E.a)({},e)})},a.onSuggestSelect=function(e){if(e){var t=e.description,n=e.location;a.getWeather(t),a.setState({viewport:Object(E.a)({},a.state.viewport,{zoom:12,latitude:n.lat,longitude:n.lng}),latCity:n.lat,longCity:n.lng})}},a.getWeather=function(e){a.props.fetchWeather(e)},a.state={mapStyle:T,viewport:{width:window.innerWidth,height:window.innerHeight,latitude:37.7577,longitude:-122.4376,zoom:8}},a}return Object(A.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.viewport,n=t.latCity,i=t.longCity,o=t.mapStyle;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"fixed-search"},r.a.createElement(L.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",onViewportChange:this.updateViewport,onSuggestSelect:this.onSuggestSelect,location:new window.google.maps.LatLng(53.558572,9.9278215),radius:20}),r.a.createElement(B,null)),r.a.createElement(N.b,Object.assign({},a,{mapStyle:o,mapboxApiAccessToken:"pk.eyJ1IjoiemlkYWJhaCIsImEiOiJjam51ZjE3N2QwM3VqM3dudnl5dXoyb213In0.wPZNMnjjPWu6zN4aHPjg2w",onViewportChange:function(t){return e.onViewportChange(t)},style:{textAlign:"left"}}),n&&i&&r.a.createElement(N.a,{latitude:n,longitude:i,key:"marker"},r.a.createElement($,{size:20}))))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}}]),t}(n.Component)),U=Object(l.b)(function(e){return{store:e}},function(e){return{fetchWeather:function(t){return e(x(t))}}})(I);a(99),a(101);a.d(t,"store",function(){return J});var H=Object(s.a)(),J=Object(c.c)(k,Object(c.a)(H));H.run(v);var V=Object(l.b)(function(e){return e})(U);o.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e){e.exports={version:8,name:"Basic",metadata:{"mapbox:autocomposite":!0},sources:{mapbox:{url:"mapbox://mapbox.mapbox-streets-v7",type:"vector"}},sprite:"mapbox://sprites/mapbox/basic-v8",glyphs:"mapbox://fonts/mapbox/{fontstack}/{range}.pbf",layers:[{id:"background",type:"background",paint:{"background-color":"#dedede"},interactive:!0},{id:"landuse_overlay_national_park",type:"fill",source:"mapbox","source-layer":"landuse_overlay",filter:["==","class","national_park"],paint:{"fill-color":"#d2edae","fill-opacity":.75},interactive:!0},{id:"landuse_park",type:"fill",source:"mapbox","source-layer":"landuse",filter:["==","class","park"],paint:{"fill-color":"#d2edae"},interactive:!0},{id:"waterway",type:"line",source:"mapbox","source-layer":"waterway",filter:["all",["==","$type","LineString"],["in","class","river","canal"]],paint:{"line-color":"#a0cfdf","line-width":{base:1.4,stops:[[8,.5],[20,15]]}},interactive:!0},{id:"water",type:"fill",source:"mapbox","source-layer":"water",paint:{"fill-color":"#a0cfdf"},interactive:!0},{id:"building",type:"fill",source:"mapbox","source-layer":"building",paint:{"fill-color":"#d6d6d6"},interactive:!0},{interactive:!0,layout:{"line-cap":"butt","line-join":"miter"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],type:"line",source:"mapbox",id:"tunnel_minor",paint:{"line-color":"#efefef","line-width":{base:1.55,stops:[[4,.25],[20,30]]},"line-dasharray":[.36,.18]},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"butt","line-join":"miter"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],type:"line",source:"mapbox",id:"tunnel_major",paint:{"line-color":"#fff","line-width":{base:1.4,stops:[[6,.5],[20,30]]},"line-dasharray":[.28,.14]},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"round","line-join":"round"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],type:"line",source:"mapbox",id:"road_minor",paint:{"line-color":"#efefef","line-width":{base:1.55,stops:[[4,.25],[20,30]]}},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"round","line-join":"round"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],type:"line",source:"mapbox",id:"road_major",paint:{"line-color":"#fff","line-width":{base:1.4,stops:[[6,.5],[20,30]]}},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"butt","line-join":"miter"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],type:"line",source:"mapbox",id:"bridge_minor case",paint:{"line-color":"#dedede","line-width":{base:1.6,stops:[[12,.5],[20,10]]},"line-gap-width":{base:1.55,stops:[[4,.25],[20,30]]}},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"butt","line-join":"miter"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],type:"line",source:"mapbox",id:"bridge_major case",paint:{"line-color":"#dedede","line-width":{base:1.6,stops:[[12,.5],[20,10]]},"line-gap-width":{base:1.55,stops:[[4,.25],[20,30]]}},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"round","line-join":"round"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],type:"line",source:"mapbox",id:"bridge_minor",paint:{"line-color":"#efefef","line-width":{base:1.55,stops:[[4,.25],[20,30]]}},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"round","line-join":"round"},filter:["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],type:"line",source:"mapbox",id:"bridge_major",paint:{"line-color":"#fff","line-width":{base:1.4,stops:[[6,.5],[20,30]]}},"source-layer":"road"},{interactive:!0,layout:{"line-cap":"round","line-join":"round"},filter:["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],type:"line",source:"mapbox",id:"admin_country",paint:{"line-color":"#8b8a8a","line-width":{base:1.3,stops:[[3,.5],[22,15]]}},"source-layer":"admin"},{interactive:!0,minzoom:5,layout:{"icon-image":"{maki}-11","text-offset":[0,.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},filter:["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],type:"symbol",source:"mapbox",id:"poi_label",paint:{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{interactive:!0,layout:{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":.1,"text-size":{base:1.4,stops:[[10,8],[20,14]]}},filter:["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],type:"symbol",source:"mapbox",id:"road_major_label",paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{interactive:!0,minzoom:8,layout:{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{stops:[[6,12],[12,16]]}},filter:["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],type:"symbol",source:"mapbox",id:"place_label_other",paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{interactive:!0,layout:{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{stops:[[3,12],[8,16]]}},maxzoom:16,filter:["all",["==","$type","Point"],["==","type","city"]],type:"symbol",source:"mapbox",id:"place_label_city",paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{interactive:!0,layout:{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{stops:[[3,14],[8,22]]}},maxzoom:12,filter:["==","$type","Point"],type:"symbol",source:"mapbox",id:"country_label",paint:{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}},65:function(e,t,a){e.exports=a(103)},95:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.03a0a54e.chunk.js.map
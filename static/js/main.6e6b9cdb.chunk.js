(this["webpackJsonpreact-map-markers"]=this["webpackJsonpreact-map-markers"]||[]).push([[0],{17:function(t,e,a){t.exports={Preloader:"Preloader_Preloader__1Nz0Q",lds_roller:"Preloader_lds_roller__1Kyfd"}},20:function(t,e,a){t.exports={App:"App_App__aOmNj",Map:"App_Map__3Oko6"}},21:function(t,e,a){t.exports={active:"Map_active__2SXVp"}},38:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var r=a(1),i=a(0),n=a(7),c=a.n(n),s=a(23),o=a(4),u=a(43),b=a.p+"static/media/carIcon.2996acbc.svg",d=a(6),p=a.n(d),l=function(t){var e=t.currentID,a=t.listMarkers,i=t.onChangeSearch,n=a.map((function(a){return Object(r.jsxs)("li",{className:"".concat(p.a.List_Item," ").concat(e===a.id?p.a.active:""),onClick:function(){return t.onChangePositionMap(a)},children:[Object(r.jsx)("img",{src:b,alt:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c"}),a.name]},a.name)}));return Object(r.jsxs)("div",{className:p.a.Sidebar,children:[Object(r.jsx)("h3",{className:p.a.Title,children:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043c\u0430\u0448\u0438\u043d\u044b"}),Object(r.jsx)("form",{onSubmit:function(t){return function(t){t.preventDefault()}(t)},className:p.a.form,children:Object(r.jsx)("input",{onChange:function(t){i(t)},className:p.a.searchInput,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a"})}),Object(r.jsx)("ul",{className:p.a.List,children:n})]})},f=a(3),j=a.n(f),h=a(40),O=a(41),A=a(42),g=a(44),m=a(21),x=a.n(m),N=function(t){var e=t.position,a=e.latitude,n=e.longitude,c=e.zoom,s=t.currentID,o=t.markesList,u=Object(h.a)({});Object(i.useEffect)((function(){u.setView([a,n],c)}),[a,n]);var b=j.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="}),d=j.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",className:x.a.active}),p=o.map((function(t){var e=t.id,a=t.latitude,i=t.longitude,n=t.name;return Object(r.jsx)(O.a,{icon:e===s?d:b,position:[a,i],children:Object(r.jsx)(A.a,{children:"\u0417\u0434\u0435\u0441\u044c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043c\u0430\u0448\u0438\u043d\u0430 ".concat(n)})},e)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p]})},v=a(17),w=a.n(v),z=function(){return Object(r.jsx)("div",{className:w.a.Preloader,children:Object(r.jsxs)("div",{className:w.a.lds_roller,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})},k=a(12),D="STORE_DATA",P=a(20),U=a.n(P);var S=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.listMarkers})).items,a=Object(i.useState)({latitude:48,longitude:11,zoom:5,id:1}),n=Object(o.a)(a,2),c=n[0],b=n[1],d=Object(i.useState)(!0),p=Object(o.a)(d,2),f=p[0],j=p[1],h=Object(i.useState)(e),O=Object(o.a)(h,2),A=O[0],g=O[1];Object(i.useEffect)((function(){fetch("https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json").then((function(t){return t.json()})).then((function(e){t({type:D,payload:e}),j(!1)}))}),[]);var m=c.latitude,x=c.longitude,v=c.zoom,w=c.id;return Object(r.jsx)("div",{className:U.a.App,children:f?Object(r.jsx)(z,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{onChangeSearch:function(t){var a=t.target.value,r=e.filter((function(t){return t.name.toLowerCase().indexOf(a.toLowerCase())>-1?t:null}));g(Object(s.a)(r))},onChangePositionMap:function(t){var e=t.latitude,a=t.longitude,r=t.id;b({latitude:e,longitude:a,zoom:7,id:r})},listMarkers:0===A.length?e:A,currentID:w}),Object(r.jsx)(u.a,{className:U.a.Map,center:[m,x],zoom:v,scrollWheelZoom:!0,children:Object(r.jsx)(N,{currentID:w,markesList:0===A.length?e:A,position:c})})]})})},H=a(9),T=a(5),E={items:[]},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return Object(T.a)(Object(T.a)({},t),{},{items:e.payload});default:return t}},B=Object(H.b)({listMarkers:R}),L=Object(H.c)(B);a(37),a(38);c.a.render(Object(r.jsx)(k.a,{store:L,children:Object(r.jsx)(S,{})}),document.getElementById("root"))},6:function(t,e,a){t.exports={Sidebar:"Sidebar_Sidebar__ActJf",Title:"Sidebar_Title__25UeU",List:"Sidebar_List__JSiMg",List_Item:"Sidebar_List_Item__3pUAl",active:"Sidebar_active__3GBth",loading:"Sidebar_loading__3tz6b",form:"Sidebar_form__36xkX",searchInput:"Sidebar_searchInput__X3rqQ"}}},[[39,1,2]]]);
//# sourceMappingURL=main.6e6b9cdb.chunk.js.map
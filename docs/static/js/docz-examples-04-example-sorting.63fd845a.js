(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docz/examples/04-example-sorting.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return B});var a=n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),r=n.n(a),i=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(i),l=n("./node_modules/@babel/runtime/helpers/createClass.js"),s=n.n(l),m=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=n.n(m),d=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=n.n(d),b=n("./node_modules/@babel/runtime/helpers/inherits.js"),p=n.n(b),c=n("./node_modules/react/index.js"),f=n.n(c),g=n("./node_modules/@mdx-js/tag/dist/index.js"),y=n("./docz/utils/Playground.jsx"),C=n("./src/material-table.js"),B=function(e){function t(e){var n;return o()(this,t),(n=u()(this,h()(t).call(this,e))).layout=null,n}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=r()(e,["components"]);return f.a.createElement(g.MDXTag,{name:"wrapper",components:t},f.a.createElement(g.MDXTag,{name:"h1",components:t,props:{id:"sorting-examples"}},"Sorting Examples"),f.a.createElement(g.MDXTag,{name:"h2",components:t,props:{id:"sorting-example"}},"Sorting Example"),f.a.createElement(y.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name', defaultSort: 'desc' },\n    { title: 'Surname', field: 'surname', sorting: false },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Sorting\"\n  options={{\n    paging: false,\n  }}\n/>",__scope:{props:this?this.props:n,Playground:y.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name",defaultSort:"desc"},{title:"Surname",field:"surname",sorting:!1},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Sorting",options:{paging:!1}})),f.a.createElement(g.MDXTag,{name:"h2",components:t,props:{id:"no-sorting"}},"No Sorting"),f.a.createElement(y.a,{__codesandbox:"undefined",__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"No Sorting\"\n  options={{\n    paging: false,\n    sorting: false,\n  }}\n/>",__scope:{props:this?this.props:n,Playground:y.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"No Sorting",options:{paging:!1,sorting:!1}})),f.a.createElement(g.MDXTag,{name:"h2",components:t,props:{id:"sort-overriding-with-customsort"}},"Sort overriding with customSort"),f.a.createElement(y.a,{__codesandbox:"undefined",__position:2,__code:"<MaterialTable\n  columns={[\n    {\n      title: 'Name',\n      field: 'name',\n      customSort: (a, b) => a.name.length - b.name.length,\n      headerStyle: { backgroundColor: '#CCC', border: '1px solid red' },\n    },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'AAAA', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'BB', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n    { name: 'D', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n    { name: 'CCC', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Sort overriding with customSort\"\n/>",__scope:{props:this?this.props:n,Playground:y.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name",customSort:function(e,t){return e.name.length-t.name.length},headerStyle:{backgroundColor:"#CCC",border:"1px solid red"}},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"AAAA",surname:"Baran",birthYear:1987,birthCity:63},{name:"BB",surname:"Baran",birthYear:2017,birthCity:34},{name:"D",surname:"Baran",birthYear:2017,birthCity:34},{name:"CCC",surname:"Baran",birthYear:2017,birthCity:34}],title:"Sort overriding with customSort"})))}}]),t}(f.a.Component);B.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,t,n){"use strict";var a=n("./node_modules/docz/dist/index.m.js"),r=n("./node_modules/codemirror/lib/codemirror.js");n.n(r).a.defaults.viewportMargin=1/0,t.a=a.e}}]);
//# sourceMappingURL=docz-examples-04-example-sorting.8dbe0356caa011e6f21d.js.map
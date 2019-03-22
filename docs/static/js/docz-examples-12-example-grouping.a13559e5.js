(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docz/examples/12-example-grouping.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),u=t("./node_modules/react/index.js"),m=t.n(u),d=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./docz/utils/Playground.jsx"),b=t("./src/material-table.js"),c=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(o.a)(n).call(this,e))).layout=null,t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=Object(a.a)(e,["components"]);return m.a.createElement(d.MDXTag,{name:"wrapper",components:n},m.a.createElement(d.MDXTag,{name:"h1",components:n,props:{id:"grouping-example"}},"Grouping Example"),m.a.createElement(d.MDXTag,{name:"h2",components:n,props:{id:"grouping-example-1"}},"Grouping Example"),m.a.createElement(p.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    { title: 'Cinsiyet', field: 'sex' },\n    { title: 'Tipi', field: 'type' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    {\n      name: 'Mehmet',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 63,\n      sex: 'Male',\n      type: 'adult',\n    },\n    {\n      name: 'G\xfclcan',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'adult',\n    },\n    {\n      name: 'Zerya Bet\xfcl',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'child',\n    },\n  ]}\n  title=\"Grouping Example\"\n  options={{\n    grouping: true,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:p.a,MaterialTable:b.b},__codesandbox:"undefined"},m.a.createElement(b.b,{columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Cinsiyet",field:"sex"},{title:"Tipi",field:"type"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63,sex:"Male",type:"adult"},{name:"G\xfclcan",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"adult"},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"child"}],title:"Grouping Example",options:{grouping:!0}})),m.a.createElement(d.MDXTag,{name:"h2",components:n,props:{id:"default-grouped-columns-example"}},"Default Grouped Columns Example"),m.a.createElement(p.a,{__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    {\n      title: 'Cinsiyet',\n      field: 'sex',\n      defaultGroupOrder: 0,\n      defaultGroupSort: 'desc',\n    },\n    { title: 'Tipi', field: 'type' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    {\n      name: 'Mehmet',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 63,\n      sex: 'Male',\n      type: 'adult',\n    },\n    {\n      name: 'G\xfclcan',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'adult',\n    },\n    {\n      name: 'Zerya Bet\xfcl',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'child',\n    },\n  ]}\n  title=\"Default Grouped Columns Example\"\n  options={{\n    grouping: true,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:p.a,MaterialTable:b.b},__codesandbox:"undefined"},m.a.createElement(b.b,{columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Cinsiyet",field:"sex",defaultGroupOrder:0,defaultGroupSort:"desc"},{title:"Tipi",field:"type"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63,sex:"Male",type:"adult"},{name:"G\xfclcan",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"adult"},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"child"}],title:"Default Grouped Columns Example",options:{grouping:!0}})))}}]),n}(m.a.Component);c.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.esm.js"),r=t("./node_modules/codemirror/lib/codemirror.js");t.n(r).a.defaults.viewportMargin=1/0,n.a=a.c}}]);
//# sourceMappingURL=docz-examples-12-example-grouping.267bad3dc970257e8dc0.js.map
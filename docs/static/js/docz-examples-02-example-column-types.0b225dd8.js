(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docz/examples/02-example-column-types.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),l=t.n(a),i=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),m=t.n(i),s=t("./node_modules/@babel/runtime/helpers/createClass.js"),r=t.n(s),o=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=t.n(o),u=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),d=t.n(u),c=t("./node_modules/@babel/runtime/helpers/inherits.js"),y=t.n(c),h=t("./node_modules/react/index.js"),x=t.n(h),b=t("./node_modules/@mdx-js/tag/dist/index.js"),f=t("./docz/utils/Playground.jsx"),_=t("./src/material-table.js"),E=function(e){function n(e){var t;return m()(this,n),(t=p()(this,d()(n).call(this,e))).layout=null,t}return y()(n,e),r()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=l()(e,["components"]);return x.a.createElement(b.MDXTag,{name:"wrapper",components:n},x.a.createElement(b.MDXTag,{name:"h1",components:n,props:{id:"column-types-example"}},"Column Types Example"),x.a.createElement(b.MDXTag,{name:"h2",components:n,props:{id:"date-example"}},"Date Example"),x.a.createElement(f.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Birth Date', field: 'birthDate', type: 'date' },\n    { title: 'Birth Time', field: 'birthTime', type: 'time' },\n  ]}\n  data={[\n    { name: 'Baldi', birthDate: '08/13/1996', birthTime: '02:00' },\n    { name: 'Luiz', birthDate: '10/20/2018', birthTime: '17:00' },\n  ]}\n  title=\"Date Example\"\n  options={{\n    filtering: true,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:f.a,MaterialTable:_.b}},x.a.createElement(_.b,{columns:[{title:"Name",field:"name"},{title:"Birth Date",field:"birthDate",type:"date"},{title:"Birth Time",field:"birthTime",type:"time"}],data:[{name:"Baldi",birthDate:"08/13/1996",birthTime:"02:00"},{name:"Luiz",birthDate:"10/20/2018",birthTime:"17:00"}],title:"Date Example",options:{filtering:!0}})),x.a.createElement(b.MDXTag,{name:"h2",components:n,props:{id:"currency-example"}},"Currency Example"),x.a.createElement(f.a,{__codesandbox:"undefined",__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Expenses', field: 'expenses', type: 'currency' },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', expenses: 1500.5 },\n    { name: 'Selahattin', surname: 'Y\u0131ld\u0131r\u0131m', expenses: 1200 },\n    { name: 'Silvia Joyce', surname: 'Balraj', expenses: 1700 },\n  ]}\n  title=\"Currency Example\"\n  options={{\n    paging: false,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:f.a,MaterialTable:_.b}},x.a.createElement(_.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Expenses",field:"expenses",type:"currency"}],data:[{name:"Mehmet",surname:"Baran",expenses:1500.5},{name:"Selahattin",surname:"Y\u0131ld\u0131r\u0131m",expenses:1200},{name:"Silvia Joyce",surname:"Balraj",expenses:1700}],title:"Currency Example",options:{paging:!1}})),x.a.createElement(b.MDXTag,{name:"h2",components:n,props:{id:"custom-currency-example"}},"Custom Currency Example"),x.a.createElement(f.a,{__codesandbox:"undefined",__position:2,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    {\n      title: 'Expenses',\n      field: 'expenses',\n      type: 'currency',\n      currencySetting: {\n        locale: 'tr-TR',\n        currencyCode: 'TRY',\n        minimumFractionDigits: 2,\n        maximumFractionDigits: 3,\n      },\n      emptyValue: 'N/A',\n    },\n    {\n      title: 'EmptyValue',\n      field: 'emptyVal',\n      emptyValue: () => 'Empty Value Function',\n    },\n  ]}\n  data={[\n    {\n      name: 'Mehmet',\n      surname: 'Baran',\n      expenses: 3500.555,\n      emptyVal: 'Empty',\n    },\n    {\n      name: 'Selahattin',\n      surname: 'Y\u0131ld\u0131r\u0131m',\n      expenses: 2702.5575,\n      emptyVal: '',\n    },\n    { name: 'Jake', surname: 'Leventhal', expenses: null, emptyVal: null },\n    {\n      name: 'Selahattin',\n      surname: 'Y\u0131ld\u0131r\u0131m',\n      expenses: null,\n      emptyVal: null,\n    },\n  ]}\n  title=\"Custom Currency Example\"\n  options={{\n    paging: false,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:f.a,MaterialTable:_.b}},x.a.createElement(_.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Expenses",field:"expenses",type:"currency",currencySetting:{locale:"tr-TR",currencyCode:"TRY",minimumFractionDigits:2,maximumFractionDigits:3},emptyValue:"N/A"},{title:"EmptyValue",field:"emptyVal",emptyValue:function(){return"Empty Value Function"}}],data:[{name:"Mehmet",surname:"Baran",expenses:3500.555,emptyVal:"Empty"},{name:"Selahattin",surname:"Y\u0131ld\u0131r\u0131m",expenses:2702.5575,emptyVal:""},{name:"Jake",surname:"Leventhal",expenses:null,emptyVal:null},{name:"Selahattin",surname:"Y\u0131ld\u0131r\u0131m",expenses:null,emptyVal:null}],title:"Custom Currency Example",options:{paging:!1}})))}}]),n}(x.a.Component);E.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.m.js"),l=t("./node_modules/codemirror/lib/codemirror.js");t.n(l).a.defaults.viewportMargin=1/0,n.a=a.e}}]);
//# sourceMappingURL=docz-examples-02-example-column-types.3cfb72521ed45c421423.js.map
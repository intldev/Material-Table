(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./docz/examples/09-example-localization.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var o=n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),i=n.n(o),a=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=n.n(a),l=n("./node_modules/@babel/runtime/helpers/createClass.js"),s=n.n(l),u=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),c=n.n(u),p=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=n.n(p),d=n("./node_modules/@babel/runtime/helpers/inherits.js"),h=n.n(d),b=n("./node_modules/react/index.js"),g=n.n(b),S=n("./node_modules/@mdx-js/tag/dist/index.js"),f=n("./docz/utils/Playground.jsx"),x=n("./src/material-table.js"),w=function(e){function t(e){var n;return r()(this,t),(n=c()(this,m()(t).call(this,e))).layout=null,n}return h()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=i()(e,["components"]);return g.a.createElement(S.MDXTag,{name:"wrapper",components:t},g.a.createElement(S.MDXTag,{name:"h2",components:t,props:{id:"localization-example"}},"Localization Example"),g.a.createElement(f.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Localization\"\n  actions={[\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    },\n  ]}\n  localization={{\n    pagination: {\n      labelDisplayedRows: '{from}-{to} von {count}', // {from}-{to} of {count}\n      labelRowsPerPage: 'Zeilen pro Seite:', // Rows per page:\n      firstAriaLabel: 'Erste Seite', // First Page\n      firstTooltip: 'Erste Seite', // First Page\n      previousAriaLabel: 'Vorherige Seite', // Previous Page\n      previousTooltip: 'Vorherige Seite', // Previous Page\n      nextAriaLabel: 'N\xe4chste Seite', // Next Page\n      nextTooltip: 'N\xe4chste Seite', // Next Page\n      lastAriaLabel: 'Letzte Seite', // Last Page\n      lastTooltip: 'Letzte Seite', // Last Page\n    },\n    toolbar: {\n      nRowsSelected: '{0} Zeile(n) ausgew\xe4hlt', // {0} row(s) selected\n      showColumnsTitle: 'Spalten anzeigen', // Show Columns\n      showColumnsAriaLabel: 'Spalten anzeigen', // Show Columns\n      exportTitle: 'Exportieren', // Export\n      exportAriaLabel: 'Exportieren', // Export\n      exportName: 'Als CSV exportieren', // Export as CSV\n      searchTooltip: 'Suchen', // Search\n    },\n    header: {\n      actions: 'Aktionen', // Actions\n    },\n    body: {\n      emptyDataSourceMessage: 'Keine Eintr\xe4ge an zu zeigen', // No records to display\n      filterRow: {\n        filterTooltip: 'Filtern', // Filter\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,Playground:f.a,MaterialTable:x.b}},g.a.createElement(x.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Localization",actions:[{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,t){alert("You clicked user "+t.name)}}],localization:{pagination:{labelDisplayedRows:"{from}-{to} von {count}",labelRowsPerPage:"Zeilen pro Seite:",firstAriaLabel:"Erste Seite",firstTooltip:"Erste Seite",previousAriaLabel:"Vorherige Seite",previousTooltip:"Vorherige Seite",nextAriaLabel:"N\xe4chste Seite",nextTooltip:"N\xe4chste Seite",lastAriaLabel:"Letzte Seite",lastTooltip:"Letzte Seite"},toolbar:{nRowsSelected:"{0} Zeile(n) ausgew\xe4hlt",showColumnsTitle:"Spalten anzeigen",showColumnsAriaLabel:"Spalten anzeigen",exportTitle:"Exportieren",exportAriaLabel:"Exportieren",exportName:"Als CSV exportieren",searchTooltip:"Suchen"},header:{actions:"Aktionen"},body:{emptyDataSourceMessage:"Keine Eintr\xe4ge an zu zeigen",filterRow:{filterTooltip:"Filtern"}}}})))}}]),t}(g.a.Component);w.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,t,n){"use strict";var o=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/codemirror/lib/codemirror.js");n.n(i).a.defaults.viewportMargin=1/0,t.a=o.e}}]);
//# sourceMappingURL=docz-examples-09-example-localization.3b41105a52546fe33f43.js.map
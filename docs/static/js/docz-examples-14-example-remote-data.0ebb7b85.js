(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./docz/examples/14-example-remoteData.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=a("./node_modules/react/index.js"),p=a.n(d),u=a("./node_modules/@mdx-js/tag/dist/index.js"),m=a("./docz/utils/Playground.jsx"),c=a("./src/material-table.js"),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).layout=null,a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,a=Object(n.a)(e,["components"]);return p.a.createElement(u.MDXTag,{name:"wrapper",components:t},p.a.createElement(u.MDXTag,{name:"h1",components:t,props:{id:"remote-data-example"}},"Remote Data Example"),p.a.createElement(m.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    {\n      title: 'Avatar',\n      field: 'avatar',\n      render: rowData => (\n        <img\n          style={{ height: 36, borderRadius: '50%' }}\n          src={rowData.avatar}\n        />\n      ),\n    },\n    { title: 'Id', field: 'id' },\n    { title: 'First Name', field: 'first_name' },\n    { title: 'Last Name', field: 'last_name' },\n  ]}\n  data={query =>\n    new Promise((resolve, reject) => {\n      let url = 'https://reqres.in/api/users?'\n      url += 'per_page=' + query.pageSize\n      url += '&page=' + (query.page + 1)\n      fetch(url)\n        .then(response => response.json())\n        .then(result => {\n          resolve({\n            data: result.data,\n            page: result.page - 1,\n            totalCount: result.total,\n          })\n        })\n    })\n  }\n  title=\"Remote Data Example\"\n/>",__scope:{props:this?this.props:a,Playground:m.a,MaterialTable:c.b},__codesandbox:"undefined"},p.a.createElement(c.b,{columns:[{title:"Avatar",field:"avatar",render:function(e){return p.a.createElement("img",{style:{height:36,borderRadius:"50%"},src:e.avatar})}},{title:"Id",field:"id"},{title:"First Name",field:"first_name"},{title:"Last Name",field:"last_name"}],data:function(e){return new Promise(function(t,a){var n="https://reqres.in/api/users?";n+="per_page="+e.pageSize,n+="&page="+(e.page+1),fetch(n).then(function(e){return e.json()}).then(function(e){t({data:e.data,page:e.page-1,totalCount:e.total})})})},title:"Remote Data Example"})))}}]),t}(p.a.Component);b.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,t,a){"use strict";var n=a("./node_modules/docz/dist/index.esm.js"),r=a("./node_modules/codemirror/lib/codemirror.js");a.n(r).a.defaults.viewportMargin=1/0,t.a=n.c}}]);
//# sourceMappingURL=docz-examples-14-example-remote-data.d47c9d8dd7ad86e25381.js.map
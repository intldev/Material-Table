# material-table

[![Build Status](https://travis-ci.org/mbrn/material-table.svg?branch=master)](https://travis-ci.org/mbrn/material-table)
[![npm package](https://img.shields.io/npm/v/material-table/latest.svg)](https://www.npmjs.com/package/material-table)
[![NPM Downloads](https://img.shields.io/npm/dm/material-table.svg?style=flat)](https://npmcharts.com/compare/material-table?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=material-table)](https://packagephobia.now.sh/result?p=material-table)
[![Follow on Twitter](https://img.shields.io/twitter/follow/baranmehmet.svg?label=follow+baranmehmet)](https://twitter.com/baranmehmet)

A console application that contains a lof of features to help developer

[DEMO](https://mbrn.github.io/material-table/)

## Installation
    $ npm install material-table --save

## Example 

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table'

class App extends Component {
  this.state = {
    columns: [
      {title: 'Adı', field: 'name'},
      {title: 'Soyadı', field: 'surname'},
      {title: 'Doğum Yılı', field: 'birthYear', isNumeric: true},
      {title: 'Doğum Yeri', field: 'birthCity', lookup: {34: 'İstanbul', 63: 'Şanlıurfa'}}
    ],
    data: [
      {name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63},
    ],
  }

  render() {
    const listStyle={backgroundColor: '#4aacc71a', margin: 2}
    const data = [...this.state.data]

    for(let i = 1; i < this.state.dataCount; i++) {
      data.push({name: 'Name ' + i, surname: 'Surname ' + i, birthYear: 2018 + i, birthCity: i})
    }

    return (
      <div style={{maxWidth: '100%'}}>
        <MaterialTable
          columns={this.state.columns}
          data={data}
          title="Demo Title"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-div'));
```

import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Search from './app/search'
import { getSearchResult } from './service.ts'

import '../css/index.css';


export default class App extends Component {
  render() {
    return (
      <Fragment>

        <h1>Github issues - Autocomplete Search</h1>
        <div id="searchfield">
          <Search />
        </div>

      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import store from '../store'

import 'react-select/dist/react-select.min.css'
import { articles } from '../fixtures';

class App extends Component {

  render() {

    return (
      <Provider store={ store }>
        <div>
          <Counter/>
          <UserForm/>
          <Filters articles={ articles }/>
          <ArticleList />
        </div>
      </Provider>
    );
  }
}

export default App
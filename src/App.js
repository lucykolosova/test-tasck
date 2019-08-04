import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import PostList from './feature/articles';
import './App.css';
import CreatePost from './feature/articles/component/createPost';
import PostPreview from './feature/articles/component/PostPrewiew';

function App() {
  return (
    <div className="App">
      <NavLink className="header" to="/">
        Simple blog
      </NavLink>
      <Switch>
        <Route component={PostList} exact path="/" />
        <Route component={CreatePost} exact path="/createpost" />
        <Route component={PostPreview} exact path="/posts/:id" />
      </Switch>
    </div>
  );
}

export default App;

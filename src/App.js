import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  customSetState = (param1, param2) => {
    this.setState({
      [param1]: param2,
    });
  }

  render() {
    const { loginName } = this.state;
    return (
      <div className="pai">
        <Switch>
          <Route
            exact
            path="sd-023-b-project-trybetunes/"
            render={ (param) => (<Login
              { ...param }
              loginName={ loginName }
              handleChange={ this.handleChange }
            />) }
          />
          <Route path="sd-023-b-project-trybetunes/search" component={ Search } />
          <Route path="sd-023-b-project-trybetunes/album/:id" component={ Album } />
          <Route path="sd-023-b-project-trybetunes/favorites" component={ Favorites } />
          <Route
            exact
            path="sd-023-b-project-trybetunes/profile/edit"
            component={ ProfileEdit }
          />
          <Route path="sd-023-b-project-trybetunes/profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;

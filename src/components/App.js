import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  HashRouter,
  Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import history from '../history';
import {Home} from './routes/home';
import Training from './routes/training';
import {Search} from './routes/search';
import {Blog} from './routes/blog';
import {AboutProject} from './routes/aboutProject';
import {Webinar} from './routes/webinar';
import {Whoops404} from './routes/whoops404';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import store from '../store';
import DevTools from './DevTools';

class App extends PureComponent {
  static propTypes = {};

  render () {
    let stateStore = store.getState ();
    let lessons = stateStore.dataLessons.titleLessons;
    let phistory = syncHistoryWithStore (history, store);

    return (
      <Provider store={store}>
        <HashRouter history={phistory}>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Training" component={Training} />
              <Redirect from="/begin" to="/Training/begin" />
              <Redirect from="/rewards" to="/Training/rewards" />
              {lessons.map (lesson => {
                <Redirect
                  from="/Training/begin"
                  to={`/Training/begin/lesson=${lesson.id}`}
                />;
              })}
              <Route path="/AboutProject" component={AboutProject} />
              <Route path="/Blog" component={Blog} />
              <Route path="/Webinar" component={Webinar} />
              <Route path="/Search" component={Search} />
              <Route component={Whoops404} />
            </Switch>
            <DevTools />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

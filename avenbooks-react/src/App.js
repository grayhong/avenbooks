import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Board from './components/Board';
import Register from './components/Register'
import Detail from './components/Detail';
import MyPage from './components/MyPage';
import './App.css';
import NavBar from './components/common/NavBar';
import Login from './components/Login';
import Sell from './components/Sell'
import Table from './components/Table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidUpdate(prevProps) {
    const { history, location } = this.props;
    if (
        history.action === 'PUSH' &&
        location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isLogin = pathname === '/' || pathname === '/register';
    return (
      <CookiesProvider>
        <div className="App">
          { isLogin ? null: <NavBar /> }
          <div style={isLogin? null : { paddingTop: 63 }}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/board" component={Board} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/sell" component={Sell} />
              <Route exact path="/table" component={Table} />
              <Route exact path="/detail/:bookID" component={Detail} />
              <Route exact path="/mypage" component={MyPage} />
              <Redirect from="/" to="/" />
            </Switch>
          </div>
        </div>
      </CookiesProvider>
    );
  }
}

export default withRouter(App);

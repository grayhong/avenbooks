import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { } from 'semantic-ui-react';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aa: 'aa'
    }
  }

  componentWillMount() {
    const { cookies } = this.props;
  }

  render() {
    return <div>AA</div>;
  }
}

export default withCookies(MyPage);
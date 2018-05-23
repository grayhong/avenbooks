import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dd: "dd",
    }
  }
  componentWillMount() {
    const { cookies } = this.props;
  }
  componentDidMount() {

  }
  render() {
    const array = [1,2,3];
    const items = array.map(e => <div key={e*1002}>{e}</div>);
    return (
      <div style={styles.contentStyle}>
        <div style={styles.subStyle}></div>
        <div style={styles.subStyle}></div>
        <div style={styles.subStyle2}></div>
      </div>
    )
  }
}

const data = [
  {
    name: 'intro to db',
    author: 'hsj',
    price: '10000'
  },
  {
    name: 'intro to db',
    author: 'hsj',
    price: '10000'
  },
  {
    name: 'intro to db',
    author: 'hsj',
    price: '10000'
  }
]

const styles={
  contentStyle: {
    height: '30vh',
    width: '50vw',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  subStyle: {
    backgroundColor: 'white',
    height: '10vh',
    width: '10vw',

  },
  subStyle2: {
    height: '10vh',
    width: '10vw',

  }
}

export default withCookies(Board);
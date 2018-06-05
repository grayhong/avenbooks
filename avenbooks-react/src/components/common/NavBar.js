import React, { Component } from 'react';
import Book from 'react-icons/lib/go/book';
import {Link} from 'react-router-dom';

import NavBarItem from './NavBarItem';

export default class NavBar extends Component {
  render() {
    return (
        <div style={styles.navBarStyle}>
          <div style={styles.containerStyle}>
            <NavBarItem title to="/table"><Book style={styles.iconStyle}/>&nbsp;AVENBOOKS</NavBarItem>
            <NavBarItem to="/hi1">
              <Link to='/sell' params={{}} style={styles.linkStyle}>
                Sell
              </Link>
            </NavBarItem>
            <NavBarItem to="/profile">
              <Link to='/mypage' params={{}} style={styles.linkStyle}>
              My Page
              </Link>
            </NavBarItem>
            <div style={{ clear:'both' }} />
          </div>
        </div>
    )
  }
}

const styles = {
  navBarStyle : {
    backgroundColor: 'teal',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
  },
  containerStyle : {
    maxWidth: 1200,
    margin: 'auto',
    padding: '16px 0'
  },
  linkStyle: {
    color: 'white',
  },
  iconStyle: {
    height: '25px',
    width: '25px',
    marginBottom: '3px'
  }
};
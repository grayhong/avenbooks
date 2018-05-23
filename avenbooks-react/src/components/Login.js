import React, { Component } from 'react';
import axios from 'axios';
import {LOGIN_URL} from "../constants";
import { withCookies, Cookies } from 'react-cookie';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
    this.loginUser = this.loginUser.bind(this);
  }

  componentWillMount() {
  }

  loginUser(e) {
    const { id, password } = this.state;
    const { cookies } = this.props;
    axios.post(LOGIN_URL, {id, password})
        .then((res) => {
          const {id, nickname, _id} = res.data;
          cookies.set('id', id, { path: '/' });
          cookies.set('nickname', nickname, { path: '/' });
          cookies.set('_id', _id, { path: '/' });
          this.props.history.replace('/home');
        })
        .catch((e) => console.log(e));
    e.preventDefault();
  }

  render() {
    return (
        <div style={{height: '100vh', backgroundColor: '#F2F6FA'}}>
          <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Log-in to your account
              </Header>
              <Form onSubmit={(e) => this.loginUser(e)} size='large'>
                <Segment stacked>
                  <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='Username'
                      onChange={event => this.setState({ id: event.target.value })}
                      value={this.state.id}
                  />
                  <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      onChange={event => this.setState({ password: event.target.value })}
                      value={this.state.password}
                  />

                  <Button color='teal' fluid size='large'>Login</Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

const styles = {
  backgroundStyle: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  loginInputStyle: {
    height: '2.5rem',
    fontSize: '1.2rem',
  },
  titleTextArea: {
    borderWidth: '0px',
    borderBottomWidth: '1px',
    borderBottomColor: '#efefef',
    marginBottom: '5px',
    padding: '0.3rem',
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: '100%',
    width: '50%',
    outline: 'none',
    backgroundColor: 'rgb(255,255,255,0)',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B008B',
    borderRadius: '1.5rem',
    height: '15%',
    fontWeight: 900,
    fontSize: '1.2rem',
    width: '10rem',
    marginTop: '5px',
    cursor: 'pointer',
    color: '#efefef',
  },
  loginBoxStyle: {
    height: '23%',

    width: '35%',
  },
  loginStyle: {
    height: '23%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.5rem',
    backgroundColor: 'rgb(255,255,255,0.5)',
    width: '35%',
  },
  titleStyle: {
    fontSize: '1.2rem',
    fontWeight: 800,
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
};

export default withCookies(Login);
import React, { Component } from 'react';
import {Input, Form, Segment, Button} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      title: '',
      subject: '',
      edition: '',
      price: '',
      entryState: 'out',
    }
    this.changeColor = this.changeColor.bind(this);
    this.resetColor = this.resetColor.bind(this);
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  changeColor(){
    this.setState({
      entryState: 'in'
    })
  }

  resetColor(){
    this.setState({
      entryState: 'out'
    })
  }

  render(){
    return(
      <div style={styles.section}>

        <div style={styles.divStyle}></div>

        <div style={styles.divStyle}>
          <h1 style={styles.headerStyle}>
            Upload book for selling
          </h1>
        </div>

        <Form>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Enter Book Title
            </label>
            <Form.Input
              fluid
              style={styles.inputStyle}
              placeholder='Enter Book Title'

              type='text' />
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Enter Subject Name
            </label>
            <Form.Input
              fluid
              style={styles.inputStyle}
              placeholder='Enter Subject Name'
              type='text' />
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Enter Edition
            </label>
            <Form.Input
              fluid
              style={styles.inputStyle}
              placeholder='Enter Edition'
              type='text' />
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Upload your book photo
            </label>
            <Form.Input
              fluid
              style={styles.inputStyle}
              type='file' />
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Enter Price
            </label>
            <Form.Input
              fluid
              style={styles.inputStyle}
              placeholder='Enter Price'
              type='text' />
          </div>

          <div style={styles.divStyle}></div>

          <button
            style={styles[this.state.entryState]}
            onMouseEnter={this.changeColor}
            onMouseLeave={this.resetColor}
          >
            SUBMIT
          </button>
        </Form>
      </div>
    )
  }
}

const styles = {
  section: {
    height: '85vh',
    width: '60vw',
    backgroundColor: '#FFFFFF',
    padding: '1em',
    margin: '1em auto',
    borderTop: '5px solid #69c773',
    boxShadow: '0 2px 10px rgba(0,0,0,0.8)',
    h1:{
      marginTop: '0',
    },
  },
  label: {
    fontSize: '12pt',
    textAlign: 'left',
    display: 'block',
    paddingBottom: '0.25em',
  },
  inputStyle: {
    width: '50vw',
    margin: 'auto',
  },
  divStyle: {
    width: '50vw',
    marginBottom: '3vh',
    marginLeft: '4vw',
  },
  headerStyle: {
    textAlign: 'left',
  },

  button: {
    outline: 'none',
    height: '5vh',
    textAlign: 'center',
    width: '15vw',
    borderRadius: '40px',
    backgroundColor: '#ffff',
    border: '2px solid #69c773',
    fontColor: '#69c773',
    fontSize: '15px',
  },
  in:{
    outline: 'none',
    height: '5vh',
    textAlign: 'center',
    width: '15vw',
    borderRadius: '40px',
    backgroundColor: '#69c773',
    border: '2px solid #69c773',
    color: '#ffff',
    fontSize: '15px',
  },
  out:{
    outline: 'none',
    height: '5vh',
    textAlign: 'center',
    width: '15vw',
    borderRadius: '40px',
    backgroundColor: '#ffffff',
    border: '2px solid #69c773',
    fontColor: '#69c773',
    color: '#69c773',
    fontSize: '15px',
  },
}


export default withCookies(Register);
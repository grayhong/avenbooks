import React, { Component } from 'react';
import {Input, Form, Segment, Button} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';

class Sell extends Component{
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
    this.detectTitle = this.detectTitle.bind(this);
    this.detectSubject = this.detectSubject.bind(this);
    this.detectEdition = this.detectEdition.bind(this);
    this.detectPrice = this.detectPrice.bind(this);
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

  detectTitle(e){
    this.setState({ title: e.target.value });
  }

  detectSubject(e){
    this.setState({ subject: e.target.value });
  }

  detectEdition(e){
    this.setState({ edition: e.target.value });
  }

  detectPrice(e){
    this.setState({ price: e.target.value });
  }

  testFunc = (e) => {
    alert(e.target.files[0]);
  };

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
              onChange={this.detectTitle}
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
              onChange={this.detectSubject}
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
              onChange={this.detectEdition}
              type='text' />
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Upload your book photo
            </label>
            <Form.Input
              onChange={this.testFunc}
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
              type={this.detectPrice}
              type='text' />
          </div>

          <div style={styles.divStyle}></div>

          <button
            style={{...styles.button,
              backgroundColor: this.state.entryState === 'out' ? '#ffffff' : '#69c773',
              color: this.state.entryState === 'out' ? '#69c773' : '#ffffff',}}
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
    minHeight: '550px',
    padding: '3rem',
    margin: '3rem auto',
    borderTop: '5px solid #69c773',
    boxShadow: '0 2px 10px rgba(0,0,0,0.8)',
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
    marginLeft: '2.5vw',
  },
  headerStyle: {
    textAlign: 'left',
  },

  button: {
    outline: 'none',
    height: '5vh',
    textAlign: 'center',
    width: '15vw',
    minHeight: '30px',
    borderRadius: '40px',
    border: '2px solid #69c773',
    fontSize: '15px',
  },
}


export default withCookies(Sell);
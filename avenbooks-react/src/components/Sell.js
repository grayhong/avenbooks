import React, { Component } from 'react';
import axios from 'axios';
import {Input, Form, Search, Grid, Header, Dropdown} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import SellDetail from './SellDetail';
import {SELL_URL, BOARD_URL} from "../constants";

const possibleBooks = [
  {
    text: 'Introduction to DB',
    subjectName: 'Intro to DB',
    subjectID: 'CS360',
    author: 'Hyun Sun Ju',
    cost: '2000',
    key: 0,
    value: 0,
  },
  {
    text: 'Structure and Interpretation of Computer Program',
    subjectName: 'Programming Principles',
    subjectID: 'CS220',
    author: 'Hyun Sun Ju',
    cost: '3000',
    key: 1,
    value: 1,
  },
  {
    text: 'How to write C code',
    subjectName: 'Special Lecture on Computer Science',
    subjectID: 'CS492',
    author: 'Hyun Sun Ju',
    cost: '1500',
    key: 2,
    value: 2,
  },
];

class Sell extends Component{
  constructor(props){
    super(props);
    this.state={
      possible_books: [
        {
          text: 'Introduction to DB',
          subjectName: 'Intro to DB',
          subjectID: 'CS360',
          author: 'Hyun Sun Ju',
          cost: '2000',
        },
        {
          text: 'Structure and Interpretation of Computer Program',
          subjectName: 'Programming Principles',
          subjectID: 'CS220',
          author: 'Hyun Sun Ju',
          cost: '3000',
        },
        {
          text: 'How to write C code',
          subjectName: 'Special Lecture on Computer Science',
          subjectID: 'CS492',
          author: 'Hyun Sun Ju',
          cost: '1500',
        },
      ],
      subjectName: '',
      entryState: 'out',
    }
    this.changeColor = this.changeColor.bind(this);
    this.resetColor = this.resetColor.bind(this);
    this.detectTitle = this.detectTitle.bind(this);
    this.detectSubject = this.detectSubject.bind(this);
    this.detectEdition = this.detectEdition.bind(this);
    this.detectPrice = this.detectPrice.bind(this);
    this.detectFile = this.detectFile.bind(this);
    this.post = this.post.bind(this);
    this.dropDownOnClick = this.dropDownOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    const { cookies } = this.props;
    console.log(cookies.get('StudentID'));
    axios.get(BOARD_URL)
      .then((res) => {
        console.log(res);
        this.setState({ possible_books : res.data });
      })
      .catch((e) => console.log(e));
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

  detectFile(e){
    this.setState({file: e.target.files[0]});
    alert(e.target.files[0]);
  }

  dropDownOnClick(e){
    this.setState({subjectName: e.target.value});
  }

  handleChange (e) {
    this.setState({ subjectName: e.target.value })
  }

  post() {
    const { cookies } = this.props;
    console.log(cookies.get('StudentID'));

    const file_to_img = new FileReader();
    file_to_img.readAsDataURL(this.state.file);

    const send_data = {
      bookID: '',
      sellerID: cookies.get('StudentID'),
      price: this.state.price,
      edition: this.state.edition,
      photo_in_base64: file_to_img,
    };
    axios.post(SELL_URL, send_data)
      .then((res) => {

      })
  };

  render(){
    const friendOptions=[
      {
        text:'Hello',
      }
    ];
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
            <Dropdown
              placeholder={this.state.subjectName}
              fluid
              search
              selection
              options={possibleBooks}/>
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
              backgroundColor: this.state.entryState === 'out' ? '#ffffff' : 'teal',
              color: this.state.entryState === 'out' ? 'teal' : '#ffffff',}}
            onMouseEnter={this.changeColor}
            onMouseLeave={this.resetColor}
            onClick={this.post}
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
    height: '65vh',
    width: '60vw',
    backgroundColor: '#FFFFFF',
    minHeight: '550px',
    padding: '3rem',
    margin: '3rem auto',
    borderTop: '5px solid teal',
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
    marginBottom: '4vh',
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
    border: '2px solid teal',
    fontSize: '15px',
  },
}


export default withCookies(Sell);
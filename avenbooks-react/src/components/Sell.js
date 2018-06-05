import React, { Component } from 'react';
import axios from 'axios';
import {Input, Form, Search, Grid, Header, Dropdown} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import {Link} from 'react-router-dom';
import SellDetail from './SellDetail';
import {SELL_URL, BOARD_URL} from "../constants";

class Sell extends Component{
  constructor(props){
    super(props);
    this.state={
      possible_books: [],
      possible_editions:[],
      entryState: 'out',
      selectedID: '',
      selectedEdition: '',
      price: '',
    }
    this.changeColor = this.changeColor.bind(this);
    this.resetColor = this.resetColor.bind(this);
    this.detectTitle = this.detectTitle.bind(this);
    this.detectSubject = this.detectSubject.bind(this);
    this.detectEdition = this.detectEdition.bind(this);
    this.detectPrice = this.detectPrice.bind(this);
    this.detectFile = this.detectFile.bind(this);
    this.post = this.post.bind(this);
  }
  componentWillMount(){
    const { cookies } = this.props;
    console.log(cookies.get('StudentID'));

    axios.get(BOARD_URL)
      .then((res) => {
        console.log(res.data);
        var arr = [];

        res.data.map(function(item){
          arr.push({
            text: item.BookName,
            key: item.BookID,
            value: item.BookID,
            edition: item.CurrentEdition,
          })
          console.log(arr);
        });

        this.setState({possible_books: arr});

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
  }

  post() {
    const { cookies } = this.props;

    const select = this.state.selectedID;
    const price = this.state.price;
    const edition = this.state.selectedEdition;
    const cookie = cookies.get('StudentID');

    console.log(select);
    console.log(price);
    console.log(cookie);
    console.log(edition);

    console.log(this.state.selectedID);

    let file_to_img = new FileReader();
    file_to_img.readAsDataURL(this.state.file);

    file_to_img.onload = function(e) {
      var rawLog = file_to_img.result;

      const send_data = {
        bookID: select,
        sellerID: cookie,
        price: price,
        edition: edition,
        base64: rawLog,
      };
      axios.post(SELL_URL, send_data)
        .then((res) => {

        })
    };

  };

  handleChange = (e, { value }) => {
    this.setState({ selectedID: value });
    const arr = this.state.possible_books.filter(function(item){
      return item.key === value;
    })
    const edition = arr[0].edition;
    var poss_edit = [];
    var i;
    for(i = 1; i <= edition; i++){
      poss_edit.push({
        text: i,
        key: i,
        value: i,
      });
    }
    this.setState({possible_editions: poss_edit});
  }

  handleEdition = (e, { value }) => {
    this.setState({ selectedEdition: value });
  }

  render(){
    const value = this.state.selectedID;
    const value_edition = this.state.selectedEdition;

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
              Search Book Title
            </label>
            <Dropdown
              placeholder={'Search Book Title'}
              fluid
              search
              selection
              value={value}
              onChange={this.handleChange}
              options={this.state.possible_books}/>
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Select Book's Edition
            </label>
            <Dropdown
              placeholder={'Search Book Edition'}
              fluid
              search
              selection
              value={value_edition}
              onChange={this.handleEdition}
              options={this.state.possible_editions}/>
          </div>

          <div style={styles.divStyle}>
            <label style={styles.label}>
              Upload your book photo
            </label>
            <Form.Input
              onChange={this.detectFile}
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
              onChange={this.detectPrice}
              type='text' />
          </div>

          <div style={styles.divStyle}></div>

          <Link to={`/table`}>
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
          </Link>
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
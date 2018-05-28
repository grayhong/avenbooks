import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import Logo from '../static/icons/logo.svg'
import BoardEntry from './BoardEntry'
import {BOARD_URL, LOGIN_URL} from "../constants";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: [
        {
          imageSrc: {Logo},
          bookName: 'Introduction to DB',
          subjectName: 'Intro to DB',
          subjectID: 'CS360',
          author: 'Hyun Sun Ju',
          cost: '2000',
        },
        {
          imageSrc: {Logo},
          bookName: 'Structure and Interpretation of Computer Program',
          subjectName: 'Programming Principles',
          subjectID: 'CS220',
          author: 'Hyun Sun Ju',
          cost: '3000',
        },
        {
          imageSrc: {Logo},
          bookName: 'How to write C code',
          subjectName: 'Special Lecture on Computer Science',
          subjectID: 'CS492',
          author: 'Hyun Sun Ju',
          cost: '1500',
        },
      ],
      searchData: [
        {
          imageSrc: {Logo},
          bookName: 'Introduction to DB',
          subjectName: 'Intro to DB',
          subjectID: 'CS360',
          author: 'Hyun Sun Ju',
          cost: '2000',
        },
        {
          imageSrc: {Logo},
          bookName: 'Structure and Interpretation of Computer Program',
          subjectName: 'Programming Principles',
          subjectID: 'CS220',
          author: 'Hyun Sun Ju',
          cost: '3000',
        },
        {
          imageSrc: {Logo},
          bookName: 'How to write C code',
          subjectName: 'Special Lecture on Computer Science',
          subjectID: 'CS492',
          author: 'Hyun Sun Ju',
          cost: '1500',
        },
      ],
    }

    this.detectInput = this.detectInput.bind(this);
    this.afterSearch = this.afterSearch.bind(this);
  }

  detectInput(e){
    this.setState({ input: e.target.value });
    const { data: data } = this.state;

    const ignoreCase = String(e.target.value).toLowerCase()
    this.setState({
      searchData: data.filter(function (item) {
        return item.bookName.toLowerCase().includes(ignoreCase)
          || item.subjectName.toLowerCase().includes(ignoreCase)
          || item.subjectID.toLowerCase().includes(ignoreCase);
      })
    })
  }

  afterSearch(e){
    const { data: data, searchData: originData, input } = this.state;
    this.setState({
      searchData: input === undefined ? data: data.filter(function(item) {
        return item.bookName === input || item.subjectName === input;
      })
    })
  }

  componentWillMount() {
    console.log('Hello');
    const { cookies } = this.props;
    axios.get(BOARD_URL, {withCredentials: true})
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
      .catch((e) => console.log(e));
  }

  componentDidMount() {

  }

  render() {
    const entry = this.state.searchData.map(function(item) {
      return (
        <BoardEntry
          bookName={item.bookName}
          subjectName={item.subjectName}
          subjectID={item.subjectID}
          cost={item.cost}
          imgSrc={Logo}
          author={item.author}
        />
      )
    });

    return (
      <div>
        <div style={styles.gapTop}></div>

        <Form onSubmit={this.afterSearch}>
          <Form.Input
            icon='search'
            fluid
            placeholder='Search with subject name or book title'
            onChange={this.detectInput}
            value={this.state.input}
            style={styles.inputStyle}
          />
        </Form>

        <div style={styles.gapTop}></div>

        {entry}
      </div>
    )
  }
}

const styles={
  gapTop:{
    height: '10vh',
  },
  inputStyle:{
    margin: 'auto',
    width: '40vw',
  },
}

export default withCookies(Board);
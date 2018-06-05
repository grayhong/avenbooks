import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import Logo from '../static/icons/logo.svg';
import TableEntry from './TableEntry';
import {TABLE_URL, LOGIN_URL, BOARD_URL} from "../constants";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: [],
      searchData: [],
    }

    this.detectInput = this.detectInput.bind(this);
    this.afterSearch = this.afterSearch.bind(this);
  }

  detectInput(e){
    this.setState({ input: e.target.value });
    const { data: data } = this.state;

    const ignoreCase = e.target.value === undefined? " " : String(e.target.value).toLowerCase()
    this.setState({
      searchData: data.filter(function (item) {
        return item.BookName.toLowerCase().includes(ignoreCase)
          || item.CourseName.toLowerCase().includes(ignoreCase)
          || item.CourseID.toLowerCase().includes(ignoreCase);
      })
    })
  }

  afterSearch(e){
    const { data: data, input } = this.state;
    this.setState({
      searchData: input === undefined ? data: data.filter(function(item) {
        return item.bookName === input || item.subjectName === input;
      })
    })
  }

  componentWillMount() {
    const { cookies } = this.props;
    console.log(cookies.get('StudentID'));
    axios.get(BOARD_URL)
      .then((res) => {
        console.log(res.data);
        this.setState({ data : res.data, searchData: res.data });
      })
      .catch((e) => console.log(e));
  }

  componentDidMount() {

  }

  render() {
    const entry = this.state.searchData.map(function(item, i) {
      return (
        <TableEntry
          key={i}
          bookName={item.BookName}
          subjectName={item.CourseName}
          subjectID={item.CourseID}
          bookID={item.BookID}
          cost={item.min_price}
          imgSrc={Logo}
          author={item.Author}
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

export default withCookies(Table);
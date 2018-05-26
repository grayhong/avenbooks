import React, { Component } from 'react';
import {Search, Form, Input} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import Logo from '../static/icons/logo.svg'
import BoardEntry from './BoardEntry'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      entryState: 'out',
      data: [
        {
          imageSrc: {Logo},
          bookName: 'Introduction to DB',
          subjectName: 'CS360',
          cost: '20000',
        },
        {
          imageSrc: {Logo},
          bookName: 'Programing Principles',
          subjectName: 'CS220',
          cost: '30000',
        },
        {
          imageSrc: {Logo},
          bookName: 'How to write C code',
          subjectName: 'CS492',
          cost: '15000',
        },
      ],
      searchData: [
        {
          imageSrc: {Logo},
          bookName: 'Introduction to DB',
          subjectName: 'CS360',
          cost: '20000',
        },
        {
          imageSrc: {Logo},
          bookName: 'Programing Principles',
          subjectName: 'CS220',
          cost: '30000',
        },
        {
          imageSrc: {Logo},
          bookName: 'How to write C code',
          subjectName: 'CS492',
          cost: '15000',
        },
      ],
    }

    this.detectInput = this.detectInput.bind(this);
    this.afterSearch = this.afterSearch.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.resetColor = this.resetColor.bind(this);
  }

  detectInput(e){
    this.setState({ input: e.target.value });
    console.log(e.target.value);
    const { data: data, searchData: originData, input } = this.state;
    this.setState({
      searchData: data.filter(function(item) {
        return item.bookName.includes(input) || item.subjectName.includes(input);
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

  componentWillMount() {
    const { cookies } = this.props;
  }
  componentDidMount() {

  }
  render() {
    const entry = this.state.searchData.map(function(item) {
      return (
        <BoardEntry bookName={item.bookName} subjectName={item.subjectName} cost={item.cost}/>
      )
    });

    return (
      <div>
        <div style={styles.gapTop}>
        </div>

        <Form onSubmit={this.afterSearch}>
          <Form.Input
            icon='search'
            fluid
            placeholder='What are you looking for?'
            onChange={this.detectInput}
            value={this.state.input}
            style={styles.inputStyle}
          />
        </Form>

        <div style={styles.gapTop}>
        </div>

        <table style={styles.tableFill}>
          <thead>
            <tr style={styles.tr}>
              <th style={styles.th}>Book title</th>
              <th style={styles.th}>Subject name</th>
              <th style={styles.th}>Minimum cost</th>
            </tr>
          </thead>
          <tbody>
            {entry}
          </tbody>
        </table>
      </div>
    )
  }
}

const styles={
  contentStyle: {
    height: '100vh',
    width: '70vw',
    margin : 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBoxStyle:{
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
  },
  searchStyle:{
    width: '80vw',
  },
  hiddenStyle:{
    height: '5vh',
  },
  subjectHidden:{
    height: '5vh',
  },
  textBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle :{
    fontSize: '20px',
  },
  tableFill: {
    backgroundColor: 'white',
    borderRadius: '3px',
    borderCollapse: 'collapse',
    margin: 'auto',
    padding:'5px',
    width: '80vw',
  },
  th: {
    color:'#D5DDE5',
    background: '#1b1e24',
    borderBottom:'4px solid #9ea7af',
    borderRight: '1px solid #343a45',
    fontSize:'23px',
    fontWeight: '100',
    padding: '24px',
    textAlign: 'middle',
    verticalAlign: 'middle',
  },
  tr: {
    borderTop: '1px solid #C1C3D1',
    borderBottom: '1px solid #C1C3D1',
    height: '10vh',
    color: '#666B85',
    fontSize: '16px',
    fontWeight: 'normal',
    textShadow: '0 1px 1px rgba(256, 256, 256, 0.1)',
  },
  in:{
    borderTop: '1px solid #C1C3D1',
    borderBottom: '1px solid #C1C3D1',
    backgroundColor:'#D5DDE5',
    fontSize: '16px',
    fontWeight: 'normal',
    textShadow: '0 1px 1px rgba(256, 256, 256, 0.1)',
  },
  out: {
    borderTop: '1px solid #C1C3D1',
    borderBottom: '1px solid #C1C3D1',
    backgroundColor:'white',
    fontSize: '16px',
    fontWeight: 'normal',
    textShadow: '0 1px 1px rgba(256, 256, 256, 0.1)',
  },
  td: {
    background: '#FFFFFF',
    padding: '20px',
    textAlign: 'left',
    verticalAlign: 'middle',
    fontWeight: '300',
    fontSize: '18px',
    textShadow: '-1px -1px 1px rgba(0, 0, 0, 0.1)',
    borderLeft: '1px solid #C1C3D1',
    borderRight: '1px solid #C1C3D1',
  },
  searchTerm: {
    height: '50vh',
    width: '80vw',
    border: '3px solid #00B4CC',
    padding: '5px',
    height: '20px',
    borderRadius: '5px',
    outline: 'none',
    color: '#9DBFAF',
  },
  gapTop:{
    height: '10vh',
  },
  inputStyle:{
    margin: 'auto',
    width: '40vw',
  },
}

export default withCookies(Board);
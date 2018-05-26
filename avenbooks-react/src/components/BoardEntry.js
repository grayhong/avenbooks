import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';

class BoardEntry extends Component{
  constructor(props){
    super(props);
    this.state = {
      entryState: 'out',
    };
    this.changeColor = this.changeColor.bind(this);
    this.resetColor = this.resetColor.bind(this);
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
    return (
      <tr style={styles.tr}>
        <td style={{...styles.td, backgroundColor: this.state.entryState === 'out' ? '#ffffff' : '#D5DDE5',}}
            onMouseEnter={this.changeColor} onMouseLeave={this.resetColor}>{this.props.bookName}</td>
        <td style={{...styles.td, backgroundColor: this.state.entryState === 'out' ? '#ffffff' : '#D5DDE5',}}
            onMouseEnter={this.changeColor} onMouseLeave={this.resetColor}>{this.props.subjectName}</td>
        <td style={{...styles.td, backgroundColor: this.state.entryState === 'out' ? '#ffffff' : '#D5DDE5',}}
            onMouseEnter={this.changeColor} onMouseLeave={this.resetColor}>{this.props.cost}</td>
      </tr>
    )
  }
}

const styles={
  tr: {
    borderTop: '1px solid #C1C3D1',
    borderBottom: '1px solid #C1C3D1',
    height: '10vh',
    color: '#666B85',
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
}

export default withCookies(BoardEntry);
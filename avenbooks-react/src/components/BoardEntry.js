import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';

class BoardEntry extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={styles.boxStyle}>
        <img style={styles.imageStyle} src={this.props.imgSrc} alt="professor" />
        <div style={styles.contentStyle}>
          <h3 style={styles.subjectNameStyle}>{this.props.subjectName}</h3>
          <p style={styles.subjectIDStyle}>{this.props.subjectID}</p>
          <p style={styles.bookNameStyle}>{this.props.bookName}</p>
          <p style={styles.authorNameStyle}>{"by " + this.props.author}</p>
          <p style={styles.priceStyle}>{"Price"}</p>
          <p style={styles.costStyle}>{this.props.cost + "$ ~ "}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  boxStyle: {
    border: '0.1rem solid #EDEDED',
    borderRadius: '0.1rem',
    width: '80%',
    height: '18rem',
    margin: 'auto',
    marginBottom: '4rem',
    textAlign: 'left',
    verticalAlign: 'top',
  },
  contentStyle: {
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '0.8rem',
  },
  imageStyle: {
    width: '30%',
    height: '18rem',
    display: 'inline-block',
  },
  subjectNameStyle: {
    margin: '0.2rem',
    fontSize: '1.5rem',
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '45rem',
  },
  subjectIDStyle: {
    margin: '0.2rem',
    marginTop: '0.3rem',
    fontSize: '0.85rem',
    color: '#666B85',
  },
  bookNameStyle: {
    margin: '0.2rem',
    marginTop: '2.5rem',
    fontSize: '1.15rem',
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '45rem',
  },
  authorNameStyle: {
    margin: '0.2rem',
    marginTop: '0.3rem',
    fontSize: '0.85rem',
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '45rem',
  },
  priceStyle:{
    margin: '0.2rem',
    marginTop: '2.5rem',
    fontSize: '1.15rem',
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '45rem',
    textDecoration: 'underline',
  },
  costStyle:{
    margin: '0.2rem',
    marginTop: '0.3rem',
    fontSize: '1.15rem',
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '45rem',
  },
  subjectStyle: {
    margin: '0.5rem',
    fontSize: '0.85rem',
  },
};

export default withCookies(BoardEntry);
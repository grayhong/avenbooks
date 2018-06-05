import React, { Component } from 'react';
import axios from 'axios';
import { SELL_URL, BOOK_URL, BUY_URL, SELL_IMAGE_URL } from "../constants";
import { withCookies, Cookies } from 'react-cookie';
import { Header, Card, Image, Button, Confirm, Search } from 'semantic-ui-react';
import course from '../static/images/course.png';
import image1 from '../static/images/image1.jpg';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellingInfo: [],
      bookInfo: [],
      /*
      bookInfo: {
        BookID: 1,
        BookName: "Introduction to DB",
        Author: "HSJ",
        CourseID: "CS360"
      },
      */
      /*
      sellingInfo: [
        {
          SellingID: 1,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          SellingID: 2,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          SellingID: 3,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          SellingID: 4,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          SellingID: 5,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          SellingID: 6,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          SellingID: 7,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString()
        }
      ]
      */
    };

    this.getBookInfo = this.getBookInfo.bind(this);
    this.getSellingInfo = this.getSellingInfo.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    const { cookies, bookID } = this.props;
     console.log("bookId is " + bookID);
    //const bookID = 1;
    this.getBookInfo(bookID);
    this.getSellingInfo(bookID);
  }


  /* Get book informations with bookID */
  getBookInfo(bookID) {
    console.log("getBookInfo");
    axios.get(BOOK_URL, {
      params: {
        bookID: bookID
      }
    }).then((res) => {
      this.setState({ bookInfo : res.data });
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  /* Get selling informations with bookID*/
  getSellingInfo(bookID) {
    console.log("getSellingInfo");
    axios.get(SELL_URL, {
      params: {
        bookID: bookID
      }
    }).then((res) => {
      this.setState({sellingInfo : res.data});
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { cookies, bookID } = this.props;
    return (
      <div>
        <div>
          <Header
            style={styles.headerStyle}
            as='h1'
            content={this.state.bookInfo.BookName + ', ' +
            this.state.bookInfo.Author + ', ' +
            this.state.bookInfo.CourseID}
          />
        </div>
          <Card.Group style={styles.cardGroupStyle}>
            {this.state.sellingInfo.map((info, i) => {
              return (<SellingInfo price={info.Price}
                                   sellingID={info.SellingID}
                                   sellerID={info.SellerID}
                                   time={info.Time}
                                   cookies={cookies}
                                   key={i}/>);
            })}
          </Card.Group>
      </div>
    )
  }
}

class SellingInfo extends React.Component {
  state = { open: false }

  show = () => {
    this.setState({ open: true });
  };

  /* Called when the modal when OK button */
  handleConfirm = () => {
    this.buyingReq();
    this.setState({ open: false });
  };

  /* Called when the modal is closed without clicking confirm */
  handleCancel = () => {
    this.setState({ open: false });
  };

  /* Request for buying */
  buyingReq() {
    console.log(this.props.sellingID);
    console.log(this.props.cookies.get('StudentID'));
    axios.post(BUY_URL, {
      sellingID: this.props.sellingID,
      buyerID: this.props.cookies.get('StudentID')
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Card style={styles.detailStyle}>
        <Image src={SELL_IMAGE_URL + this.props.sellingID} style={styles.imageStyle} />
        <Card.Content>
          <Card.Header>
            Price : {this.props.price}won
          </Card.Header>
          <Card.Meta>
          <spcan className='date'>
          Uploaded : {this.props.time}
          </spcan>
          </Card.Meta>
          <Card.Description>
            Seller: {this.props.sellerID}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button onClick={this.show}>BUY</Button>
            <Confirm
              open={this.state.open}
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
            />
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const styles = {
  headerStyle: {
    marginTop: '1.5vh',
  },
  detailStyle: {
    width: '20vw',
    margin: '1vw'
  },
  imageStyle: {
    height: '40vh'
  },
  cardGroupStyle: {
    marginTop: '1.5vh',
    marginLeft: '15vw',
    marginRight: '15vw',
  }
};

export default withCookies(Detail);
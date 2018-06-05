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
      myBuyingReq: [],
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
    this.getMyBuyingReq = this.getMyBuyingReq.bind(this);
  }

  /* Get my buying request to others */
  getMyBuyingReq(studentID) {
    axios.get(BUY_URL, {
      params: {
        buyerID: studentID
      }
    }).then((res) => {
      this.setState({ myBuyingReq : res.data })
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  componentWillMount() {
    console.log(this.props);
    const { cookies, match: { params : {bookID} } } = this.props;
    const sid = cookies.get('StudentID');
    console.log("bookId is " + bookID);
    this.getBookInfo(bookID);
    this.getSellingInfo(bookID);
    this.getMyBuyingReq(sid);
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
    const sid = cookies.get('StudentID');
    return (
      <div>
        <div>
          <Header
            style={styles.headerStyle}
            as='h1'
            content={this.state.bookInfo.BookName + ', ' +
            this.state.bookInfo.Author}
          />
        </div>
          <Card.Group style={styles.cardGroupStyle}>
            {this.state.sellingInfo.map((info, i) => {
              return (<SellingInfo price={info.Price}
                                   sellingID={info.SellingID}
                                   sellerID={info.SellerID}
                                   time={info.SellingTime.replace('T', ' ').split('.')[0]}
                                   cookies={cookies}
                                   bought={this.state.myBuyingReq.filter((obj) => {
                                     return obj.SellingID === info.SellingID
                                   }).length > 0}
                                   myBuyingReq={() => this.getMyBuyingReq(sid)}
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
      this.props.myBuyingReq();
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { bought } = this.props;
    return (
      <Card style={styles.detailStyle}>
        <Image src={SELL_IMAGE_URL + this.props.sellingID + '.jpeg'} style={styles.imageStyle} />
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
          {bought ? null :
            (
              <div>
                <Button onClick={this.show}>BUY</Button>
                <Confirm
                  content="Are you sure you want to delete buy this book?"
                  open={this.state.open}
                  onCancelColor='teal'
                  onCancel={this.handleCancel}
                  onConfirm={this.handleConfirm}
                />
              </div>
            )}
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
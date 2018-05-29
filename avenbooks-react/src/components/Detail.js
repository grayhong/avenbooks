import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { Header, Card, Image, Button, Confirm, Search } from 'semantic-ui-react';
import course from '../static/images/course.png';
import image1 from '../static/images/image1.jpg';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {
        BookID: 1,
        BookName: "Introduction to DB",
        Author: "HSJ",
        CourseID: "CS360"
      },
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
    }
  }

  componentWillMount() {
    const { cookies } = this.props;
  }

  render() {
    return (
      <div>
        <div>
          <Header
            as='h2'
            image={course}
            content={this.state.bookInfo.BookName + ', ' +
            this.state.bookInfo.Author + ', ' +
            this.state.bookInfo.CourseID}
          />
        </div>
          <Card.Group style={styles.cardGroupStyle}>
            {this.state.sellingInfo.map((info, i) => {
              return (<SellingInfo price={info.Price}
                                   sellingId={info.SellingID}
                                   seller={info.SellerID}
                                   time={info.Time}
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
  }
  /* Called when the modal when OK button */
  handleConfirm = () => {
    alert ("BUY!!");
    this.setState({ open: false });
  }
  /* Called when the modal is closed without clicking confirm */
  handleCancel = () => {
    alert ("CANCELED!!");
    this.setState({ open: false });
  }

  render() {
    return (
      <Card style={styles.detailStyle}>
        <Image src={image1} style={styles.imageStyle} />
        <Card.Content>
          <Card.Header>
            {this.props.price}won
          </Card.Header>
          <Card.Meta>
        <span className='date'>
          {this.props.time}
        </span>
          </Card.Meta>
          <Card.Description>
            seller: {this.props.seller}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button onClick={this.show}>BUY</Button>
            <Confirm
              open={this.state.open}
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
              size='mini'
            />
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const styles = {
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
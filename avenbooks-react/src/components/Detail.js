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
        name: "Introduction to DB",
        author: "HSJ",
        course: "CS360"
      },
      sellingInfo: [
        {
          sellingId: 1,
          seller: 20160140,
          price: 10000,
          time: new Date('2018-05-26T00:49:00+09:00').toString()
        },
        {
          sellingId: 2,
          seller: 20160710,
          price: 20000,
          time: new Date('2018-05-25T00:49:00+09:00').toString()
        },
        {
          sellingId: 3,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 4,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 5,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 6,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 7,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 8,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 9,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 10,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 11,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
        {
          sellingId: 12,
          seller: 20160022,
          price: 30000,
          time: new Date('2018-05-22T00:49:00+09:00').toString()
        },
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
            content={this.state.bookInfo.name + ', ' +
            this.state.bookInfo.author + ', ' +
            this.state.bookInfo.course}
          />
        </div>
          <Card.Group centered>
            {this.state.sellingInfo.map((info, i) => {
              return (<SellingInfo price={info.price}
                                   sellingId={info.sellingId}
                                   seller={info.seller}
                                   time={info.time}
                                   key={i}/>);
            })}
          </Card.Group>
      </div>
    )
  }
}

class SellingInfo extends React.Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

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
              content="Will you really buy?"
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
              size='large'
            />
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const styles = {
  detailStyle: {
    maxWidth: '100vh'
  },
  imageStyle: {
    height: '40vh'
  }
};

export default withCookies(Detail);
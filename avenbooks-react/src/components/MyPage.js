import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { Table, Header, Label, Button, Card, Image } from 'semantic-ui-react';
import course from '../static/images/course.png';


class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySellingInfo: [
        {
          SellingID: 1,
          BookID: 1,
          SellerID: 20160140,
          Price: 10000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString(),
          Finished: false
        },
        {
          SellingID: 2,
          BookID: 2,
          SellerID: 20160140,
          Price: 15000,
          Time: new Date('2018-05-26T00:49:00+09:00').toString(),
          Finished: false
        },
      ],
      buyingReq: [
        {
          SellingID: 1,
          BookID: 1,
          SellerID: 20160140,
          Time: new Date('2018-05-26T00:49:00+09:00').toString(),
          BuyerID: 20160710,
          Finished: false
        },
        {
          SellingID: 1,
          BookID: 1,
          SellerID: 20160140,
          Time: new Date('2018-05-26T00:49:00+09:00').toString(),
          BuyerID: 20160022,
          Finished: false
        },
        {
          SellingID: 2,
          BookID: 2,
          SellerID: 20160140,
          Time: new Date('2018-05-26T00:49:00+09:00').toString(),
          BuyerID: 20160022,
          Finished: false
        },
        {
          SellingID: 2,
          BookID: 2,
          SellerID: 20160140,
          Time: new Date('2018-05-26T00:49:00+09:00').toString(),
          BuyerID: 20160710,
          Finished: false
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
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
            <Card.Header>
              KimYoonseo
            </Card.Header>
            <Card.Meta>
              20160140
            </Card.Meta>
            <Card.Description>
              010-4454-2659 CS
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Change</Button>
            </div>
          </Card.Content>
        </Card>
        <Header
          as='h2'
          content="My Selling Info"
        />
          <div style={styles.subStyle}></div>
          <Table collapsing celled style={styles.tableStyle}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>SellingID</Table.HeaderCell>
                <Table.HeaderCell>BookID</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Finished</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.mySellingInfo.map((info, i) => {
                return (<MySellingInfo sellingID={info.SellingID}
                                       bookID={info.BookID}
                                       price={info.Price}
                                       time={info.Time}
                                       finished={info.Finished}
                                       key={i}/>);
              })}
            </Table.Body>
          </Table>
          <div style={styles.subStyle}></div>

        <Header
          as='h2'
          content="Buying Request"
        />
        <Table collapsing celled style={styles.tableStyle}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>SellingID</Table.HeaderCell>
              <Table.HeaderCell>BookID</Table.HeaderCell>
              <Table.HeaderCell>BuyerID</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Finished</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.buyingReq.map((info, i) => {
              return (<BuyingReq sellingID={info.SellingID}
                                     bookID={info.BookID}
                                     sellerID={info.SellerID}
                                     time={info.Time}
                                     buyerID={info.BuyerID}
                                     finished={info.Finished}
                                     key={i}/>);
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

class MySellingInfo extends React.Component {
  modifySellingInfo(e) {

  }

  deleteSellingInfo(e) {

  }
  render() {
    /*
    var tableRow;
    var tableRow2 = </Table.Row>;
    if (!this.props.finished) {
      tableRow = <Table.Row>;
    } else {
      tableRow = <Table.Row disabled>;
    }
    */
    return (
      <Table.Row disabled style={styles.rowStyle}>
        <Table.Cell>
          <Label ribbon>
            {this.props.sellingID}
          </Label>
        </Table.Cell>
        <Table.Cell>
          {this.props.bookID}
        </Table.Cell>
        <Table.Cell>
          {this.props.price}
        </Table.Cell>
        <Table.Cell>
          {this.props.time}
        </Table.Cell>
        <Table.Cell>
          {(this.props.finished) ? "Yes" : "No"}
        </Table.Cell>
        <Table.Cell>
          <Button content='Modify' primary></Button>
          <Button content='Delete' secondary></Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

class BuyingReq extends React.Component {
  confirmBuyingReq(e) {

  }

  rejectBuyingReq(e) {

  }

  render () {
    return (
      <Table.Row style={styles.rowStyle}>
        <Table.Cell>
          <Label ribbon>
            {this.props.sellingID}
          </Label>
        </Table.Cell>
        <Table.Cell>
          {this.props.bookID}
        </Table.Cell>
        <Table.Cell>
          {this.props.buyerID}
        </Table.Cell>
        <Table.Cell>
          {this.props.time}
        </Table.Cell>
        <Table.Cell>
          {(this.props.finished) ? "Yes" : "No"}
        </Table.Cell>
        <Table.Cell>
          <Button content='Confirm' primary></Button>
          <Button content='Reject' secondary></Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

const styles = {
  tableStyle: {
    margin: 'auto',
  },
  subStyle: {
    width: '15vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowStyle: {
    textAlign: "center"
  }
}

export default withCookies(MyPage);
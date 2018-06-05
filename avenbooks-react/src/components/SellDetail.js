import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';

class SellDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Grid.Column>
        <Segment>
          10
        </Segment>
      </Grid.Column>
    )
  }
}

export default withCookies(SellDetail);
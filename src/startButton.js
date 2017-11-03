import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { Container, Header, Content, Button, ScrollVie } from 'native-base';


class StartButton extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		loading:
  	}

  }
  fetchData = () =>{
  	fetch(url)
  	  .then((response)=>response.json())
  	  .then((data)=>console.log(data))
  }
  render() {
    return (
      <Container>
        <View  style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
          <Button full danger onPress={this.fetchData} >
            <Text>Click To Start Playing</Text>
          </Button>
        </View>
      </Container>   
     );
  }
}
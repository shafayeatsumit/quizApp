import React, { Component } from 'react';
import { Text, View, AppRegistry, ListView,StyleSheet,AlertIOS } from 'react-native';
import { Container, Header, Content, Button, ScrollVie } from 'native-base';
import MultipleChoice from 'react-native-multiple-choice'

console.disableYellowBox = true;

const url = "https://opentdb.com/api.php?amount=10"
class App extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      loading: false,
      dataSource: this.ds.cloneWithRows(["jay"]),
      score: 0
    };
  }
  fetchData = () =>{
    console.log("ds",this.ds)
    fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
        data.results.map((i)=>i.incorrect_answers.push(i.correct_answer))
        console.log(data.results)
        let result = this.ds.cloneWithRows(data.results)
        this.setState({dataSource:result,loading:true})
  })
}

  onSelectResult = (option,correctAns) => {
    if (option === correctAns){
      let currentScore = this.state.score + 1;
      this.setState({score:currentScore})
    }else{
      console.log("wroong ans",correctAns)
    }

  }
  restart = () => {
    let alertString = "your score is "+this.state.score
    AlertIOS.alert(alertString)
    console.log("score",this.state.score);
    this.setState({"loading":false,"score":0})
  }
  render() {
    if (this.state.loading === false){
        return (
          <Container>
            <View  style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <Button full danger onPress={this.fetchData} >
                <Text>Click For Playing</Text>
              </Button>
            </View>
          </Container>   
         );      
      }else{
        return(
            <View style={{flex: 1, paddingTop: 22}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <View>
                  <View style={{marginTop: 20, margin: 20, backgroundColor:"skyblue"}}>
                    <Text>{rowData.question}</Text>
                  </View>
                  <View style={styles.container}>
                      <MultipleChoice
                          options={rowData.incorrect_answers}
                          maxSelectedOptions={1}
                          onSelection={(option)=>this.onSelectResult(option,rowData.correct_answer)}
                      />
                  </View>                  
                </View>}
              />
            <View >
              <Button full success onPress={this.restart} >
                <Text>Click To Restart</Text>
              </Button>
            </View>              
            </View>        
        )
      }

  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        margin: 20
    },
});

AppRegistry.registerComponent('finderios_redux', () => App);

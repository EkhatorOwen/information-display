import React,  { Component } from 'React'
import { ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
class Home extends Component {

  state = {
    users: [],
    loading: true
  }

  componentDidMount(){
    this.getUsers();
  }

  async getUsers(){
    const res = await fetch("https://randomuser.me/api/?results=20")
    const { results } = await res.join();
    this.setState({users: [...results], loading: false})
  }

 render(){

    return (
      <ScrollView
        npSpacer={true}
        noScroll={true}
        style={styles.container}
      >
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="#ff8179"
          size="large"
        />
      
      </ScrollView>

    )

 }

}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  }
})

export default Home
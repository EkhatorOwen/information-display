import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native'

import Home from './Component/Home'

class App extends Component {
  render(){
    return(
      <view style={styles.appContainer}>
      
      <Home/>
      
      </view>
    )
  }

}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

AppRegistry.registerComponent('App',()=>App)



export default App;

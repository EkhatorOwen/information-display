import React, { Component } from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import UserList from "./UserList";

class Home extends Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const { results } = await res.json();
    this.setState({ users: [...results], loading: false });
  }

  render() {
    return (
      <ScrollView npSpacer={true} noScroll={true} style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator
            style={[styles.centering, styles.gray]}
            color="#ff8179"
            size="large"
          />
        ) : (
          <UserList users={this.state.users} />
        )}
      </ScrollView>
    );
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
    height: "100vh"
  }
});

export default Home;

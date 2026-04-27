import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log("Loaded");
  }

  componentWillUnmount() {
    console.log("Unloaded");
  }

  render() {
    return (
      <Text style={styles.text}>Hadeel</Text>
    );
  }
}

class Task20 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={this.toggle} />

        {this.state.show && <MyClassPage />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Task20;
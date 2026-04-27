import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class Task19 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <>
            <ActivityIndicator size="large" />
            <Text>Loading...</Text>
          </>
        ) : (
          <Text style={styles.text}>Hadeel</Text>
        )}
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

export default Task19;
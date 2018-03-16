import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type here!"
          onChangeText={text => {
            this.setState({ text: text });
          }}
        >
          <Text>{this.state.text}</Text>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* Flex sizes an element relative to its siblings */}
        <View style={[styles.box, {flex: 1}]} />

        {/* Override alignment using alignSelf */}
        <View style={[styles.box, {flex: 2, alignSelf: 'flex-end'}]} />

        <View style={[styles.box, {flex: 3}]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // Main axis
    flexDirection: 'row', // 'column' (default), 'row'
    justifyContent: 'center', // 'flex-start' (default), 'center', 'flex-end', 'space-between', 'space-around'

    // Cross axis
    alignItems: 'center' // 'flex-start' (default), 'center', 'flex-end', 'stretch'
  },
  box: {
    height: 50, // Overrides alignItems: 'stretch' IF flexDirection: 'row'
    width: 50, // Overrides alignItems: 'stretch' IF flexDirection: 'column'
    backgroundColor: '#e76e63',
    margin: 10, // Dimensions in React Native are unitless
  }
})

export default FlexboxExamples;
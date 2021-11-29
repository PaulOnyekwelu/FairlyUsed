import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'

const Screen = ({children, style}) => {
  console.log(new StatusBar())
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  )
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})

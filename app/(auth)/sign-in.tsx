import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const signIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Sign In</Link>
    </View>
  )
}

export default signIn
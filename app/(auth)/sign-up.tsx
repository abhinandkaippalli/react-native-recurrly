import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href="/(auth)/sign-in">Create Account</Link>
    </View>
  )
}

export default signUp
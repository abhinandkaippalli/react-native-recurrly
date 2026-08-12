import { Text } from 'react-native'
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context"
import { styled } from 'nativewind'
const SafeAreaView = styled(RNSaveAreaView)

const subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5    ">
      <Text>subscriptions</Text>
    </SafeAreaView>
  )
}

export default subscriptions
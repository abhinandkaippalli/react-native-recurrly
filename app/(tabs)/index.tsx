import "@/global.css"
import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context"
import { styled } from 'nativewind'
const SafeAreaView = styled(RNSaveAreaView)
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold">Home</Text>
      <Link href="/onboarding" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Go to Sign Up</Link>
    </SafeAreaView>
  );
}
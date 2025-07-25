import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors from '@/constants/Colors';


const Page = () => {
  const {phone, signin} = useLocalSearchParams<{phone: string, signin: string}>();
  const [code, setCode] = useState('');
  useEffect(() => {
    if (code.length === 6) {
      // Handle code submission
      console.log(`Code entered: ${code}`);
      //TODO VERIFY CODE  
    }
  }, [code]);
  const verifyCode = async () => {
  }
  const verifySignIn = async () => {
  }
  const resendCode = async () => {
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.legal}>
        We have sent you an SMS with a code to the number above.
      </Text>
      <Text style={styles.legal}>
        To complete your phone number verification, please enter the 6-digit
        activation code.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  loading : {
      backgroundColor: Colors.primary,
      alignItems: "center",
      justifyContent: "center",
  },
  legal: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
  },
});
export default Page
import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, Image } from "react-native";
const welcome_image = require("../assets/images/welcome.png");

const Page = () => {
  const openLink = () => {}
  return (
    <View style={styles.container}>
      <Image source={welcome_image} style={styles.welcome} />
      <Text style={styles.headline}> Welcome to WhatsApp </Text>
      <Text style={styles.description}>
        Read our{" "}
        <Text style={styles.link} onPress={openLink}>
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.link} onPress={openLink}>
          Terms of Service
        </Text>
        .
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
  headline: {
    fontSize : 24,
    fontWeight: 'bold',
    marginVertical : 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 80,
    color: Colors.gray
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: '100%',
    alignItems: 'center'
  },
});

export default Page;

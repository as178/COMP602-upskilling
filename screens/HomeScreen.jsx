import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}> React Navigation</Text>
      <Text style={styles.textStyle}> This is the Home Screen! </Text>
      <Button
        title="Profile"
        onPress={() =>
          props.navigation.navigate("Profile", { name: "Jane Smith" })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: "black",
  },
  headingStyle: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
  },
});

export default HomeScreen;

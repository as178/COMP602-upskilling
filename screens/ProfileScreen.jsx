import { StyleSheet, Text, View, Button } from "react-native";

function ProfileScreen(props) {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> {props.route.params.name} </Text>
      <Button title="User" onPress={() => props.navigation.navigate("User")} />
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

export default ProfileScreen;

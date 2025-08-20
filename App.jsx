import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import TextForm from "./components/TextForm";
import Loading from "./components/Loading";
import SimpleList from "./components/SimpleList";
import styles from "./style";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(false);
  const [list, setList] = useState(false);

  function showComponent(title) {
    if (title === "loading") {
      setLoading(true);
      setForm(false);
      setList(false);
    } else if (title === "form") {
      setForm(true);
      setLoading(false);
      setList(false);
    } else if (title === "list") {
      setList(true);
      setLoading(false);
      setForm(false);
    } else {
      setLoading(true);
      setForm(true);
      setList(true);
    }
  }

  return (
    <>
      <View>
        <Text style={styles.text}>Demo of Components!</Text>
      </View>

      <View>
        <Button
          style={[styles.button, { backgroundColor: "red" }]}
          textColor="white"
          labelStyle={{ fontSize: 20 }}
          onPress={() => showComponent("loading")}
        >
          Show Loading
        </Button>
        <Button
          style={[styles.button, { backgroundColor: "blue" }]}
          textColor="white"
          labelStyle={{ fontSize: 20 }}
          onPress={() => showComponent("form")}
        >
          Show Form
        </Button>
        <Button
          style={[styles.button, { backgroundColor: "green" }]}
          textColor="white"
          labelStyle={{ fontSize: 20 }}
          onPress={() => showComponent("list")}
        >
          Show Flatlist
        </Button>
        <Button
          style={[styles.button, { backgroundColor: "black" }]}
          textColor="white"
          labelStyle={{ fontSize: 20 }}
          onPress={() => showComponent("all")}
        >
          Show All
        </Button>
      </View>
      <View>
        {loading ? <Loading /> : null}
        {form ? <TextForm /> : null}
        {list ? <SimpleList /> : null}
      </View>
    </>
  );
}

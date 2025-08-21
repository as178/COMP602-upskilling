import styles from "../../style.js";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLock,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function RegisterPage() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/fitahi-logo-prototype.png")}
        />
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.text_header}>Welcome.</Text>

        <View style={styles.action}>
          <FontAwesomeIcon icon={faUser} size={24} style={styles.smallIcon} />
          <TextInput placeholder="Full Name" style={styles.textInput} />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon icon={faPhone} size={24} style={styles.smallIcon} />
          <TextInput placeholder="Mobile" style={styles.textInput} />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon
            icon={faMailBulk}
            size={24}
            style={styles.smallIcon}
          />
          <TextInput placeholder="Email" style={styles.textInput} />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon icon={faLock} size={24} style={styles.smallIcon} />
          <TextInput placeholder="Password" style={styles.textInput} />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut}>
            <View>
              <Text style={styles.textSign}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default RegisterPage;

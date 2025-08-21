import styles from "../../style.js";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useNavigation } from "@react-navigation/native";

function LoginPage() {
  const navigation = useNavigation();

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
          <TextInput placeholder="Mobile or Email" style={styles.textInput} />
        </View>

        <View style={styles.action}>
          <FontAwesomeIcon icon={faLock} size={24} style={styles.smallIcon} />
          <TextInput placeholder="Password" style={styles.textInput} />
        </View>

        <View style={styles.forgotPassword}>
          <Text style={styles.fontWeight}>Forgot Password</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut}>
            <View>
              <Text style={styles.textSign}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.socialSection}>
          <Text style={styles.dividerText}>--- or continue with ---</Text>

          <View style={styles.socialRow}>
            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity style={styles.inBut2}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={styles.smallIcon2}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Guest</Text>
            </View>

            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => navigation.navigate("Register")}
              >
                <FontAwesomeIcon icon={faUserPlus} style={styles.smallIcon2} />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Sign Up</Text>
            </View>

            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert("Coming Soon")}
              >
                <FontAwesomeIcon icon={faGoogle} style={styles.smallIcon2} />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Google</Text>
            </View>

            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert("Coming Soon")}
              >
                <FontAwesomeIcon icon={faFacebookF} style={styles.smallIcon2} />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Facebook</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginPage;

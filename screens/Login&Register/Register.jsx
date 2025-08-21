import styles from "../../style.js";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faEye,
  faEyeSlash,
  faLock,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function RegisterPage() {
  const [name, setName] = useState(""); //store the value in input field
  const [nameVerify, setNameVerify] = useState(false); //verify whether value is ok
  const [email, setEmail] = useState(""); //store the value in input field
  const [emailVerify, setEmailVerify] = useState(false); //verify whether value is ok
  const [password, setPassword] = useState(""); //store the value in input field
  const [passwordVerify, setPasswordVerify] = useState(false); //verify whether value is ok
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState(""); //store the value in input field
  const [mobileVerify, setMobileVerify] = useState(false); //verify whether value is ok

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);

    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);
    if (/[6-9]{1}[0-9]{9}/.test(mobileVar)) {
      setMobile(mobileVar);
      setMobileVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={true}
    >
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
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              onChange={(e) => handleName(e)}
            />

            {name.length < 1 ? null : nameVerify ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={24}
                style={styles.smallIcon}
                color="green"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size={24}
                style={styles.smallIcon}
                color="rgba(156, 79, 79, 1)"
              />
            )}
          </View>

          {name.length < 1 ? null : nameVerify ? null : (
            <Text style={styles.errorText}>
              Name must be more than 1 character.
            </Text>
          )}

          <View style={styles.action}>
            <FontAwesomeIcon
              icon={faPhone}
              size={24}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textInput}
              onChange={(e) => handleMobile(e)}
            />

            {mobile.length < 1 ? null : mobileVerify ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={24}
                style={styles.smallIcon}
                color="green"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size={24}
                style={styles.smallIcon}
                color="rgba(156, 79, 79, 1)"
              />
            )}
          </View>

          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text style={styles.errorText}>
              Please enter a valid phone number.
            </Text>
          )}

          <View style={styles.action}>
            <FontAwesomeIcon
              icon={faMailBulk}
              size={24}
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChange={(e) => handleEmail(e)}
            />

            {email.length < 1 ? null : emailVerify ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={24}
                style={styles.smallIcon}
                color="green"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size={24}
                style={styles.smallIcon}
                color="rgba(156, 79, 79, 1)"
              />
            )}
          </View>

          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={styles.errorText}>
              Please enter a proper email address.
            </Text>
          )}

          <View style={styles.action}>
            <FontAwesomeIcon icon={faLock} size={24} style={styles.smallIcon} />

            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={(e) => handlePassword(e)}
              secureTextEntry={!showPassword}
              value={password}
            />

            {password.length > 0 && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  style={{ marginRight: -10 }}
                  color="#383150ff"
                  size={23}
                />
              </TouchableOpacity>
            )}
          </View>

          {password.length < 1 ? null : passwordVerify ? null : (
            <Text style={styles.errorText}>
              Please enter a secure password (uppercase, lowercase, numbers,
              with 6 or more characters).
            </Text>
          )}

          <View style={styles.button}>
            <TouchableOpacity style={styles.inBut}>
              <View>
                <Text style={styles.textSign}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegisterPage;

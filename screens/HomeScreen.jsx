import { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import Gender from "react-native-vector-icons/Foundation";
import Mobile from "react-native-vector-icons/Entypo";
import Email from "react-native-vector-icons/MaterialCommunityIcons";
import FitnessIcon from "react-native-vector-icons/MaterialIcons"; // using MaterialIcons for fitness
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "./styles";
import InfoRow from "../components/InfoRow";
import Toast from "react-native-toast-message";

function HomeScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    async function getData() {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) return;

        const res = await axios.post(`${API_URL}/userdata`, { token });
        if (res.data.status === "ok") {
          setUserData(res.data.data);
        }
      } catch (error) {
        console.error("error fetching user data:", error);
      }
    }

    getData();

    setTimeout(() => {
      Toast.show({
        type: "success",
        text1: "Welcome!",
        text2: "How are ya",
        visibilityTime: 5000,
      });
    }, 2000);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header with wave background */}
      <View style={styles.header}>
        <Image
          style={styles.waveImage}
          source={require("../assets/wave.png")}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Mobile name="menu" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate("UpdateProfile", { data: userData })
          }
        >
          <Icon name="user-edit" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Avatar + Name */}
      <View style={styles.profileSection}>
        <Avatar.Image
          size={140}
          style={styles.avatar}
          source={{
            uri: !userData?.image
              ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              : userData.image,
          }}
        />
        <Text style={styles.nameText}>{userData?.name || ""}</Text>
      </View>

      {/* User Info */}
      <View style={styles.infoSection}>
        <InfoRow
          icon={<Email name="email" size={22} color="white" />}
          label="Email"
          value={userData?.email}
          color="#ff9500"
        />
        <InfoRow
          icon={<Gender name="torsos-male-female" size={26} color="white" />}
          label="Gender"
          value={userData?.gender || "?"}
          color="#0d7313"
        />
        <InfoRow
          icon={<FitnessIcon name="fitness-center" size={24} color="white" />}
          label="Fitness Level"
          value={userData?.fitnessLevel || "?"}
          color="#774BBC"
        />
        <InfoRow
          icon={<Mobile name="mobile" size={22} color="white" />}
          label="Mobile"
          value={userData?.mobile}
          color="#f2276e"
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

import { Text, View } from "react-native";
import styles from "../screens/styles";

export default function InfoRow({ icon, label, value, color }) {
  return (
    <View style={styles.infoRow}>
      <View style={[styles.infoIcon, { backgroundColor: color }]}>{icon}</View>
      <View style={styles.infoText}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue} numberOfLines={1}>
          {value || "?"}
        </Text>
      </View>
    </View>
  );
}

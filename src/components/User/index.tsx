import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Pedro Furlan</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}

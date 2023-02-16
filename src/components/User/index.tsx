import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface UserProps {
  name: string
  onRemove: () => void
}

export function User({ name, onRemove }: UserProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.btn} onPress={onRemove}>
        <Text style={styles.btnText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}

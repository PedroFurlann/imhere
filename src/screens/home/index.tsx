import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("VocÊ clicou no botão de adicionar")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',  
    borderRadius: 5,
    marginBottom: 10,

    flexDirection: 'row',
    alignItems: 'center'
    
  },

  name: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },

  btnText: {
    color: "#fff",
    fontSize: 18,
  },

  btn: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e32c44',

    alignItems: "center",
    justifyContent: "center"
  },
})
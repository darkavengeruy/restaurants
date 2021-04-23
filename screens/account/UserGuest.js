import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Loading from "../../components/Loading";

export default function UseGuest() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Image
        source={require("../../assets/restaurant-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
      <Text style={styles.description}>
        ¿Como describirías mejor tu restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cuál te ha gustado mas y
        comenta cómo ha sido tu experiencia.
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Ver tu perfil"
        onPress={() => navigation.navigate("login")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
    color: "#a65273",
  },
  button: {
    backgroundColor: "#442484",
  },
});

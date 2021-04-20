import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";
import wateringImg from "../assets/watering.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{"\n"}suas plantas{"\n"}de forma fácil
      </Text>

      {visible && <Image source={wateringImg} style={styles.image} />}

      <Text style={styles.substitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>

      <Button title={">"} onPress={handleVisibility} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
  },
  substitle: {
    textAlign: "center",
    fontSize: 18,
    color: colors.heading,
  },
  image: {
    width: 294,
    height: 285,
  },
});

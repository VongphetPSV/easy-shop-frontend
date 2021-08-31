import React from "react";
import { StyleSheet, Image, SafeAreaView, View } from "react-native";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require("../assets/Logo.png")}
          resizeMode="contain"
          style={{ height: 50 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Header;

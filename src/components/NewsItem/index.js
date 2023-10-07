import { View, Text, StyleSheet, Image } from "react-native";

const NewsItem = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ paddingHorizontal: 15, flex: 3 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

export default NewsItem;

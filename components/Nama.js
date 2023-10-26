import { Text } from "react-native";

export default Nama = (props) => {
  return (
    <Text>
      Hello Namaku {props.name}, Sekarang sedang{" "}
      {props.sibuk ? "sibuk" : "tidak sibuk"}
    </Text>
  );
};
